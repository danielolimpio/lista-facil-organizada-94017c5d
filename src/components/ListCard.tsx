import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ListCardProps {
  title: string;
  description: string;
  path: string;
  badge?: string;
  categoryColor?: string;
}

const ListCard = ({ title, description, path, badge, categoryColor }: ListCardProps) => {
  const categoryGradients: Record<string, string> = {
    compras: "var(--gradient-compras)",
    escolar: "var(--gradient-escolar)",
    casa: "var(--gradient-casa)",
    casamento: "var(--gradient-casamento)",
  };

  const accent =
    categoryColor && categoryGradients[categoryColor]
      ? categoryGradients[categoryColor]
      : "hsl(var(--primary))";

  return (
    <Card className="group relative p-6 h-full flex overflow-hidden bg-white border border-border/70 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      {/* Top accent line */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: accent }}
      />
      <div className="flex flex-col h-full w-full">
        {badge && (
          <span
            className="inline-flex items-center gap-1 w-fit px-2.5 py-1 mb-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-white rounded-sm shadow-sm"
            style={{ background: accent }}
          >
            <span className="w-1 h-1 rounded-full bg-white/80" />
            {badge}
          </span>
        )}
        <h3 className="text-[17px] font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-[13.5px] leading-relaxed mb-5 flex-grow">
          {description}
        </p>
        <Link to={path}>
          <Button
            variant="outline"
            className="w-full justify-between rounded-sm border-border/70 text-[13px] font-medium group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
          >
            Usar esta lista
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ListCard;
