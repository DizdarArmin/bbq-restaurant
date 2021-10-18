export default function BackgroundFlames() {
  return (
    <div className="flames">
      <video autoPlay muted loop className="video">
        <source src="fire.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
