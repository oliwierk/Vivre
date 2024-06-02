export default function Hero() {
	return (
		<div className='flex w-full h-[120vh]'>
			<div className='relative h-full w-1/2 text-white'>
				<div className='flex flex-col gap-12 absolute top-[18%] pl-12 pr-32'>
					<h1 className='text-9xl tracking-tight'>
						Experience timeless elegance.
					</h1>
					<h2 className='text-xl text-neutral-300'>
						Explore our curated collection of jewelry, each piece crafted to
						perfection. Experience luxury that lasts.
					</h2>
					<button></button>
					<button></button>
				</div>
			</div>
			<div className='w-1/2 h-full'>
				<video
					autoPlay
					loop
					muted
					playsInline
					className='w-full h-full object-cover'
				>
					<source src={"/herovideo.mp4"} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}
