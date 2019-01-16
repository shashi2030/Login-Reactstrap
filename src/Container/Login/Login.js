import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
require('./css/login.css');
const initialState = {
    username: "",
    password: "",
    submitted: false,
    alert: { type: null, message: null }
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    onChange = (e) => {
        let { name, value } = e.target;
        let value1 = value.trim();
        this.setState({
            [name]: value1
        })
    }
    handleEnterKeyPress = (e) => {
        this.setState({
            alert: { type: null, message: null }
        });
        if (e.charCode === '13') {
            this.handleSubmit(e);
        }

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitted: true
        });
        const { username, password } = this.state;
        if (username && password) {
            console.log(this.state.username, this.state.password);
        }
    }
    render() {
        const { username, password, submitted } = this.state;
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form className="login-container" onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="text" autoFocus name="username" value={username} id="username" placeholder="Username" onChange={this.onChange} />
                                {!username && submitted && <div className="text-danger">Enter Username</div>}
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" value={password} id="password" placeholder="Password" onChange={this.onChange} />
                                {!password && submitted && <div className="text-danger">Enter Password</div>}
                            </FormGroup>
                            <Button onClick={this.handleSubmit} color="primary">Submit</Button> <Button color="secondary">Cancel</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;