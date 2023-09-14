import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Container } from "../container/Container";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet></Outlet>
      </Container>
    </>
  );
};
