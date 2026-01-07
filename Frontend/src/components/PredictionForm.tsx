'use client';

import React, { useState } from 'react';
import { PredictionInput } from '@/types/prediction';

interface PredictionFormProps {
  onSubmit: (data: PredictionInput) => Promise<void>;
  isLoading: boolean;
}

export default function PredictionForm({ onSubmit, isLoading }: PredictionFormProps) {
  const [formData, setFormData] = useState<PredictionInput>({
    Age: 0,
    sex: 0,
    cp: 0,
    trestbps: 0,
    chol: 0,
    fbs: 0,
    restecg: 0,
    thalach: 0,
    exang: 0,
    oldpeak: 0,
    slope: 0,
    ca: 0,
    thal: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleReset = () => {
    setFormData({
      Age: 0,
      sex: 0,
      cp: 0,
      trestbps: 0,
      chol: 0,
      fbs: 0,
      restecg: 0,
      thalach: 0,
      exang: 0,
      oldpeak: 0,
      slope: 0,
      ca: 0,
      thal: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Age */}
        <div className="space-y-2">
          <label htmlFor="Age" className="block text-sm font-medium text-gray-900">
            Age (Years)
          </label>
          <input
            type="number"
            id="Age"
            name="Age"
            value={formData.Age || ''}
            onChange={handleChange}
            required
            min="0"
            max="120"
            step="1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Sex */}
        <div className="space-y-2">
          <label htmlFor="sex" className="block text-sm font-medium text-gray-900">
            Sex
          </label>
          <select
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option value="">Select Gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        {/* Chest Pain Type */}
        <div className="space-y-2">
          <label htmlFor="cp" className="block text-sm font-medium text-gray-900">
            Chest Pain Type (0-3)
          </label>
          <input
            type="number"
            id="cp"
            name="cp"
            value={formData.cp || ''}
            onChange={handleChange}
            required
            min="0"
            max="3"
            step="1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Resting Blood Pressure */}
        <div className="space-y-2">
          <label htmlFor="trestbps" className="block text-sm font-medium text-gray-900">
            Resting Blood Pressure (mm Hg)
          </label>
          <input
            type="number"
            id="trestbps"
            name="trestbps"
            value={formData.trestbps || ''}
            onChange={handleChange}
            required
            min="0"
            step="1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Cholesterol */}
        <div className="space-y-2">
          <label htmlFor="chol" className="block text-sm font-medium text-gray-900">
            Cholesterol (mg/dl)
          </label>
          <input
            type="number"
            id="chol"
            name="chol"
            value={formData.chol || ''}
            onChange={handleChange}
            required
            min="0"
            step="1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Fasting Blood Sugar */}
        <div className="space-y-2">
          <label htmlFor="fbs" className="block text-sm font-medium text-gray-900">
            Fasting Blood Sugar &gt; 120 mg/dl
          </label>
          <select
            id="fbs"
            name="fbs"
            value={formData.fbs}
            onChange={handleChange}
            required
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        {/* Resting ECG */}
        <div className="space-y-2">
          <label htmlFor="restecg" className="block text-sm font-medium text-gray-900">
            Resting ECG Results (0-2)
          </label>
          <input
            type="number"
            id="restecg"
            name="restecg"
            value={formData.restecg || ''}
            onChange={handleChange}
            required
            min="0"
            max="2"
            step="1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Maximum Heart Rate */}
        <div className="space-y-2">
          <label htmlFor="thalach" className="block text-sm font-medium text-gray-900">
            Maximum Heart Rate Achieved
          </label>
          <input
            type="number"
            id="thalach"
            name="thalach"
            value={formData.thalach || ''}
            onChange={handleChange}
            required
            min="0"
            step="1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Exercise Induced Angina */}
        <div className="space-y-2">
          <label htmlFor="exang" className="block text-sm font-medium text-gray-900">
            Exercise Induced Angina
          </label>
          <select
            id="exang"
            name="exang"
            value={formData.exang}
            onChange={handleChange}
            required
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        {/* ST Depression */}
        <div className="space-y-2">
          <label htmlFor="oldpeak" className="block text-sm font-medium text-gray-900">
            ST Depression (0-6.2)
          </label>
          <input
            type="number"
            id="oldpeak"
            name="oldpeak"
            value={formData.oldpeak || ''}
            onChange={handleChange}
            required
            min="0"
            max="6.2"
            step="0.1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Slope */}
        <div className="space-y-2">
          <label htmlFor="slope" className="block text-sm font-medium text-gray-900">
            Slope of Peak Exercise ST Segment (0-2)
          </label>
          <input
            type="number"
            id="slope"
            name="slope"
            value={formData.slope || ''}
            onChange={handleChange}
            required
            min="0"
            max="2"
            step="1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Number of Major Vessels */}
        <div className="space-y-2">
          <label htmlFor="ca" className="block text-sm font-medium text-gray-900">
            Number of Major Vessels (0-4)
          </label>
          <input
            type="number"
            id="ca"
            name="ca"
            value={formData.ca || ''}
            onChange={handleChange}
            required
            min="0"
            max="4"
            step="1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Thalassemia */}
        <div className="space-y-2">
          <label htmlFor="thal" className="block text-sm font-medium text-gray-900">
            Thalassemia (1-3)
          </label>
          <input
            type="number"
            id="thal"
            name="thal"
            value={formData.thal || ''}
            onChange={handleChange}
            required
            min="1"
            max="3"
            step="1"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {isLoading ? 'Processing...' : 'Predict'}
        </button>
        <button
          type="button"
          onClick={handleReset}
          disabled={isLoading}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition disabled:bg-gray-100 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
