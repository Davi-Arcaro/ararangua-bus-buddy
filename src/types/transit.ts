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
  status: 'agendada' | 'em_andamento' | 'concluida' | 'cancelada';
  data_partida_prevista: string;
  data_partida_real?: string;
  data_chegada_prevista?: string;
  data_chegada_real?: string;
  progresso?: number;
}

export interface CheckpointRota {
  id: number;
  parada_id: number;
  hora_prevista: string;
  passado: boolean;
}

export interface Veiculo {
  id: number;
  placa: string;
  modelo: string;
  ano: number;
  capacidade: number;
  em_manutencao: boolean;
  ultima_manutencao?: string;
}

export interface Manutencao {
  id: number;
  veiculo_id: number;
  mecanico_id: number;
  tipo: string;
  descricao: string;
  status: 'agendada' | 'em_andamento' | 'concluida';
  data_inicio: string;
  data_fim?: string;
  custo?: number;
}

export interface Peca {
  id: number;
  nome: string;
  codigo: string;
  quantidade_estoque: number;
  preco_unitario: number;
  fornecedor: string;
}

export interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  tipo: 'passageiro' | 'motorista' | 'mecanico';
  data_cadastro: string;
}

export interface TipoPassagem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
}

export interface Compra {
  id: number;
  passageiro_id: number;
  linha_id: number;
  tipo_passagem_id: number;
  metodo_pagamento: 'pix' | 'cartao_credito' | 'cartao_debito' | 'dinheiro';
  valor_total: number;
  status: 'pendente' | 'aprovada' | 'cancelada';
  data_compra: string;
}
