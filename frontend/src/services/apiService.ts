import apiClient from '@/lib/api';

export interface PingResponse {
  message: string;
  timestamp: string;
  status: string;
  version: string;
}

export interface HealthResponse {
  status: string;
  timestamp: string;
  service: string;
}

export const apiService = {
  // Ping endpoint
  async ping(): Promise<PingResponse> {
    const response = await apiClient.get('/ping');
    return response.data;
  },

  // Health check endpoint
  async health(): Promise<HealthResponse> {
    const response = await apiClient.get('/ping/health');
    return response.data;
  },
};

