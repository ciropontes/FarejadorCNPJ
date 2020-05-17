import React, { Component } from "react";
import Container from '@material-ui/core/Container';

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sources: []
        }
    }


    componentDidMount() {

    }



    render() {
        return (

            <Container maxWidth="sm">
                <div className="jumbotron" style={{ textAlign: 'center' }}>
                    <p className="lead">
                        Pesquise por todas as empresas do Brasil
                    </p>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.history.push('/empresa-pesquisar')}>Pesquisar</button>
                    <hr />
                    <p >PUCMINAS - Front-End Avançado - Progressive Web Apps</p>
                    <p >Ciro Otavio Caetano Pontes</p>
                </div>
            </Container>
        )
    }
}
