import { api } from './api';
import { ProgressoViagem } from '@/types/transit';

export const progressoViagemService = {
  getAll: (page = 0, size = 20) => 
    api.get<ProgressoViagem[]>('/progresso-viagens', { params: { page, size } }),
  
  create: (data: ProgressoViagem) => 
    api.post<ProgressoViagem>('/progressos-viagem', data),
  
  delete: (idViagem: number, idPontoParada: number) => 
    api.delete(`/progressos-viagem/${idViagem}/${idPontoParada}`),
};
