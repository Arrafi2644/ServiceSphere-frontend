import { Card, CardContent } from '@/components/ui/card';

export interface StepCardProps {
  stepNumber: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  isLast?: boolean;
}


export const StepCard: React.FC<StepCardProps> = ({ stepNumber, icon: Icon, title, description }) => {
  return (
    <div className="relative flex flex-col items-center fit">
      {/* Step Number Badge */}
      <div className="absolute top-2 -right-8 -translate-x-1/2 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-10">
        {stepNumber}
      </div>

      {/* Card */}
      <Card className="w-full hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-all duration-300 mt-6 border border-gray-200 hover:border-orange-500">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <Icon className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};