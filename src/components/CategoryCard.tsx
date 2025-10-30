import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  gradient?: string;
  color?: string;
}

const CategoryCard = ({ icon: Icon, title, description, path, color }: CategoryCardProps) => {
  // Map color names to actual color values
  const colorMap: Record<string, string> = {
    compras: 'hsl(var(--color-compras))',
    escolar: 'hsl(var(--color-escolar))',
    casa: 'hsl(var(--color-casa))',
    casamento: 'hsl(var(--color-casamento))',
  };

  const gradientMap: Record<string, string> = {
    compras: 'var(--gradient-compras)',
    escolar: 'var(--gradient-escolar)',
    casa: 'var(--gradient-casa)',
    casamento: 'var(--gradient-casamento)',
  };

  const bgColor = color ? colorMap[color] : 'hsl(var(--primary))';
  const bgGradient = color ? gradientMap[color] : 'var(--gradient-compras)';

  return (
    <Link to={path} className="block group">
      <Card className="relative p-8 h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-opacity-100 bg-white"
        style={{ '--hover-border': bgColor } as React.CSSProperties}
      >
        <div className="flex flex-col h-full">
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
            style={{ background: bgGradient }}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-6 flex-grow">
            {description}
          </p>
          <Button 
            className="w-full text-white shadow-md group-hover:shadow-lg transition-all hover:opacity-90"
            style={{ background: bgGradient }}
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
