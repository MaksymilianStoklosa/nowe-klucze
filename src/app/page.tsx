import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Key,
  Scissors,
  Lock,
  Watch,
  Phone,
  MapPin,
  Stamp,
  CreditCard,
  Package,
  Clock,
  Navigation,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Key,
      title: "Dorabianie kluczy",
      description: "Ekspresowe dorabianie kluczy domowych i samochodowych",
    },
    {
      icon: Lock,
      title: "Wymiana zamków",
      description:
        "Wymiana zamków oraz wkładek na terenie Czechowic-Dziedzic i okolic",
    },
    {
      icon: Scissors,
      title: "Ostrzenie",
      description: "Ostrzenie noży i innych narzędzi",
    },
    {
      icon: Watch,
      title: "Usługi zegarmistrzowskie",
      description: "Wymiana baterii, pasków i bransolet w zegarkach",
    },
    {
      icon: CreditCard,
      title: "Kopiowanie breloków",
      description: "Kopiowanie breloków i kart wjazdowych",
    },
    {
      icon: Stamp,
      title: "Pieczątki",
      description: "Wyrabianie pieczątek",
    },
  ];

  const products = [
    "Portfele i etui na dokumenty",
    "Noże i scyzoryki",
    "Latarki i kompasy",
    "Kleje i gazy do zapalniczek",
    "Baterie",
    "Sznurowadła i wkładki do butów",
    "Zamki, wkładki i kłódki",
    "Paski do zegarków i bransolety",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-5xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/nowe-klucze/logo.png"
              alt="Nowe Klucze Logo"
              width={200}
              height={70}
              className="object-contain"
            />
          </div>
          <Button asChild size="lg">
            <a href="tel:728899217">
              <Phone className="mr-2 h-4 w-4" />
              728 899 217
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpeg"
            alt="Nowe Klucze"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80 z-0" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Dorabianie kluczy
              <br />
              <span className="text-primary drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                zawsze tanio i solidnie
              </span>
            </h1>
            <p className="mt-6 text-lg text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Cenisz sobie szybką i niezawodną obsługę oraz profesjonalne
              podejście do klienta?
              <br />
              Zajrzyj do NOWE KLUCZE!
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <a href="tel:728899217">
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń teraz
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/95 hover:bg-white border-2"
              >
                <a href="#kontakt">
                  <MapPin className="mr-2 h-5 w-5" />
                  Zobacz lokalizację
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nasze usługi
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Oferujemy szeroki zakres profesjonalnych usług
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <Package className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sprzedaż
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              W naszej ofercie znajdziesz szeroki wybór produktów
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-base">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="bg-muted/50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Kontakt
            </h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-muted-foreground mb-3">
                      ul. marsz. Józefa Piłsudskiego 18
                      <br />
                      Czechowice-Dziedzice
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href="https://google.com/maps/place/NOWE+KLUCZE/@49.9130531,19.0030757,56m/data=!3m1!1e3!4m6!3m5!1s0x4716a3d77130e897:0x3f7c12179af4e864!8m2!3d49.913129!4d19.0029775!16s%2Fg%2F11ysc09wbr?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        Otwórz w Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-3">Godziny otwarcia</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center gap-8">
                        <span className="text-muted-foreground">
                          Poniedziałek - Piątek
                        </span>
                        <span className="font-medium">9:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between items-center gap-8">
                        <span className="text-muted-foreground">Sobota</span>
                        <span className="font-medium text-destructive">
                          Zamknięte
                        </span>
                      </div>
                      <div className="flex justify-between items-center gap-8">
                        <span className="text-muted-foreground">Niedziela</span>
                        <span className="font-medium text-destructive">
                          Zamknięte
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a
                      href="tel:728899217"
                      className="text-lg text-primary hover:underline"
                    >
                      728 899 217
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <Image
                src="/nowe-klucze/logo.png"
                alt="Nowe Klucze Logo"
                width={200}
                height={70}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Czechowice-Dziedzice • Szybko, tanio i solidnie
            </p>
            <Separator className="max-w-xs" />
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} NOWE KLUCZE. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
