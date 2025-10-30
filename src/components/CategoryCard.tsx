import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
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

const CategoryCard = ({ icon: Icon, title, description, path, gradient, color }: CategoryCardProps) => {
  return (
    <Link to={path} className="block group">
      <Card className={`relative p-0 h-64 overflow-hidden transition-all duration-300 hover:shadow-colored hover:-translate-y-2 border-0`}>
        <div className={`absolute inset-0 bg-${gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
          <div className="mb-4">
            <Icon className="w-12 h-12 drop-shadow-lg" />
          </div>
          <h3 className="text-2xl font-bold mb-2 drop-shadow-md">
            {title}
          </h3>
          <p className="text-white/90 text-sm mb-4 drop-shadow-sm">
            {description}
          </p>
          <Button 
            variant="secondary" 
            className={`w-fit bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-105`}
          >
            Ver Listas
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
