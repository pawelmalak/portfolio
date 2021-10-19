import { Button, SimpleIcon, Header } from '../UI';

export const HomeHeader = (): JSX.Element => {
  return (
    <Header
      title='Paweł Malak'
      subtitle='Fullstack Developer and Open Source enthusiast'
    >
      {/* BUTTONS */}
      <div className='flex flex-col sm:flex-row mt-4 pt-4'>
        <Button classes='mb-4 sm:mr-4 group'>
          <a
            href='https://github.com/pawelmalak'
            target='_blank'
            rel='noreferrer'
            className='flex items-center justify-center'
          >
            <span className=''>
              <SimpleIcon
                icon='github'
                size={18}
                styles='mr-1 fill-current text-white group-hover:text-gray-900'
              />
            </span>
            GitHub Profile
          </a>
        </Button>
        {/* <Button classes='mb-0 sm:mb-4'>Download CV</Button> */}
      </div>
    </Header>
  );
};
