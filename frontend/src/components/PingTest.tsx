'use client';

import { useState } from 'react';
import { apiService, PingResponse, HealthResponse } from '@/services/apiService';

export default function PingTest() {
  const [pingData, setPingData] = useState<PingResponse | null>(null);
  const [healthData, setHealthData] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePing = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.ping();
      setPingData(data);
    } catch (err: any) {
      setError(err.message || 'Failed to ping backend');
    } finally {
      setLoading(false);
    }
  };

  const handleHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.health();
      setHealthData(data);
    } catch (err: any) {
      setError(err.message || 'Failed to get health status');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Backend Connection Test</h2>
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <button
            onClick={handlePing}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Testing...' : 'Test Ping'}
          </button>
          
          <button
            onClick={handleHealth}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
          >
            {loading ? 'Testing...' : 'Check Health'}
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <strong>Error:</strong> {error}
          </div>
        )}

        {pingData && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">Ping Response:</h3>
            <pre className="text-sm text-blue-700 whitespace-pre-wrap">
              {JSON.stringify(pingData, null, 2)}
            </pre>
          </div>
        )}

        {healthData && (
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h3 className="font-semibold text-green-800 mb-2">Health Response:</h3>
            <pre className="text-sm text-green-700 whitespace-pre-wrap">
              {JSON.stringify(healthData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

