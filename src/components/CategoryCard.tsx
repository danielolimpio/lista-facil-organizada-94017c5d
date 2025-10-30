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
  const colorValue = color ? `hsl(var(--color-${color}))` : 'hsl(var(--primary))';
  
  const backgroundImages = {
    compras: comprasImg,
    escolar: escolarImg,
    casa: casaImg,
    casamento: casamentoImg,
  };
  
  const bgImage = color && backgroundImages[color as keyof typeof backgroundImages];

  return (
    <Link to={path} className="block group">
      <Card className="relative h-full overflow-hidden border-2 border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Background Image with Dark Overlay */}
        {bgImage && (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </>
        )}
        
        <div className="relative z-10 p-8 flex flex-col h-full">
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-lg bg-white/20 backdrop-blur-sm"
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white transition-colors">
            {title}
          </h3>
          <p className="text-white/90 text-sm mb-6 flex-grow">
            {description}
          </p>
          <Button 
            className="w-full bg-white/90 hover:bg-white text-white transition-all shadow-md hover:shadow-lg"
            style={{ 
              color: colorValue,
            }}
          >
            Ver Listas
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
