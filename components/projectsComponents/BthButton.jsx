import Link from 'next/link';

export default function BthButton() {
  return (
    <div className='flex justify-end p-7'>
      <Link href='/'>
        <a className='font-open font-bold text-white md:text-2xl'>Return</a>
      </Link>
    </div>
  );
}
