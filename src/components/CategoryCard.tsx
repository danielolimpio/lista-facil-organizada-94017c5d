import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import comprasImg from "@/assets/categoria-compras.jpg";
import escolarImg from "@/assets/categoria-escolar.jpeg";
import casaImg from "@/assets/categoria-casa.jpg";
import casamentoImg from "@/assets/categoria-casamento.jpg";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  gradient?: string;
  color?: string;
}

const CategoryCard = ({ icon: Icon, title, description, path, color }: CategoryCardProps) => {
  const colorValue = color ? `hsl(var(--color-${color}))` : "hsl(var(--primary))";

  const backgroundImages = {
    compras: comprasImg,
    escolar: escolarImg,
    casa: casaImg,
    casamento: casamentoImg,
  };

  const bgImage = color && backgroundImages[color as keyof typeof backgroundImages];

  return (
    <Link to={path} className="block group">
      <Card className="relative h-full overflow-hidden border border-border/70 rounded-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-white/0">
        {/* Background Image with Premium Overlay */}
        {bgImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.06]"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/65 to-foreground/85" />
            {/* Top hairline accent */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: colorValue }}
            />
          </>
        )}

        <div className="relative z-10 p-7 flex flex-col h-full">
          <div
            className="w-14 h-14 rounded-md flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(8px)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.18) inset, 0 1px 0 0 rgba(255,255,255,0.15) inset",
            }}
          >
            <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-bold mb-2 text-white tracking-tight">{title}</h3>
          <p className="text-white/80 text-[13px] leading-relaxed mb-6 flex-grow">
            {description}
          </p>
          <Button
            className="w-full bg-white hover:bg-white text-foreground rounded-sm font-medium text-[13px] transition-all shadow-sm hover:shadow-md"
            style={{ color: colorValue }}
          >
            Ver Listas
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
