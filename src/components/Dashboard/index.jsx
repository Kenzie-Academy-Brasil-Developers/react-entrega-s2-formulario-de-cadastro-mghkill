import Button from "../Button";
import { DashboardStyled } from "./styles";
import image from "./alegria.png";

const Dashboard = ({ setAllowed, userData }) => {
  const handleReturn = () => {
    setAllowed(false);
  };
  return (
    <DashboardStyled>
      <h2>Bem vindo, {userData.name}!</h2>
      <img src={image} alt="Alegria!" />
      <Button onclick={handleReturn}>Retornar</Button>
    </DashboardStyled>
  );
};
export default Dashboard;
