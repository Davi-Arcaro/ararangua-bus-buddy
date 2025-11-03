import { api, PaginatedResponse } from './api';

export interface PontoParadaTuristico {
  id: number;
  ponto_parada_id: number;
  ponto_turistico_id: number;
  distancia_metros: number;
}

export const pontoParadaTuristicoService = {
  getAll: (page = 0, size = 10) => 
    api.get<PaginatedResponse<PontoParadaTuristico>>('/pontos-parada-turisticos', { params: { page, size } }),
  
  getById: (id: number) => 
    api.get<PontoParadaTuristico>(`/pontos-parada-turisticos/${id}`),
  
  create: (data: Omit<PontoParadaTuristico, 'id'>) => 
    api.post<PontoParadaTuristico>('/pontos-parada-turisticos', data),
  
  update: (id: number, data: Partial<PontoParadaTuristico>) => 
    api.put<PontoParadaTuristico>(`/pontos-parada-turisticos/${id}`, data),
  
  delete: (id: number) => 
    api.delete(`/pontos-parada-turisticos/${id}`),
};
