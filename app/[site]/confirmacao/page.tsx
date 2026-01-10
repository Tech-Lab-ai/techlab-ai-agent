
import React from 'react';
import SiteLayout from '../layout';
import Link from 'next/link';

const ConfirmationPage = () => {
  const confirmedPlan = {
    name: 'Pro',
    price: 'R$ 59,90/mês',
    features: ['50 GB de SSD', '5 Domínios', 'Contas de Email Ilimitadas'],
  };

  return (
    <SiteLayout>
      <section className="confirmation py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Compra Confirmada!</h2>
          <p className="mb-8">Obrigado por escolher nossos serviços. Seu plano foi ativado com sucesso.</p>
          <div className="border rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">{confirmedPlan.name}</h3>
            <p className="text-4xl font-bold mb-4">{confirmedPlan.price}</p>
            <ul className="mb-8">
              {confirmedPlan.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
          <Link href="/cliente" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 mt-8 inline-block">
            Acessar Área do Cliente
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ConfirmationPage;
