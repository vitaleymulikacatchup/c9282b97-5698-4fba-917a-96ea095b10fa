"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="plain"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Mario Cards"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Cards", id: "products" },
            { name: "Features", id: "features" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Start Collecting",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Collect Legendary Mario Cards"
          description="Discover rare, holographic, and graded Mario trading cards. Build your ultimate collection with authentic collectibles from the Mushroom Kingdom."
          tag="Premium Collectibles"
          tagIcon={Sparkles}
          buttons={[
            { text: "Browse Cards", href: "products" },
            { text: "Learn More", href: "features" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764324991212-y366xuou.jpg"
          imageAlt="Mario trading cards collection"
          frameStyle="card"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Why Choose Mario Cards"
          description="Explore what makes our collection special and valuable for collectors worldwide."
          tag="Card Types"
          features={[
            {
              id: 1,
              title: "Rare Base Cards",
              description: "Original, limited-edition base cards featuring iconic Mario characters with authentic vintage appeal and collectible value.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764324992829-v2vy4zf8.jpg",
              imageAlt: "Rare Mario base card"
            },
            {
              id: 2,
              title: "Holographic Foils",
              description: "Premium holographic and foil cards with stunning visual effects that catch the light beautifully. Perfect for display collections.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764324994729-edrrwcfh.jpg",
              imageAlt: "Holographic Mario card"
            },
            {
              id: 3,
              title: "Professionally Graded",
              description: "Certified and graded cards with official seals of authenticity. Each card assessed for condition and authenticity by industry experts.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764324996169-lxls0hkc.jpg",
              imageAlt: "Professional graded Mario card"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Collections"
          description="Handpicked Mario cards available for collectors. Each card is authentic and verified."
          products={[
            {
              id: "mario-base-001",
              name: "Mario Base Card Vintage",
              price: "$45.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764324997329-kkeqyr4e.jpg",
              imageAlt: "Mario vintage base card"
            },
            {
              id: "mario-holo-002",
              name: "Mario Holographic Foil",
              price: "$129.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764324999147-h83uinp2.jpg",
              imageAlt: "Mario holographic card"
            },
            {
              id: "mario-gold-003",
              name: "Gold Mario Limited Edition",
              price: "$299.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764325000726-suu5q6yk.jpg",
              imageAlt: "Gold Mario rare card"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="By The Numbers"
          description="The scale and impact of our Mario card community."
          metrics={[
            {
              id: "1",
              value: "50K+",
              description: "Collectors Worldwide"
            },
            {
              id: "2",
              value: "25,000",
              description: "Cards in Inventory"
            },
            {
              id: "3",
              value: "99%",
              description: "Authenticity Rate"
            },
            {
              id: "4",
              value: "4.9★",
              description: "Customer Rating"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Collector Stories"
          description="Hear from Mario card enthusiasts who have built incredible collections with us."
          testimonials={[
            {
              id: "1",
              name: "Alex Chen",
              role: "Collector",
              company: "Mario Enthusiast",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764325002177-xemb69x7.jpg",
              imageAlt: "Portrait of Alex Chen"
            },
            {
              id: "2",
              name: "Sarah Martinez",
              role: "Collection Manager",
              company: "Gaming Heritage",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764325003758-nbzgqfml.jpg",
              imageAlt: "Portrait of Sarah Martinez"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Investment Collector",
              company: "Card Vault",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764325005337-ubf22yca.jpg",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              role: "Curator",
              company: "Collection Archives",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764325006843-dt19ccex.jpg",
              imageAlt: "Portrait of Emma Rodriguez"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about collecting Mario cards."
          faqs={[
            {
              id: "1",
              title: "Are all cards authentic?",
              content: "Yes, every card in our collection is verified authentic. We work with industry experts and certification bodies to ensure complete authenticity. Each card includes a certificate of authenticity."
            },
            {
              id: "2",
              title: "What is the grading system?",
              content: "Cards are graded on a scale of 1-10 based on condition. We use professional grading standards to assess card quality, including centering, corners, edges, and surface condition."
            },
            {
              id: "3",
              title: "Do you offer international shipping?",
              content: "Yes, we ship worldwide with full insurance protection. Shipping costs vary by location and card value. Express and standard shipping options are available."
            },
            {
              id: "4",
              title: "Can I return cards?",
              content: "We offer a 14-day money-back guarantee if you're not satisfied with your purchase. Cards must be in original condition and unopened."
            },
            {
              id: "5",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, PayPal, and secure bank transfers. All transactions are encrypted and protected for your security."
            },
            {
              id: "6",
              title: "How do I store my cards properly?",
              content: "Store cards in protective sleeves in a cool, dry place away from sunlight. We recommend using acid-free storage boxes and maintaining a stable temperature and humidity level."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Started With Your Collection"
          description="Have questions about our Mario cards or want to place an order? Contact us today and our team will help you find the perfect additions to your collection."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your collection interests...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764325008593-opk7bf4l.jpg"
          imageAlt="Mario cards collection"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Mario Cards"
          columns={[
            {
              items: [
                { label: "Browse Cards", href: "products" },
                { label: "Featured", href: "products" },
                { label: "New Arrivals", href: "products" }
              ]
            },
            {
              items: [
                { label: "About", href: "features" },
                { label: "Grading Guide", href: "faq" },
                { label: "Authenticity", href: "faq" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Support", href: "contact" },
                { label: "Shipping Info", href: "faq" }
              ]
            }
          ]
        />
      </div>
    </ThemeProvider>
  );
}