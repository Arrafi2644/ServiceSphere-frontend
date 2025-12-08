import { Card, CardContent } from "@/components/ui/card";
import { ServiceCardProps } from "./PopularServices";

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, stats, color }) => {
  return (
    <Card className="group hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(249,115,22,0.4)] transition-all duration-300 cursor-pointer border border-gray-200 hover:border-orange-500">
      <CardContent className="p-4 lg:p-6 flex flex-col items-center text-center space-y-3">
        <div className={`${color} bg-orange-50 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 lg:w-8 h-6 lg:h-8" />
        </div>
        <h3 className="font-semibold text-gray-900 text-base">{title}</h3>
        <p className="text-sm text-gray-500">{stats}</p>
      </CardContent>
    </Card>
  );
};