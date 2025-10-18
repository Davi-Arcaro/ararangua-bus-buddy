import { Landmark, MapPin } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockPontosTuristicos, mockParadas } from "@/data/mockData";

const Turistico = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-transit bg-clip-text text-transparent">
            Pontos Turísticos
          </h1>
          <p className="text-muted-foreground">
            Conheça os principais pontos turísticos de Araranguá e como chegar de ônibus
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {mockPontosTuristicos.map((ponto, index) => {
            // Simulação: vincular paradas próximas aos pontos turísticos
            const paradasProximas = mockParadas.slice(index, index + 2);

            return (
              <Card
                key={ponto.id}
                className="transition-all hover:shadow-hover animate-slide-in overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-secondary/20 via-primary/20 to-transit-purple/20 flex items-center justify-center">
                  <Landmark className="h-20 w-20 text-primary/40" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{ponto.nome}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ponto.descricao}
                  </p>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>Paradas mais próximas:</span>
                    </div>
                    <div className="space-y-2">
                      {paradasProximas.map((parada) => (
                        <div
                          key={parada.id}
                          className="flex items-center justify-between p-3 bg-muted rounded-lg"
                        >
                          <span className="text-sm font-medium">{parada.nome}</span>
                          <Badge variant="secondary">~200m</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge>L101</Badge>
                    <Badge>L102</Badge>
                    {index % 2 === 0 && <Badge>L103</Badge>}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Turistico;
