import { Linha, Parada, PontoTuristico, Cronograma, Viagem } from "@/types/transit";

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
