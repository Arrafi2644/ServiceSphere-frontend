import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Search, Users, CreditCard } from 'lucide-react';
import { StepCardProps } from './StepCard';
import { SectionHeader } from '../shared/SectionHeader';

// Types
export interface Step {
    id: number;
    stepNumber: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

interface HowItWorksProps {
    badge?: string;
    title?: string;
    subtitle?: string;
    steps?: Step[];
}

const defaultSteps: Step[] = [
    {
        id: 1,
        stepNumber: '01',
        icon: FileText,
        title: 'Post Your Project',
        description: 'Tell us what you need done and we will match you with the best freelancers'
    },
    {
        id: 2,
        stepNumber: '02',
        icon: Search,
        title: 'Choose Freelancers',
        description: 'Review proposals, compare bids and select best freelancer for your project.'
    },
    {
        id: 3,
        stepNumber: '03',
        icon: Users,
        title: 'Collaborate Easily',
        description: 'Use our platform to chat, share files and collaborate until the job is done.'
    },
    {
        id: 4,
        stepNumber: '04',
        icon: CreditCard,
        title: 'Payment Simplified',
        description: 'Pay only when you are 100% satisfied with the work delivered.'
    }
];

const StepCard: React.FC<StepCardProps> = ({ stepNumber, icon: Icon, title, description }) => {
    return (
        <div className="relative flex flex-col items-center">
            {/* Step Number Badge */}
            <div className="absolute  top-2 md:-right-8 left-1/2 -translate-x-1/2 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-10">
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


export const HowItWorks: React.FC<HowItWorksProps> = ({
    steps = defaultSteps
}) => {
    return (
        <section className="w-full md:py-12 py-16 px-6 bg-white ">
            <div className="container mx-auto">
                {/* Header */}
                <SectionHeader
                    badge="How It Works"
                    title="Get Work Done In 4 Easy Steps"
                    subtitle="Our simple process makes it easy to find, hire and work with talented freelancers"
                />
                
                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
                    {steps.map((step, index) => (
                        <StepCard
                            key={step.id}
                            stepNumber={step.stepNumber}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};