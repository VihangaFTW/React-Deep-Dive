export default function Tabs({ children, buttons, buttonContainer = 'menu'}) {
  // buttonContainer would be parsed as a built in html element hence why the first letter is capitalized
  const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
