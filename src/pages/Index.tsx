import HeroSection from '@/components/HeroSection';
import SurveySection from '@/components/SurveySection';
import InitiativesSection from '@/components/InitiativesSection';
import ParticipationSection from '@/components/ParticipationSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <HeroSection />
      <SurveySection />
      <InitiativesSection />
      <ParticipationSection />
    </div>
  );
};

export default Index;
