import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    <h1>login</h1>
     <nav>
      <ul>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
      </ul>
    </nav>
    </>
   
  );
}

export default Login;
