export interface Linha {
  id: number;
  nome: string;
  codigo: string;
  cor: string;
}

export interface Parada {
  id: number;
  nome: string;
  latitude: string;
  longitude: string;
  cidade_id: number;
}

export interface PontoTuristico {
  id: number;
  nome: string;
  descricao: string;
}

export interface Cronograma {
  id: number;
  linha_id: number;
  hora_partida: string;
  tipo_dia: string;
}

export interface Viagem {
  id: number;
  linha_id: number;
  veiculo_id: number;
  status: string;
  data_partida_prevista: string;
  progresso: number;
}
