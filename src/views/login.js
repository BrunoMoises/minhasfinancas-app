import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { Link } from "react-router-dom";

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log('Email: ', this.state.email)
        console.log('Senha', this.state.senha)
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-6' style={{ position: 'relative', left: '300px' }}>
                    <div className='bs-docs-section'>
                        <Card title='Login'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='bs-component'>
                                        <form>
                                            <fieldset>
                                                <FormGroup label='Email: *' htmlFor='exampleInputEmail1'>
                                                    <input type="email" onChange={e => this.setState({ email: e.target.value })}
                                                        value={this.state.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email" />
                                                </FormGroup>
                                                <FormGroup label='Senha: *' htmlFor='exampleInputPassword1'>
                                                    <input type="password" onChange={e => this.setState({ senha: e.target.value })}
                                                        value={this.state.senha} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </FormGroup>
                                                <button type='button' className='btn btn-success' onClick={this.entrar}>Entrar</button>
                                                <Link to='/cadastro-usuarios' className='btn btn-danger'>Cadastrar</Link>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login