import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';

export default class EmpresaDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {

        if (!this.props.show) return null

        return (
            <Dialog open={this.props.show} onClose={() => this.props.closeModal()}>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <p>
                            <b>Ops! Ocorreu um erro!</b>
                        </p>
                        <p>
                            <ul>
                                <li>Verifique sua conexão e a velocidade da sua internet.</li>
                                <li>Tente novamente.</li>
                                <li>Caso persista, favor entrar em contato conosco.</li>
                            </ul>
                        </p>
                    </Typography>
                </DialogContent>
            </Dialog>

        )
    }
}
