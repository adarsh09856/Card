import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout';

function CardDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardType: '',
    bankName: '',
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    currentLimit: '',
    requestedLimit: '',
    annualIncome: '',
    occupation: '',
    companyName: '',
    experience: '',
    address: '',
    pincode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Card Details submitted:', formData);
    // Handle submission logic here
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={() => navigate('/apply')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Application
          </button>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Card Details</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Type
                </label>
                <select
                  name="cardType"
                  value={formData.cardType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Card Type</option>
                  <option value="visa">Visa</option>
                  <option value="mastercard">Mastercard</option>
                  <option value="rupay">RuPay</option>
                  <option value="amex">American Express</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bankName"
                  placeholder="Enter Bank Name"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Enter Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  pattern="[0-9]{16}"
                  maxLength={16}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name on Card
                </label>
                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Enter Name as on Card"
                  value={formData.nameOnCard}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Expiry Date
                </label>
                <input
                  type="month"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Credit Limit
                </label>
                <input
                  type="number"
                  name="currentLimit"
                  placeholder="Enter Current Credit Limit"
                  value={formData.currentLimit}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requested Credit Limit
                </label>
                <input
                  type="number"
                  name="requestedLimit"
                  placeholder="Enter Requested Credit Limit"
                  value={formData.requestedLimit}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Income
                </label>
                <input
                  type="number"
                  name="annualIncome"
                  placeholder="Enter Annual Income"
                  value={formData.annualIncome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Occupation
                </label>
                <select
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Occupation</option>
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self Employed</option>
                  <option value="business">Business Owner</option>
                  <option value="professional">Professional</option>
                  <option value="retired">Retired</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Work Experience (in years)
                </label>
                <input
                  type="number"
                  name="experience"
                  placeholder="Enter Work Experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Address
                </label>
                <textarea
                  name="address"
                  placeholder="Enter Current Address"
                  value={formData.address}
                  onChange={handleChange as any}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PIN Code
                </label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="Enter PIN Code"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  pattern="[0-9]{6}"
                  maxLength={6}
                />
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CardDetails;