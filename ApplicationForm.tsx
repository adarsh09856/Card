import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout';

function ApplicationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    panNumber: '',
    city: '',
    referenceId: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/card-details');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Credit Limit Increase Application</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your phone number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  pattern="[0-9]{10}"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="third">Third Gender</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PAN Number
                </label>
                <input
                  type="text"
                  name="panNumber"
                  placeholder="Enter Your PAN Number"
                  value={formData.panNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter Your City Name"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reference ID
                </label>
                <input
                  type="text"
                  name="referenceId"
                  placeholder="Enter Your Reference ID"
                  value={formData.referenceId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ApplicationForm;