import React from 'react';
import { ArrowRight, CheckCircle2, CreditCard, DollarSign, Lock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  const navigate = useNavigate();
  
  const handleStartNow = () => {
    navigate('/apply');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#3949ab] text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/kotak-league.png')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
          </div>
          
          <div className="container mx-auto px-6 py-24 text-center relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Kotak Credit Card Limit Increase
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Get instant approval on your Kotak credit card limit increase request
            </p>
            <button 
              onClick={handleStartNow}
              className="bg-gradient-to-r from-white to-blue-50 text-blue-900 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            {/* Credit Card Display */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="flex justify-center items-center gap-6 flex-wrap perspective-1000">
                <div className="transform hover:scale-105 hover:-rotate-6 transition-transform duration-300">
                  <img 
                    src="/kotak-white.png" 
                    alt="Kotak White Credit Card"
                    className="h-48 md:h-56 object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="transform hover:scale-105 hover:rotate-0 transition-transform duration-300 z-10">
                  <img 
                    src="/kotak-league.png" 
                    alt="Kotak League Credit Card"
                    className="h-48 md:h-56 object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="transform hover:scale-105 hover:rotate-6 transition-transform duration-300">
                  <img 
                    src="/kotak-mojo.png" 
                    alt="Kotak Mojo Credit Card"
                    className="h-48 md:h-56 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Kotak Credit Cards?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="h-8 w-8 text-blue-600" />,
                  title: "Higher Credit Limits",
                  description: "Get access to increased spending power with higher credit limits",
                  image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80"
                },
                {
                  icon: <Shield className="h-8 w-8 text-blue-600" />,
                  title: "Premium Benefits",
                  description: "Enjoy exclusive rewards, cashback, and lifestyle privileges",
                  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80"
                },
                {
                  icon: <Lock className="h-8 w-8 text-blue-600" />,
                  title: "Secure Transactions",
                  description: "Advanced security features for worry-free transactions",
                  image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="h-48 relative">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="mb-4 inline-block p-3 bg-blue-50 rounded-xl">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Simple Application Process
            </h2>
            <div className="max-w-3xl mx-auto">
              {[
                "Fill the online application form",
                "Submit required documents",
                "Get instant approval",
                "Enjoy higher credit limits"
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4 mb-6 bg-blue-50 p-4 rounded-xl hover:bg-blue-100 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Increase Your Credit Limit?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join thousands of satisfied Kotak credit card holders who have successfully increased their limits
            </p>
            <button 
              onClick={handleStartNow}
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;