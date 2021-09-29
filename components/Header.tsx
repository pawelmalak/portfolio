import { Button } from './UI';

export const Header = (): JSX.Element => {
  return (
    <header className='p-8 bg-gradient-to-r from-indigo-600  to-blue-400 text-white flex flex-col'>
      {/* TEXT */}
      <div>
        <h1 className='font-bold text-5xl mb-2'>Paweł Malak</h1>
        <h4 className='text-xl'>
          Fullstack Developer and Open Source enthusiast
        </h4>
      </div>

      {/* BUTTONS */}
      <div className='flex flex-col sm:flex-row mt-4 pt-4'>
        <Button classes='mb-4 sm:mr-4'>GitHub Profile</Button>
        <Button classes='mb-0 sm:mb-4'>Download CV</Button>
      </div>
    </header>
  );
};
