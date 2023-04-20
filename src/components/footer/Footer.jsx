import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <footer>
      <p>{t("footer.credits")}</p>
      <p>{t("footer.contact")}  <a href='mailto:carlavelasco15@gmail.com'> carlavelasco15@gmail.com</a></p>
    </footer>
  );
};

export default Footer;
