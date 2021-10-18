import { Project } from '../../../interfaces';
import { Header, Button, SimpleIcon } from '../../UI';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';

interface Props {
  project: Project;
}

export const ProjectHeader = (props: Props): JSX.Element => {
  const { name, description, showStatistics, links } = props.project;

  return (
    <Header>
      <Link href='/'>
        <span className='text-white flex items-center mb-4 cursor-pointer'>
          <ArrowLeftIcon className='h-5 w-5 mr-2' />
          Go Back
        </span>
      </Link>

      {/* TEXT */}
      <div>
        <h1 className='font-bold text-4xl sm:text-5xl mb-3'>{name}</h1>
        <h4 className='text-lg sm:text-base'>{description}</h4>
      </div>

      {/* BUTTONS */}
      <div className='flex flex-col sm:flex-row mt-4 pt-4'>
        <Button classes='mb-4 sm:mr-4 group'>
          <a
            href={links.github}
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
            Repository
          </a>
        </Button>
        {showStatistics && (
          <Button classes='mb-4 sm:mr-4 group'>
            <a
              href={links.dockerhub}
              target='_blank'
              rel='noreferrer'
              className='flex items-center justify-center'
            >
              <span className=''>
                <SimpleIcon
                  icon='docker'
                  size={18}
                  styles='mr-1 fill-current text-white group-hover:text-gray-900'
                />
              </span>
              Docker Hub
            </a>
          </Button>
        )}
        <Button classes='mb-0 sm:mb-4'>
          <a
            href={links.demo}
            target='_blank'
            rel='noreferrer'
            className='flex items-center justify-center'
          >
            Live Demo
          </a>
        </Button>
      </div>
    </Header>
  );
};
