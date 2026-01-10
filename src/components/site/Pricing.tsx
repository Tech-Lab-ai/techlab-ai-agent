
import React from 'react';

const Pricing = () => {
  const plans = [
    { id: 'price_123', name: 'Básico', price: 'R$ 29,90/mês', features: ['10 GB de SSD', '1 Domínio', '10 Contas de Email'] },
    { id: 'price_456', name: 'Pro', price: 'R$ 59,90/mês', features: ['50 GB de SSD', '5 Domínios', 'Contas de Email Ilimitadas'] },
    { id: 'price_789', name: 'Revenda', price: 'R$ 129,90/mês', features: ['200 GB de SSD', 'Domínios Ilimitados', 'Painel WHM'] },
  ];

  return (
    <section className="pricing py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Nossos Planos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="border rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
                Contratar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
