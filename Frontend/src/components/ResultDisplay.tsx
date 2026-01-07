'use client';

import React from 'react';
import { PredictionResult } from '@/types/prediction';

interface ResultDisplayProps {
  result: PredictionResult | null;
  onNewPrediction: () => void;
}

export default function ResultDisplay({ result, onNewPrediction }: ResultDisplayProps) {
  if (!result) return null;

  const isHighRisk = result.prediction === 1;

  return (
    <div className="mt-8 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Prediction Result
        </h2>

        {/* Result Badge */}
        <div
          className={`p-8 rounded-xl text-center mb-6 ${
            isHighRisk
              ? 'bg-red-50 border-2 border-red-500'
              : 'bg-green-50 border-2 border-green-500'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            {isHighRisk ? (
              <svg
                className="w-16 h-16 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            ) : (
              <svg
                className="w-16 h-16 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <h3
            className={`text-2xl font-bold mb-2 ${
              isHighRisk ? 'text-red-700' : 'text-green-700'
            }`}
          >
            {isHighRisk ? 'High Risk of Heart Disease' : 'Low Risk of Heart Disease'}
          </h3>
          <p className={`text-lg ${isHighRisk ? 'text-red-600' : 'text-green-600'}`}>
            Prediction: {isHighRisk ? 'Positive (1)' : 'Negative (0)'}
          </p>
        </div>

        {/* Recommendations */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            {isHighRisk ? 'Recommendations:' : 'Keep up the good work!'}
          </h4>
          <ul className="space-y-3 text-gray-700">
            {isHighRisk ? (
              <>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Consult with a cardiologist as soon as possible</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Maintain a heart-healthy diet</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Engage in regular physical activity as advised by your doctor</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Monitor your blood pressure and cholesterol levels regularly</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Follow your healthcare provider&apos;s recommendations</span>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Continue with a balanced diet and regular exercise</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Schedule regular health check-ups</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Maintain a healthy lifestyle</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Be aware of heart disease symptoms</span>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onNewPrediction}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow-md hover:shadow-lg"
          >
            Make Another Prediction
          </button>
        </div>
      </div>
    </div>
  );
}
