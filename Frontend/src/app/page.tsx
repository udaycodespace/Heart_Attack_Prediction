'use client';

import { useState } from 'react';
import PredictionForm from '@/components/PredictionForm';
import ResultDisplay from '@/components/ResultDisplay';
import { PredictionInput, PredictionResult } from '@/types/prediction';
import { sendPrediction } from '@/lib/api';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: PredictionInput) => {
    setIsLoading(true);
    setError(null);

    try {
      const predictionResult = await sendPrediction(data);
      setResult(predictionResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Prediction failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewPrediction = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-red-500 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Heart Disease Prediction System
          </h1>
          <p className="text-lg items-center text-gray-600">
            Enter your health details to assess the risk of heart disease using advanced machine learning
          </p>
        </header>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
            {error}
          </div>
        )}

        {/* Main Content */}
        {!result ? (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
        ) : (
          <ResultDisplay result={result} onNewPrediction={handleNewPrediction} />
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>
            <strong>Disclaimer:</strong> This is a predictive tool and should not replace professional medical advice.
            Always consult with a healthcare provider for medical concerns.
          </p>
        </footer>
      </div>
    </div>
  );
}

