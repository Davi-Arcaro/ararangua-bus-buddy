import { useState } from "react";
import { Bus, Clock, MapPin, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockLinhas, mockCronogramas, mockViagens } from "@/data/mockData";
import ModalDetalhesLinha from "@/components/ModalDetalhesLinha";
import ModalCompraPassagem from "@/components/ModalCompraPassagem";
import { Linha } from "@/types/transit";

const Linhas = () => {
  const [selectedLinha, setSelectedLinha] = useState<Linha | null>(null);
  const [detalhesOpen, setDetalhesOpen] = useState(false);
  const [compraOpen, setCompraOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-transit bg-clip-text text-transparent">
            Linhas de Ônibus
          </h1>
          <p className="text-muted-foreground">
            Confira todas as linhas disponíveis em Araranguá
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockLinhas.map((linha) => {
            const cronogramas = mockCronogramas.filter(c => c.linha_id === linha.id);
            const viagemAtiva = mockViagens.find(v => v.linha_id === linha.id);

            return (
              <Card
                key={linha.id}
                className="transition-all hover:shadow-hover animate-slide-in"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: linha.cor }}
                      >
                        <Bus className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{linha.nome}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {linha.codigo}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {viagemAtiva && (
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 text-sm font-medium text-secondary mb-2">
                        <div className="h-2 w-2 rounded-full bg-secondary animate-pulse-slow" />
                        Ônibus em operação
                      </div>
                      <div className="w-full bg-background rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-transit transition-all duration-500"
                          style={{ width: `${viagemAtiva.progresso}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Progresso: {viagemAtiva.progresso}%
                      </p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Próximos horários:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cronogramas.slice(0, 3).map((cronograma) => (
                        <Badge key={cronograma.id} variant="outline">
                          {cronograma.hora_partida}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setSelectedLinha(linha);
                        setDetalhesOpen(true);
                      }}
                    >
                      <MapPin className="h-4 w-4 mr-1" />
                      Ver Rota
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        setSelectedLinha(linha);
                        setCompraOpen(true);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <ModalDetalhesLinha
          linha={selectedLinha}
          open={detalhesOpen}
          onOpenChange={setDetalhesOpen}
        />
        <ModalCompraPassagem
          linha={selectedLinha}
          open={compraOpen}
          onOpenChange={setCompraOpen}
        />
      </main>
    </div>
  );
};

export default Linhas;
