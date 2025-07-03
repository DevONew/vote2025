import { http } from 'msw';
import { electionMockData } from './mock-data';

export const handlers = [
  http.get('/api/election', () => {
    return new Response(JSON.stringify(electionMockData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }),
];