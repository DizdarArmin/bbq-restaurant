export default function BackgroundFlames({ children }) {
  return (
    <div className="flames">
      <video autoPlay muted loop className="video">
        <source src="fire.mp4" type="video/mp4" />
      </video>
      <div className="content">{children}</div>
    </div>
  );
}
