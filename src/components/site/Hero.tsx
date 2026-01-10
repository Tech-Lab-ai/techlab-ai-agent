
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Hospedagem de Sites de Alta Performance</h1>
      <p className="text-xl mb-8">A melhor solução para o seu negócio decolar na web.</p>
      <Link href="/hospedagem" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200">
        Conheça Nossos Planos
      </Link>
    </section>
  );
};

export default Hero;
