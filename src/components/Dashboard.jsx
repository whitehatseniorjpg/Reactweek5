const Dashboard = ({ setIsAuthenticated }) => {

    const handleLogout = () => {
      setIsAuthenticated(false);
    };
  
    return (
      <div>
        <h2>Dashboard</h2>
        <h3>Welcome </h3>
  
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  };
  
  export default Dashboard;
  