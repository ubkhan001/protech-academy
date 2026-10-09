import "./Logo.css";

function Logo({ className = "" }) {
  return (
    <div className={`brand-logo${className ? ` ${className}` : ""}`}>
      <span className="brand-logo-mark" aria-hidden="true">
        <span className="brand-logo-p">P</span>
        <span className="brand-logo-t">T</span>
      </span>
      <span className="brand-logo-copy">
        <span className="brand-logo-name">
          <span>Pro</span>
          <span className="brand-logo-accent">Tech</span>
        </span>
        <span className="brand-logo-academy">Academy</span>
        <span className="brand-logo-tagline">
          INSTITUTE OF PROFESSIONAL GROWTH
        </span>
      </span>
    </div>
  );
}

export default Logo;
