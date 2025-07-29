import Hero from '@/components/layout/Hero';
import { ShieldCheckIcon, CurrencyEuroIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="marketplace-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground font-heading mb-4">
              Why choose Lodge Marketplace?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a secure, local and personalized experience for the entire Eppendorf community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                <ShieldCheckIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground font-heading">
                Safe and Reliable
              </h3>
              <p className="text-muted-foreground">
                Google authentication and user verification for a secure experience.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                <MapPinIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground font-heading">
                Local Commerce
              </h3>
              <p className="text-muted-foreground">
                Connect with sellers in your area and support local commerce in Eppendorf.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                <CurrencyEuroIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground font-heading">
                Fair Prices
              </h3>
              <p className="text-muted-foreground">
                No hidden fees. Transparent and fair prices for buyers and sellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="marketplace-container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-heading">500+</div>
              <div className="text-muted-foreground">Available products</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-heading">150+</div>
              <div className="text-muted-foreground">Active users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-heading">98%</div>
              <div className="text-muted-foreground">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="marketplace-container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our community and discover everything Lodge Marketplace has to offer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button className="btn-primary">
                Sign Up Free
              </button>
              <button className="btn-secondary">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
