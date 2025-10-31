import { Linha, Parada, PontoTuristico, Cronograma, Viagem, CheckpointRota, Veiculo, Manutencao, Peca, Pessoa, TipoPassagem, Compra } from "@/types/transit";

export const mockLinhas: Linha[] = [
  { id: 1, nome: "Centro - Morro dos Conventos", codigo: "L101", cor: "#0066CC" },
  { id: 2, nome: "Centro - Ilha dos Golfinhos", codigo: "L102", cor: "#00AA66" },
  { id: 3, nome: "Centro - Ilhas", codigo: "L103", cor: "#FF6600" },
  { id: 4, nome: "Centro - Aeroporto Regional", codigo: "L104", cor: "#9933CC" },
  { id: 5, nome: "Circular Centro", codigo: "L201", cor: "#CC3366" },
];

export const mockParadas: Parada[] = [
  { id: 1, nome: "Terminal Central", latitude: "-28.9347", longitude: "-49.4861", cidade_id: 1 },
  { id: 2, nome: "Praça Hercílio Luz", latitude: "-28.9367", longitude: "-49.4881", cidade_id: 1 },
  { id: 3, nome: "Morro dos Conventos", latitude: "-28.9647", longitude: "-49.5261", cidade_id: 1 },
  { id: 4, nome: "Praia Ilhas", latitude: "-28.9547", longitude: "-49.5161", cidade_id: 1 },
  { id: 5, nome: "Hospital Regional", latitude: "-28.9247", longitude: "-49.4761", cidade_id: 1 },
  { id: 6, nome: "Shopping Della Giustina", latitude: "-28.9447", longitude: "-49.4961", cidade_id: 1 },
];

export const mockPontosTuristicos: PontoTuristico[] = [
  {
    id: 1,
    nome: "Morro dos Conventos",
    descricao: "Ponto turístico histórico com farol e vista panorâmica do oceano. Um dos principais cartões postais da região."
  },
  {
    id: 2,
    nome: "Praia das Ilhas",
    descricao: "Praia tranquila e preservada, ideal para caminhadas e contemplação da natureza."
  },
  {
    id: 3,
    nome: "Museu Histórico de Araranguá",
    descricao: "Acervo que conta a história e cultura da região através de objetos e documentos históricos."
  },
  {
    id: 4,
    nome: "Praça Hercílio Luz",
    descricao: "Praça central histórica com eventos culturais, fair de artesanato e gastronomia local."
  },
];

export const mockCronogramas: Cronograma[] = [
  { id: 1, linha_id: 1, hora_partida: "06:00", tipo_dia: "Útil" },
  { id: 2, linha_id: 1, hora_partida: "07:30", tipo_dia: "Útil" },
  { id: 3, linha_id: 1, hora_partida: "09:00", tipo_dia: "Útil" },
  { id: 4, linha_id: 2, hora_partida: "06:30", tipo_dia: "Útil" },
  { id: 5, linha_id: 2, hora_partida: "08:00", tipo_dia: "Útil" },
  { id: 6, linha_id: 3, hora_partida: "07:00", tipo_dia: "Útil" },
];

export const mockViagens: Viagem[] = [
  {
    id: 1,
    linha_id: 1,
    veiculo_id: 101,
    status: "em_andamento",
    data_partida_prevista: new Date().toISOString(),
    progresso: 45
  },
  {
    id: 2,
    linha_id: 2,
    veiculo_id: 102,
    status: "em_andamento",
    data_partida_prevista: new Date().toISOString(),
    progresso: 70
  },
  {
    id: 3,
    linha_id: 5,
    veiculo_id: 105,
    status: "em_andamento",
    data_partida_prevista: new Date().toISOString(),
    progresso: 25
  },
];

export const mockCheckpointsRota: Record<number, CheckpointRota[]> = {
  1: [
    { id: 1, parada_id: 1, hora_prevista: "05:45", passado: true },
    { id: 2, parada_id: 2, hora_prevista: "05:48", passado: true },
    { id: 3, parada_id: 6, hora_prevista: "05:51", passado: true },
    { id: 4, parada_id: 3, hora_prevista: "05:55", passado: false },
  ],
  2: [
    { id: 5, parada_id: 1, hora_prevista: "06:30", passado: true },
    { id: 6, parada_id: 4, hora_prevista: "06:45", passado: true },
    { id: 7, parada_id: 5, hora_prevista: "06:50", passado: false },
  ],
};

export const mockVeiculos: Veiculo[] = [
  { id: 101, placa: "ABC-1234", modelo: "Mercedes-Benz OF-1721", ano: 2018, capacidade: 44, em_manutencao: false, ultima_manutencao: "2024-10-15" },
  { id: 102, placa: "DEF-5678", modelo: "Volkswagen 17.230", ano: 2020, capacidade: 42, em_manutencao: false, ultima_manutencao: "2024-10-20" },
  { id: 103, placa: "GHI-9012", modelo: "Scania K270", ano: 2019, capacidade: 48, em_manutencao: true, ultima_manutencao: "2024-10-28" },
  { id: 104, placa: "JKL-3456", modelo: "Volvo B270F", ano: 2021, capacidade: 46, em_manutencao: false, ultima_manutencao: "2024-10-10" },
  { id: 105, placa: "MNO-7890", modelo: "Mercedes-Benz OH-1628", ano: 2017, capacidade: 40, em_manutencao: true, ultima_manutencao: "2024-10-30" },
];

export const mockManutencoes: Manutencao[] = [
  { id: 1, veiculo_id: 103, mecanico_id: 3, tipo: "Preventiva", descricao: "Troca de óleo e filtros", status: "em_andamento", data_inicio: "2024-10-28", custo: 850.00 },
  { id: 2, veiculo_id: 105, mecanico_id: 4, tipo: "Corretiva", descricao: "Reparo do sistema de freios", status: "em_andamento", data_inicio: "2024-10-30", custo: 1200.00 },
  { id: 3, veiculo_id: 101, mecanico_id: 3, tipo: "Preventiva", descricao: "Revisão geral", status: "concluida", data_inicio: "2024-10-15", data_fim: "2024-10-16", custo: 650.00 },
  { id: 4, veiculo_id: 102, mecanico_id: 4, tipo: "Corretiva", descricao: "Troca de pneus", status: "concluida", data_inicio: "2024-10-20", data_fim: "2024-10-21", custo: 2400.00 },
];

export const mockPecas: Peca[] = [
  { id: 1, nome: "Óleo de Motor 15W40", codigo: "OL-001", quantidade_estoque: 45, preco_unitario: 35.90, fornecedor: "Petrobrás" },
  { id: 2, nome: "Filtro de Óleo", codigo: "FL-002", quantidade_estoque: 32, preco_unitario: 28.50, fornecedor: "Tecfil" },
  { id: 3, nome: "Pastilha de Freio", codigo: "FR-003", quantidade_estoque: 18, preco_unitario: 120.00, fornecedor: "Frasle" },
  { id: 4, nome: "Disco de Freio", codigo: "FR-004", quantidade_estoque: 12, preco_unitario: 280.00, fornecedor: "Frasle" },
  { id: 5, nome: "Pneu 275/80R22.5", codigo: "PN-005", quantidade_estoque: 8, preco_unitario: 1250.00, fornecedor: "Pirelli" },
  { id: 6, nome: "Bateria 150Ah", codigo: "BT-006", quantidade_estoque: 6, preco_unitario: 850.00, fornecedor: "Moura" },
  { id: 7, nome: "Lâmpada LED H4", codigo: "IL-007", quantidade_estoque: 24, preco_unitario: 45.00, fornecedor: "Philips" },
];

export const mockPessoas: Pessoa[] = [
  { id: 1, nome: "João Silva", cpf: "123.456.789-00", email: "joao@email.com", telefone: "(48) 99999-0001", tipo: "motorista", data_cadastro: "2023-01-15" },
  { id: 2, nome: "Maria Santos", cpf: "234.567.890-11", email: "maria@email.com", telefone: "(48) 99999-0002", tipo: "motorista", data_cadastro: "2023-02-20" },
  { id: 3, nome: "Pedro Oliveira", cpf: "345.678.901-22", email: "pedro@email.com", telefone: "(48) 99999-0003", tipo: "mecanico", data_cadastro: "2023-03-10" },
  { id: 4, nome: "Ana Costa", cpf: "456.789.012-33", email: "ana@email.com", telefone: "(48) 99999-0004", tipo: "mecanico", data_cadastro: "2023-03-25" },
  { id: 5, nome: "Carlos Souza", cpf: "567.890.123-44", email: "carlos@email.com", telefone: "(48) 99999-0005", tipo: "passageiro", data_cadastro: "2024-01-05" },
];

export const mockTiposPassagem: TipoPassagem[] = [
  { id: 1, nome: "Passagem Única", descricao: "Válida para uma viagem", preco: 5.50 },
  { id: 2, nome: "Cartão Mensal", descricao: "Viagens ilimitadas por 30 dias", preco: 120.00 },
  { id: 3, nome: "Estudante", descricao: "Meia passagem para estudantes", preco: 2.75 },
  { id: 4, nome: "Idoso", descricao: "Gratuidade para maiores de 60 anos", preco: 0.00 },
];

export const mockCompras: Compra[] = [
  { id: 1, passageiro_id: 5, linha_id: 1, tipo_passagem_id: 1, metodo_pagamento: "pix", valor_total: 5.50, status: "aprovada", data_compra: "2024-10-30T10:30:00" },
  { id: 2, passageiro_id: 5, linha_id: 2, tipo_passagem_id: 3, metodo_pagamento: "cartao_debito", valor_total: 2.75, status: "aprovada", data_compra: "2024-10-29T14:20:00" },
];
