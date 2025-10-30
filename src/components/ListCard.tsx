import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ListCardProps {
  title: string;
  description: string;
  path: string;
  badge?: string;
}

const ListCard = ({ title, description, path, badge }: ListCardProps) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
      <div className="flex flex-col h-full">
        {badge && (
          <span className="inline-block w-fit px-3 py-1 mb-3 text-xs font-semibold text-primary bg-primary/10 rounded-full">
            {badge}
          </span>
        )}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {description}
        </p>
        <Link to={path}>
          <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
            Ver Lista Completa
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ListCard;
