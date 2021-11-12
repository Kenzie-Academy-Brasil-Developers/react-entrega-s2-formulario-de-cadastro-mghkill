import { useHistory } from "react-router";

const Dashboard = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/")}>Retornar</button>
    </div>
  );
};
export default Dashboard;
