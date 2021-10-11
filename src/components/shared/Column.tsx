export default function Column({ style, label, children }) {
  
  return (
    <div className={`col-12 col-md-${style} category-info p-3`}>
      {label && <span className="font-weight-bold">{label}</span>}
      {children}
    </div>
  );
}
