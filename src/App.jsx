import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Teams from './components/Teams';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Teams />
        <JoinForm />
      </main>
      <Footer />
    </>
  );
}

export default App;