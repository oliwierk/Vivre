export default function Navbar() {
	return (
		<div className='flex justify-center items-center z-10 fixed w-full h-[10vh] bg-black bg-opacity-30 text-neutral-400'>
			<div className='flex items-center justify-between w-[94%]'>
				<div className='flex gap-12 w-1/3'>
					<a className='hover:text-neutral-50 cursor-pointer'>About</a>
					<a className='hover:text-neutral-50 cursor-pointer'>Collections</a>
				</div>
				<div className='flex'>
					<a className='uppercase text-white text-2xl tracking-wider'>Vivre</a>
				</div>
				<div className='flex gap-12 w-1/3 justify-end'>
					<a className='hover:text-neutral-50 cursor-pointer'>Contact</a>
					<a className='hover:text-neutral-50 cursor-pointer'>Cart</a>
				</div>
			</div>
		</div>
	);
}
