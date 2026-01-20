import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-charcoal relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              hsl(var(--primary)) 10px,
              hsl(var(--primary)) 11px
            )`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <AnimateOnScroll animation="slide-right">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Besuchen Sie uns
            </p>
            <h2 
              id="contact-heading" 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Bereit für Ihren neuen Look?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Vereinbaren Sie noch heute Ihren Termin und erleben Sie 
              erstklassigen Service in stilvollem Ambiente.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                  <p className="text-muted-foreground">
                    Große Mohrengasse 38, 1020 Wien
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                  <a 
                    href="tel:+4930123456789" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +43664 5477777
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Öffnungszeiten</h4>
                  <p className="text-muted-foreground">
                    Mo-Fr: 09:00 - 19:00 | Sa: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                Rechts unten Chat starten
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <a href="/termine/buchen">Jetzt Buchen</a>
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Right - Map Placeholder */}
          <AnimateOnScroll animation="slide-left">
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden border border-border">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.4223682725105!2d16.384418131529028!3d48.217741038917524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07f2f17c1ad7%3A0x1264bd7ffac3ba32!2sFB%20Barbershop!5e0!3m2!1sen!2sat!4v1768417153210!5m2!1sen!2sat"
    width="100%"
    height="100%"
    style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Standort FB Barbershop"
  />
</div>

              {/* Overlay Card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-sm p-6 shadow-soft max-w-xs">
                <p className="font-display text-lg text-foreground mb-2">
                  Kostenlose Parkplätze
                </p>
                <p className="text-muted-foreground text-sm">
                  Direkt vor dem Salon verfügbar
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
