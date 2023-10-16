import { useEffect, useState } from 'react';

type StoplightProps = {
	red_duration?: number;
	yellow_duration?: number;
	green_duration?: number;
	startingState?: StoplightState;
};

const StoplightState = {
	red: 'red',
	yellow: 'yellow',
	green: 'green',
} as const;

type StoplightState = (typeof StoplightState)[keyof typeof StoplightState];

const Stoplight = ({
	red_duration = 5,
	green_duration = 10,
	yellow_duration = 2,
	startingState = StoplightState.red,
}: StoplightProps) => {
	const [currentState, setCurrentState] = useState<StoplightState>(startingState);

	useEffect(() => {
		const timer = setTimeout(
			() => {
				switch (currentState) {
					case StoplightState.red:
						setCurrentState(StoplightState.green);
						break;
					case StoplightState.yellow:
						setCurrentState(StoplightState.red);
						break;
					case StoplightState.green:
						setCurrentState(StoplightState.yellow);
						break;
				}
			},
			currentState === StoplightState.red
				? red_duration * 1000
				: currentState === StoplightState.yellow
				? yellow_duration * 1000
				: green_duration * 1000
		);

		return () => {
			clearTimeout(timer);
		};
	}, [currentState, green_duration, red_duration, yellow_duration]);

	return (
		<div className='flex flex-col gap-2'>
			<div
				className={`h-48 w-48 rounded-full ${currentState === StoplightState.red ? `bg-red-600` : `bg-gray-500`}`}
			></div>
			<div
				className={`h-48 w-48 rounded-full ${currentState === StoplightState.yellow ? `bg-yellow-400` : `bg-gray-500`}`}
			></div>
			<div
				className={`h-48 w-48 rounded-full ${currentState === StoplightState.green ? `bg-green-500` : `bg-gray-500`}`}
			></div>
		</div>
	);
};

export default Stoplight;
