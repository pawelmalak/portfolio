import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};
export default App;
