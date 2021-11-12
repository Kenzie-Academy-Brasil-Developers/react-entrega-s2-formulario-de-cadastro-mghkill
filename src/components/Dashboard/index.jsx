import { useHistory } from "react-router";
import Button from "../Button";

const Dashboard = () => {
  const history = useHistory();
  return (
    <>
      <Button onclick={() => history.push("/")}>Retornar</Button>
    </>
  );
};
export default Dashboard;
