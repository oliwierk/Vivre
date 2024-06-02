import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<div className='relative flex flex-col items-center w-full h-[300vh]'>
			<Navbar></Navbar>
			<Hero></Hero>
		</div>
	);
}
