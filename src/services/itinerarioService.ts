import { api, PaginatedResponse } from './api';

export interface Itinerario {
  id: number;
  linha_id: number;
  ponto_parada_id: number;
  ordem: number;
}

export const itinerarioService = {
  getAll: (page = 0, size = 10) => 
    api.get<PaginatedResponse<Itinerario>>('/itinerarios', { params: { page, size } }),
  
  getById: (id: number) => 
    api.get<Itinerario>(`/itinerarios/${id}`),
  
  create: (data: Omit<Itinerario, 'id'>) => 
    api.post<Itinerario>('/itinerarios', data),
  
  update: (id: number, data: Partial<Itinerario>) => 
    api.put<Itinerario>(`/itinerarios/${id}`, data),
  
  delete: (id: number) => 
    api.delete(`/itinerarios/${id}`),
};
