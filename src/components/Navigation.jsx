import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="bottom-nav">
      <NavLink to="/home" className="nav-item">
        <div className="nav-icon">🏠</div>
        <div className="nav-label">Home</div>
      </NavLink>
      <NavLink to="/recipe" className="nav-item">
        <div className="nav-icon">🍲</div>
        <div className="nav-label">Recipe</div>
      </NavLink>
      <NavLink to="/workout" className="nav-item">
        <div className="nav-icon">💪</div>
        <div className="nav-label">Workout</div>
      </NavLink>
      <NavLink to="/chatbot" className="nav-item">
        <div className="nav-icon">🤖</div>
        <div className="nav-label">Chatbot</div>
      </NavLink>
      

    </div>
  );
}

export default Navigation;
