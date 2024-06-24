import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Testimonials } from './components/Testimonials';
import Faq from './components/Faq';
import { Usetitle } from '../../hook/Usetitle';

export const HomePage = () => {
  Usetitle('Access our ebook collection');
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
