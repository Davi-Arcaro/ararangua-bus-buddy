import { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Bus, Wrench, Package, Plus, AlertCircle } from "lucide-react";
import { mockVeiculos, mockManutencoes, mockPecas, mockPessoas } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const Frota = () => {
  const { toast } = useToast();
  const [veiculoDialogOpen, setVeiculoDialogOpen] = useState(false);
  const [manutencaoDialogOpen, setManutencaoDialogOpen] = useState(false);
  const [pecaDialogOpen, setPecaDialogOpen] = useState(false);

  const mecanicos = mockPessoas.filter(p => p.tipo === "mecanico");
  const manutencoesAtivas = mockManutencoes.filter(m => m.status === "em_andamento");
  const manutencoesHistorico = mockManutencoes.filter(m => m.status === "concluida");

  const handleCadastroVeiculo = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Veículo cadastrado com sucesso!" });
    setVeiculoDialogOpen(false);
  };

  const handleCadastroManutencao = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Manutenção cadastrada com sucesso!" });
    setManutencaoDialogOpen(false);
  };

  const handleCadastroPeca = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Peça cadastrada com sucesso!" });
    setPecaDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-transit bg-clip-text text-transparent">
            Gestão de Frota e Manutenção
          </h1>
          <p className="text-muted-foreground">
            Gerencie veículos, manutenções e peças do sistema
          </p>
        </div>

        <Tabs defaultValue="veiculos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="veiculos">Veículos</TabsTrigger>
            <TabsTrigger value="manutencoes">Manutenções</TabsTrigger>
            <TabsTrigger value="pecas">Peças</TabsTrigger>
          </TabsList>

          <TabsContent value="veiculos" className="space-y-4">
            <div className="flex justify-end">
              <Dialog open={veiculoDialogOpen} onOpenChange={setVeiculoDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Cadastrar Veículo
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Cadastrar Novo Veículo</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCadastroVeiculo} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="placa">Placa</Label>
                      <Input id="placa" placeholder="ABC-1234" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="modelo">Modelo</Label>
                      <Input id="modelo" placeholder="Mercedes-Benz OF-1721" required />
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="ano">Ano</Label>
                        <Input id="ano" type="number" placeholder="2024" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="capacidade">Capacidade</Label>
                        <Input id="capacidade" type="number" placeholder="44" required />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">Cadastrar</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockVeiculos.map((veiculo) => (
                <Card key={veiculo.id} className="animate-slide-in">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-transit">
                          <Bus className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{veiculo.placa}</CardTitle>
                          <p className="text-sm text-muted-foreground">{veiculo.modelo}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ano:</span>
                      <span className="font-medium">{veiculo.ano}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Capacidade:</span>
                      <span className="font-medium">{veiculo.capacidade} passageiros</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Status:</span>
                      {veiculo.em_manutencao ? (
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          Em Manutenção
                        </Badge>
                      ) : (
                        <Badge className="bg-secondary">Operacional</Badge>
                      )}
                    </div>
                    {veiculo.ultima_manutencao && (
                      <div className="text-xs text-muted-foreground pt-2 border-t">
                        Última manutenção: {new Date(veiculo.ultima_manutencao).toLocaleDateString()}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="manutencoes" className="space-y-4">
            <div className="flex justify-end">
              <Dialog open={manutencaoDialogOpen} onOpenChange={setManutencaoDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Manutenção
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Criar Nova Manutenção</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCadastroManutencao} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="veiculo">Veículo</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o veículo" />
                        </SelectTrigger>
                        <SelectContent>
                          {mockVeiculos.map((v) => (
                            <SelectItem key={v.id} value={v.id.toString()}>
                              {v.placa} - {v.modelo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mecanico">Mecânico Responsável</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o mecânico" />
                        </SelectTrigger>
                        <SelectContent>
                          {mecanicos.map((m) => (
                            <SelectItem key={m.id} value={m.id.toString()}>
                              {m.nome}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Manutenção</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="preventiva">Preventiva</SelectItem>
                          <SelectItem value="corretiva">Corretiva</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="descricao">Descrição</Label>
                      <Textarea id="descricao" placeholder="Descreva a manutenção..." required />
                    </div>
                    <Button type="submit" className="w-full">Criar Manutenção</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-secondary" />
                  Manutenções em Andamento
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {manutencoesAtivas.map((manutencao) => {
                    const veiculo = mockVeiculos.find(v => v.id === manutencao.veiculo_id);
                    const mecanico = mecanicos.find(m => m.id === manutencao.mecanico_id);
                    
                    return (
                      <Card key={manutencao.id} className="animate-slide-in">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-base">{veiculo?.placa}</CardTitle>
                              <p className="text-sm text-muted-foreground">{manutencao.tipo}</p>
                            </div>
                            <Badge className="bg-secondary">Em andamento</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm">{manutencao.descricao}</p>
                          <div className="text-sm text-muted-foreground">
                            Mecânico: {mecanico?.nome}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Início: {new Date(manutencao.data_inicio).toLocaleDateString()}
                          </div>
                          {manutencao.custo && (
                            <div className="text-sm font-medium">
                              Custo: R$ {manutencao.custo.toFixed(2)}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Histórico de Manutenções</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {manutencoesHistorico.map((manutencao) => {
                    const veiculo = mockVeiculos.find(v => v.id === manutencao.veiculo_id);
                    const mecanico = mecanicos.find(m => m.id === manutencao.mecanico_id);
                    
                    return (
                      <Card key={manutencao.id} className="opacity-80">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-base">{veiculo?.placa}</CardTitle>
                              <p className="text-sm text-muted-foreground">{manutencao.tipo}</p>
                            </div>
                            <Badge variant="outline">Concluída</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-sm">{manutencao.descricao}</p>
                          <div className="text-sm text-muted-foreground">
                            Mecânico: {mecanico?.nome}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Período: {new Date(manutencao.data_inicio).toLocaleDateString()} - {manutencao.data_fim && new Date(manutencao.data_fim).toLocaleDateString()}
                          </div>
                          {manutencao.custo && (
                            <div className="text-sm font-medium">
                              Custo: R$ {manutencao.custo.toFixed(2)}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pecas" className="space-y-4">
            <div className="flex justify-end">
              <Dialog open={pecaDialogOpen} onOpenChange={setPecaDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Cadastrar Peça
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Cadastrar Nova Peça</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCadastroPeca} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome da Peça</Label>
                      <Input id="nome" placeholder="Ex: Óleo de Motor 15W40" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="codigo">Código</Label>
                      <Input id="codigo" placeholder="Ex: OL-001" required />
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="quantidade">Quantidade</Label>
                        <Input id="quantidade" type="number" placeholder="0" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preco">Preço Unitário</Label>
                        <Input id="preco" type="number" step="0.01" placeholder="0.00" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fornecedor">Fornecedor</Label>
                      <Input id="fornecedor" placeholder="Nome do fornecedor" required />
                    </div>
                    <Button type="submit" className="w-full">Cadastrar</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockPecas.map((peca) => (
                <Card key={peca.id} className="animate-slide-in">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-stop">
                          <Package className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{peca.nome}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{peca.codigo}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estoque:</span>
                      <span className={`font-medium ${peca.quantidade_estoque < 10 ? 'text-destructive' : ''}`}>
                        {peca.quantidade_estoque} unidades
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Preço:</span>
                      <span className="font-medium">R$ {peca.preco_unitario.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-muted-foreground pt-2 border-t">
                      Fornecedor: {peca.fornecedor}
                    </div>
                    {peca.quantidade_estoque < 10 && (
                      <Badge variant="destructive" className="w-full justify-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Estoque baixo
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Frota;
