import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const priceCategories = [
  {
    title: 'Herren',
    items: [
      {
        name: 'Schneiden & Föhnen',
        price: '€25',
        description: 'Inkl. Stylen mit Wachs oder Gel',
      },
      {
        name: 'Schneiden, Föhnen & Waschen',
        price: '€23',
        description: 'Inkl. Stylen mit Wachs oder Gel',
      },
      {
        name: 'Kinder (bis 10 Jahre)',
        price: '€18',
        description: 'Schneiden & Föhnen inkl. Styling',
      },
    ],
  },
  {
    title: 'Bart & Pflege',
    items: [
      {
        name: 'Bartrasur',
        price: '€13',
        description: 'Klassische Rasur',
      },
      {
        name: 'Bart kürzen (Maschine)',
        price: '€17',
        description: 'Saubere Länge & Kontur',
      },
      {
        name: 'Model Bartrasur',
        price: '€15',
        description: 'Präzise Formrasur',
      },
      {
        name: 'Bart färben',
        price: '€20',
        description: 'Farbauffrischung',
      },
    ],
  },
  {
    title: 'Extras',
    items: [
      {
        name: 'Haare färben',
        price: '€25',
        description: 'Nach Vorlage',
      },
      {
        name: 'Waschen, Föhnen & Stylen',
        price: '€10',
        description: 'Finish-Service',
      },
      {
        name: 'Augenbrauen zupfen',
        price: '€7',
        description: 'Saubere Konturen',
      },
      {
        name: 'Gesichtsmaske',
        price: '€15',
        description: 'Pflegebehandlung',
      },
      {
        name: 'Gesicht harzen komplett',
        price: '€15',
        description: 'Glatte Haut',
      },
    ],
  },
];

const Prices = () => {
  return (
    <>
      <Helmet>
        <title>Preise | FB Barbershop Wien</title>
        <meta
          name="description"
          content="Transparente Preise für alle Services: Haarschnitte ab €35, Bartpflege ab €15. Entdecken Sie unsere Pakete im The Gentleman's Cut Berlin."
        />
        <link rel="canonical" href="https://gentlemanscut.de/preise" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "@id": "https://example-barbershop.at/#barbershop",
            name: "Beispiel Barbershop Wien",
            url: "https://example-barbershop.at",
            logo: "https://example-barbershop.at/images/logo.png",
            image: "https://example-barbershop.at/images/shop.jpg",
            telephone: "+43 1 2345678",
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Musterstraße 12",
              addressLocality: "Wien",
              postalCode: "1020",
              addressCountry: "AT",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "48.2167",
              longitude: "16.3958",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Wien",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "17:00",
              },
            ],
            sameAs: [
              "https://www.google.com/maps?cid=1234567890",
              "https://www.instagram.com/beispielbarbershop",
              "https://www.facebook.com/beispielbarbershop",
            ],
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Preise</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Transparent & Fair</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Unsere Preise
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Qualität hat ihren Wert. Hier finden Sie eine Übersicht unserer Services und Preise.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Price List */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {priceCategories.map((category, categoryIndex) => (
                <AnimateOnScroll key={category.title} animation="fade-up" delay={categoryIndex * 100}>
                  <div className="bg-card border border-border rounded-sm p-8">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                      {category.title}
                    </h2>
                    <ul className="space-y-4">
                      {category.items.map((item) => (
                        <li key={item.name} className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-foreground font-medium">{item.name}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                          <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Prices;

