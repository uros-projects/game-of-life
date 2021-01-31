import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';

const numRows = 30;
const numCols = 30;

const operations = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, -1],
	[0, 1],
	[1, -1],
	[1, 0],
	[1, 1]
];

const App = () => {
	const [grid, setGrid] = useState( () => {
		const rows = [];
		
		for(let i = 0; i < numRows; i++) {
			rows.push(Array.from(Array(numCols), () => 0));
		}

		return rows;
	});

	const [running, setRunning] = useState(false);
	const runningRef = useRef(running);
	
	runningRef.current = running;

	const runSimulation = useCallback( () => {
		if(!runningRef.current) {
			return;
		}

		setGrid( g => {
			return produce(g, gridCopy => {
				for(let i = 0; i < numRows; i++) {
					for(let k = 0; k < numCols; k++) {
						let neighbors = 0;
						operations.forEach( ([x, y]) => {
							const newI = i + x;
							const newK = k + y;
							
							if(newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
								neighbors += g[newI][newK];
							}
						})

						// RULES:
						if(neighbors < 2 || neighbors > 3) {
							gridCopy[i][k] = 0;
						} else if (g[i][k] === 0 && neighbors === 3) {
							gridCopy[i][k] = 1;
						}
					}
				}
			})
		})

		setTimeout(runSimulation, 150);
	}, []);

	
	return (
		<div style={{ height: '100vh', width: '100vw', background: '#eeeeee', margin: '0 auto', paddingTop: '1rem', textAlign: 'center' }}>
			<h3>Game Of Life</h3>
			<p>Set the fields you want to make 'alive', and click start. You can also change field status by clicking during the simulation.</p>
			<button
				onClick={ () => {
					setRunning(!running);
					
					if(!running) {
						runningRef.current = true;
						runSimulation();
					}
				}}
				style={{
					display: 'block',
					margin: '2rem auto',
					padding: '1rem',
					width: '16rem',
					background: '#f15025',
					color: 'white',
					fontSize: '1.2rem',
					fontWeight: 'bold',
					borderRadius: '0.9rem',
					cursor: 'pointer',
					border: '2px solid black',
					outline: 'none'

				}}
			>
				{running ? "S T O P" : "S T A R T"}
			</button>

			<div style={{ display: 'block', position: 'relative', width: '40rem', margin: '2rem auto' }}>
				<div 
					style={{
						display: "grid",
						gridTemplateColumns: `repeat(${numCols}, 20px)`,
						margin: '0 1.6rem',
					}}
				>
					{grid.map( (rows, i) =>
						rows.map( (col, k) => (
							<div
								key={`${i}-${k}`}
								onClick={ () => {
									const newGrid = produce(grid, gridCopy => {
										gridCopy[i][k] = grid[i][k] ? 0 : 1;
									})
									setGrid(newGrid);
								}}
								style={{
									widths: 20,
									height: 20,
									backgroundColor: grid[i][k] ? "#f15025" : undefined,
									border: "solid 1px black"
								}}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
