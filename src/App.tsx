import Stoplight from './components/stoplight';

function App() {
	return (
		<>
			<main className='bg-dark flex flex-row gap-2'>
				<Stoplight key={1} green_duration={5} red_duration={5} yellow_duration={1} />
				<Stoplight key={2} green_duration={7} red_duration={7} yellow_duration={2} startingState='yellow' />
				<Stoplight key={3} green_duration={9} red_duration={9} yellow_duration={3} />
			</main>
		</>
	);
}

export default App;
