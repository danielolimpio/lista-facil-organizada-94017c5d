import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  gradient?: string;
}

const CategoryCard = ({ icon: Icon, title, description, path, gradient }: CategoryCardProps) => {
  return (
    <Link to={path} className="block group">
      <Card className="p-6 h-full transition-all duration-300 hover:shadow-hover hover:-translate-y-1 bg-gradient-card border-border">
        <div className={`inline-flex p-3 rounded-xl mb-4 ${gradient || 'bg-primary/10'}`}>
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </Card>
    </Link>
  );
};

export default CategoryCard;
