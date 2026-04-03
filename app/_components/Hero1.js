export default function Hero1() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
      >
        <source src="/airflow.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
