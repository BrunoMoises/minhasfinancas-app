import React from "react";

import Card from "../components/card";
import FormGroup from "../components/form-group";
import { Link } from "react-router-dom";

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }

    render() {
        return (
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputName">
                                <input type="text" id="inputName"
                                    className="form-control" name="nome" onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="email" className="form-control" id="inputEmail" name="email" onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" className="form-control" id="inputSenha" name="senha" onChange={e => this.setState({ senha: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password" className="form-control" id="inputRepitaSenha" name="senhaRepeticao" onChange={e => this.setState({ senhaRepeticao: e.target.value })} />
                            </FormGroup>
                            <button type="button" className="btn btn-success" onClick={this.cadastrar}>Salvar</button>
                            <Link to="/login" className="btn btn-danger">Cancelar</Link>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroUsuario