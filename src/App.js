import './App.css';
import {Button, Form} from 'react-bootstrap';
  


function App() {
  return (
    <div className="Login-App">
  <nav class="navbar navbar-default navbar-expand-lg navbar-light">
	<div class="navbar-header">
		<a class="navbar-brand" href="#">Talel<b>App</b></a>  	
	</div>
			<div class="search-box">								
				<input type="text" id="search" class="form-control" placeholder="Search here..."/>
        <button type="button" class="btn btn-outline-primary">search</button>
  			</div>
		<div class="navbar-right">			
				<button href="#"  class="btn btn-primary get-started-btn ">Sign up</button>
				</div>
</nav>
    <Form ClassName="Form-App">
        <h1>This is my first app</h1>
        <h2>Welcome</h2>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Exemple@email.com"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <button class="button"><span>Login </span></button>
        </Form>
    </div>
  );
}

export default App;
