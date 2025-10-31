import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Linha, CheckpointRota, Parada } from "@/types/transit";
import { mockCheckpointsRota, mockParadas } from "@/data/mockData";

interface ModalDetalhesLinhaProps {
  linha: Linha | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ModalDetalhesLinha = ({ linha, open, onOpenChange }: ModalDetalhesLinhaProps) => {
  if (!linha) return null;

  const checkpoints = mockCheckpointsRota[linha.id] || [];
  
  const getParadaNome = (paradaId: number) => {
    const parada = mockParadas.find(p => p.id === paradaId);
    return parada?.nome || "Parada desconhecida";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: linha.cor }}
            >
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl">{linha.nome}</DialogTitle>
              <Badge variant="secondary" className="mt-1">
                {linha.codigo}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">Rota e Checkpoints em Tempo Real</h3>
            <div className="space-y-2">
              {checkpoints.map((checkpoint, index) => (
                <div
                  key={checkpoint.id}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                    checkpoint.passado
                      ? "bg-secondary/10 border border-secondary/30"
                      : "bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {checkpoint.passado ? (
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                    <div>
                      <p className="font-medium">{getParadaNome(checkpoint.parada_id)}</p>
                      <p className="text-sm text-muted-foreground">
                        Horário: {checkpoint.hora_prevista}
                      </p>
                    </div>
                  </div>
                  {checkpoint.passado ? (
                    <Badge className="bg-secondary">Concluído</Badge>
                  ) : (
                    <Badge variant="outline">Pendente</Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          {checkpoints.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>Nenhum checkpoint disponível para esta linha no momento.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDetalhesLinha;
