import { api } from './api';
import { Viagem } from '@/types/transit';

export const viagemService = {
  getAll: (page = 0, size = 20) => 
    api.get<Viagem[]>('/viagens', { params: { page, size } }),
  
  getById: (id: number) => 
    api.get<Viagem>(`/viagens/${id}`),
  
  create: (data: Omit<Viagem, 'id'>) => 
    api.post<Viagem>('/viagens', data),
  
  update: (id: number, data: Partial<Viagem>) => 
    api.put<Viagem>(`/viagens/${id}`, data),
  
  delete: (id: number) => 
    api.delete(`/viagens/${id}`),
};
