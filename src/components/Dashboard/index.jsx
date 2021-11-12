import Button from "../Button";

const Dashboard = ({ setAllowed }) => {
  const handleReturn = () => {
    setAllowed(false);
  };
  return (
    <>
      <Button onclick={handleReturn}>Retornar</Button>
    </>
  );
};
export default Dashboard;
