import React from 'react';


class Register extends React.Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
            passwordValidate: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        
        this.setState({ password: event.target.value })
    }

    onPasswordValidation = (event) => {
        this.setState({ passwordValidate: event.target.value })
    }

    onSubmitSignIn = () => {
        //fetch by default does a GET request, but we want POST
        // - needs to wrap within''
        //we have to use json to send to backend because we cant just send js object to the backend
       const { email, password, passwordValidate, name } = this.state

            if (passwordValidate === password) {
                console.log('yay same password')
                //https://safe-sea-61438.herokuapp.com/register
                //http://localhost:3000/register
                fetch('http://localhost:3001/register', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        name: name
                    })
                })
                    .then(response => response.json())
                    .then(user => {
                        if (user.id) {
                            this.props.loadUser(user)
                            this.props.onRouteChange('home')
                        }
                    })
            } else {
                console.log('nope pw not a match')
            }

    }
    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">

                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>

                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange} />

                            </div>
                            <div className="mt3">
                                <label ref="emailValidate" className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>

                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange} />
                            </div>
                            <div>
                                <label
                                    className="db fw6 lh-copy f6" htmlFor="password">Confirm password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="passwordValidate"
                                    id="passwordValidate"
                                    onChange={this.onPasswordValidation}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                            />

                        </div>
                    </div>
                </main>
            </article>
        )
    }

}

export default Register;