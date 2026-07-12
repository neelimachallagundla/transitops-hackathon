import "../styles/pageHeader.css";

export default function PageHeader({
  title,
  subtitle,
}) {
  return (
    <div className="page-header">

      <div>

        <p className="page-subtitle">
          👋 Good Afternoon
        </p>

        <h1>{title}</h1>

        <p className="page-description">
          {subtitle}
        </p>

      </div>

    </div>
  );
}