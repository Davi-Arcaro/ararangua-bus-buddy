import { api } from './api';
import { Peca } from '@/types/transit';

export const pecaService = {
  getAll: (page = 0, size = 20) => 
    api.get<Peca[]>('/pecas', { params: { page, size } }),
  
  getById: (id: number) => 
    api.get<Peca>(`/pecas/${id}`),
  
  create: (data: Omit<Peca, 'id'>) => 
    api.post<Peca>('/pecas', data),
  
  update: (id: number, data: Partial<Peca>) => 
    api.put<Peca>(`/pecas/${id}`, data),
  
  delete: (id: number) => 
    api.delete(`/pecas/${id}`),
};
