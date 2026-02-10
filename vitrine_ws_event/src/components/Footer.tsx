import React from "react";
import { MessageSquare, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const email = "ws.event.paris@gmail.com";
  const phone = "+33 6 51 42 02 43";
  const whatsappNumber = "+33651420243";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in event tickets.`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">ws_event</h3>
            <p className="text-primary-foreground/80 mb-6">
              {t("footer.brand_description")}
            </p>
            <div className="flex space-x-4">
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors" aria-label="WhatsApp">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href={`mailto:${email}`} className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href={`tel:${phone}`} className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.quick_links")}</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.our_services")}</a></li>
              <li><a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.featured_events")}</a></li>
              <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.testimonials")}</a></li>
              <li><a href="#request" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.request_tickets")}</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.contact_us")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.event_categories")}</h3>
            <ul className="space-y-2">
              <li><a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.concerts")}</a></li>
              <li><a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.sports")}</a></li>
              <li><a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.theatre")}</a></li>
              <li><a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.festivals")}</a></li>
              <li><a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("footer.special")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {currentYear} ws_event. {t("footer.copyright")}</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.privacy")}</a>
            {" | "}
            <a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.terms")}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;