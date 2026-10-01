export default function LightsailCard() {
  return (
    <aside className="lightsail-banner-card" aria-label="Amazon Lightsail Promotion">
      <a
        href="https://aws.amazon.com/lightsail/"
        target="_blank"
        rel="noopener noreferrer"
        className="lightsail-banner-link"
        title="Amazon Lightsail"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lightsail-promo.png"
          alt="Amazon Lightsail - Lightsail is the easiest way to get started on AWS. Learn more »"
          className="lightsail-promo-image"
        />
      </a>
    </aside>
  );
}
