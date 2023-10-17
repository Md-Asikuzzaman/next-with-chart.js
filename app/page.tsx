import ChartView from './components/ChartView';
import Header from './components/Header';

export default function Home() {


  return (
    <div className='container'>
      <Header />
      <div className='px-6 mt-8'>
        <ChartView  />
      </div>
    </div>
  );
}
