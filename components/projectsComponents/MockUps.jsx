import Image from 'next/image';

export default function MockUps({ mockups }) {
  return (
    <div className='flex flex-col justify-between'>
      <div className='bg-orange h-auto mt-24 p-4 flex flex-col xl:w-3/4 xl:self-end items-center relative'>
        <p className='font-open hidden text-gray text-xl mt-10 lg:block lg:text-3xl lg:text-4xl lg:font-extrabold font-bold transform lg:rotate-90 lg:tracking-widest lg:flex lg:self-center lg:absolute lg:-right-11 lg:top-40 h-auto lg:text-primary'>
          Approach
        </p>
        {mockups.desktop?.map((desktopMockup, index) => (
          <div
            key={`desktop-${index}`}
            className='h-auto w-5/6 transition duration-300'
          >
            <Image
              width={desktopMockup.width}
              height={desktopMockup.height}
              src={desktopMockup.src}
              alt='A snapshot of the mobile version'
            />
          </div>
        ))}
      </div>
      <div className='bg-orange h-auto mt-10 p-4 pb-2 flex flex-col xl:w-3/4 xl:self-end md:flex-row lg:justify-center items-center'>
        {mockups.mobile?.map((mobileMockup, index) => (
          <div
            key={`mobile-${index}`}
            className='h-auto transition duration-300'
          >
            <Image
              width={mobileMockup.width}
              height={mobileMockup.height}
              src={mobileMockup.src}
              alt='A snapshot of the mobile version'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
