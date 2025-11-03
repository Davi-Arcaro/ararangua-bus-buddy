import { api, PaginatedResponse } from './api';

export interface ProgressoViagem {
  id: number;
  viagem_id: number;
  ponto_parada_id: number;
  horario_chegada: string;
  horario_saida: string;
}

export const progressoViagemService = {
  getAll: (page = 0, size = 10) => 
    api.get<PaginatedResponse<ProgressoViagem>>('/progressos-viagem', { params: { page, size } }),
  
  getById: (id: number) => 
    api.get<ProgressoViagem>(`/progressos-viagem/${id}`),
  
  create: (data: Omit<ProgressoViagem, 'id'>) => 
    api.post<ProgressoViagem>('/progressos-viagem', data),
  
  update: (id: number, data: Partial<ProgressoViagem>) => 
    api.put<ProgressoViagem>(`/progressos-viagem/${id}`, data),
  
  delete: (id: number) => 
    api.delete(`/progressos-viagem/${id}`),
};
