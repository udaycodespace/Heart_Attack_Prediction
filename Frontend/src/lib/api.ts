import { PredictionInput } from '@/types/prediction';

const FLASK_API_URL = process.env.NEXT_PUBLIC_FLASK_API_URL || 'http://127.0.0.1:5000';

export async function sendPrediction(data: PredictionInput) {
  try {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    const response = await fetch(`${FLASK_API_URL}/predictdata`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    
    let prediction: number;
    
    try {
      const json = JSON.parse(text);
      prediction = json.results || json.prediction || 0;
    } catch {

      prediction = parseInt(text) || 0;
    }

    return {
      prediction,
      risk: prediction === 1 ? ('high' as const) : ('low' as const),
    };
  } catch (error) {
    console.error('Prediction error:', error);
    throw new Error('Failed to get prediction. Please try again.');
  }
}
