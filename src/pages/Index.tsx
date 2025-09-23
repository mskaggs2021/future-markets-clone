import { Header } from "@/components/Header";
import { FilterBar } from "@/components/FilterBar";
import { MarketCard } from "@/components/MarketCard";
import { markets } from "@/data/markets";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FilterBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {markets.map((market) => (
            <MarketCard
              key={market.id}
              {...market}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
