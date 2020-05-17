import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

export default class EmpresaDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {

        if (!this.props.show) return null

        if (!this.props.empresa) return null

        return (
            <Dialog onClose={() => this.props.closeModal()} open={this.props.show}>
                <DialogTitle id="customized-dialog-title">
                    Dados gerais da empresa
                </DialogTitle>
                <DialogContent dividers>

                    <div>
                        <b>Nome da empresa: </b>{this.props.empresa.razaoSocial}
                    </div>
                    <div>
                        <b>Nome fantasia: </b>{this.props.empresa.nomeFantasia ? this.props.empresa.nomeFantasia : '*******'}
                    </div>
                    <div>
                        <b>CNPJ: </b>{this.props.empresa.cnpj}
                    </div>
                    <div>
                        <b>Data de abertura: </b>{this.props.empresa.dataInicioAtividade ? new Date(this.props.empresa.dataInicioAtividade).toLocaleDateString('pt-BR') : ''}
                    </div>
                    <hr />
                    <div>
                        <b>Ramo de atividade: </b>
                    </div>
                    <div>
                        {this.props.empresa.cnaeFiscalValue + ' - ' + this.props.empresa.cnaeFiscalText}
                    </div>
                    <div>
                        <b>Endereço: </b>{this.props.empresa.address}
                    </div>
                    <hr />
                    <div>
                        <b>Endereço eletrônico: </b>{this.props.empresa.email ? this.props.empresa.email : '*******'}
                    </div>
                    <div>
                        <b>Telefone: </b>{this.props.empresa.telefone ? this.props.empresa.telefone : '*******'}
                    </div>
                    <hr />
                    <div>
                        <b>Situação cadastral: </b>{this.props.empresa.situacaoCadastralText}
                    </div>
                    <div>
                        <b>Motivo situação cadastral: </b>{this.props.empresa.situacaoCadastralMotivoText}
                    </div>
                    <div>
                        <b>Data da situação cadastral: </b>{this.props.empresa.situacaoCadastralData ? new Date(this.props.empresa.situacaoCadastralData).toLocaleDateString('pt-BR') : ''}
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={this.props.closeModal} color="primary">
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>

        )
    }
}
