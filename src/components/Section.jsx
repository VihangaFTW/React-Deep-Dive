export default function Section({ title, children, ...remainingProps}) {
  return (
    <section id  = {remainingProps.id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
