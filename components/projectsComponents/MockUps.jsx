import Image from 'next/image';

export default function MockUps({ mockups }) {
  return (
    <div className='flex flex-col justify-between'>
      <div className='bg-orange h-auto mt-24 p-4 flex flex-col xl:w-3/4 xl:self-end items-center relative'>
        <p className='font-open hidden text-gray text-xl mt-10 md:block md:text-3xl lg:text-4xl lg:font-extrabold font-bold transform md:rotate-90 md:tracking-widest md:flex md:self-center md:absolute md:-right-11 md:top-40 h-auto md:text-primary'>
          Approach
        </p>
        {mockups.desktop?.map((desktopMockup, index) => (
          <Image
            key={`mobile-${index}`}
            width={desktopMockup.width}
            height={desktopMockup.height}
            className='h-auto w-5/6 transition duration-300'
            src={desktopMockup.src}
            alt='A snapshot of the mobile version'
          />
        ))}
      </div>
      <div className='bg-orange h-auto mt-10 p-4 pb-2 flex flex-col xl:w-3/4 xl:self-end md:flex-row lg:justify-center items-center'>
        {mockups.mobile?.map((mobileMockup, index) => (
          <Image
            key={`mobile-${index}`}
            width={mobileMockup.width}
            height={mobileMockup.height}
            className='h-auto transition duration-300'
            src={mobileMockup.src}
            alt='A snapshot of the mobile version'
          />
        ))}
      </div>
    </div>
  );
}