import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { listEmpresa } from '../providers/AppProvider'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import EmpresaDetail from './Empresa.Detail'
import OfflineModal from './Offline.Modal'

export default class EmpresaList extends Component {

    constructor(props) {
        super(props)

        this.state = {

            loading: true,
            empresaList: [],
            page: {},

        }
    }


    componentDidMount() {

        this.listEmpresa()

    }

    listEmpresa = async () => {

        this.setState({ loading: true })

        let page = this.state.page
        let filter = {}
        if (this.state.txtCnpj) {
            filter.cnpj = this.state.txtCnpj
        }

        let v_Response = await listEmpresa({ page, filter }).catch(x => this.bindingError(x))

        if (!v_Response || !v_Response.data) {
            this.bindingError(v_Response)
            return
        }

        let v_EmpresaList = v_Response.data.list.map(v_Empresa => {

            v_Empresa.cnaeFiscalValue += '\n\n' + v_Empresa.cnaeFiscalText

            let v_Situacao = 'Inicio em:\n' + (v_Empresa.dataInicioAtividade ? new Date(v_Empresa.dataInicioAtividade).toLocaleDateString('pt-BR') : '')
            if (v_Empresa.situacaoCadastralMotivoText) {
                v_Situacao += '\n\n' + v_Empresa.situacaoCadastralText
                v_Situacao += '\n' + (v_Empresa.situacaoCadastralData ? new Date(v_Empresa.situacaoCadastralData).toLocaleDateString('pt-BR') : '')
                v_Situacao += '\n\n' + v_Empresa.situacaoCadastralMotivoText
            }
            v_Empresa.situacao = v_Situacao

            v_Empresa.contato = ''
            if (v_Empresa.telefone) { v_Empresa.contato += 'Telefone: ' + v_Empresa.telefone + '\n' }
            if (v_Empresa.email) { v_Empresa.contato += 'Email: ' + v_Empresa.email + '\n' }

            v_Empresa.address = v_Empresa.logradouroTipo + ': ' + v_Empresa.logradouro + ' Nº ' + v_Empresa.logradouroNumero + '\n' +
                'Bairro: ' + v_Empresa.bairro + '\n' + v_Empresa.municipio + '/' + v_Empresa.UF


            if (v_Empresa.nomeFantasia) {
                v_Empresa.razaoSocial += '\n\nNome fantasia:\n' + v_Empresa.nomeFantasia
            }
            return v_Empresa
        });

        this.setState({ loading: false, empresaList: v_EmpresaList, page: v_Response.data.page })

    }

    TimeoutError = null
    bindingError = (p_Exception) => {
        console.log('bindingError', p_Exception)

        clearTimeout(this.TimeoutError)
        this.TimeoutError = setTimeout(() => this.setState({ error: false }), 3000);

        this.setState({ loading: false, error: true, empresaList: [] })
    }

    onChangePage = (event, newPage) => {
        let page = this.state.page
        page.current = newPage + 1
        this.setState({ page }, () => {
            this.listEmpresa()
        })
    }

    onChangeRowsPerPage = (event) => {
        let page = this.state.page
        page.size = event.target.value
        this.setState({ page }, () => {
            this.listEmpresa()
        })
    }

    columns = [
        { id: 'razaoSocial', label: 'Razão social', minWidth: 170 },
        { id: 'cnpj', label: 'CNPJ', minWidth: 100 },
        { id: 'address', label: 'Endereço', minWidth: 100 },
        { id: 'matrizOrFilial', label: 'Matriz/Filial', minWidth: 100 },
        { id: 'cnaeFiscalValue', label: 'Ramo atividade', minWidth: 100 },
        { id: 'contato', label: 'Contato', minWidth: 100 },
        { id: 'situacao', label: 'Situação', minWidth: 100 },
        { id: 'edit', label: '' },
    ];

    closeModal = () => {
        this.setState({ modalShow: false, modalEmpresa: null })
    }

    showModal = (p_Empresa) => {
        this.setState({ modalShow: true, modalEmpresa: p_Empresa })
    }

    render() {

        if (this.state.loading) {
            return <div style={{ margin: '0 auto', width: '300px', marginTop: 'calc(40vh - 100px)' }}>
                Buscando empresas, aguarde...
                    <CircularProgress color="inherit" />
            </div>
        }


        return (
            <Container maxWidth="lg">

                <div>
                    <div style={{ display: 'flex', float: 'left' }}>
                        <a href="/">
                            <button type="button" className="btn btn-primary">
                                Voltar
                            </button>
                        </a>
                        <span style={{ fontWeight: 'bold', fontSize: '20px', padding: '2px 15px' }}>
                            Lista de empresas do Brasil
                        </span>
                    </div>
                    <FormControl style={{ float: 'right', width: '300px' }} >
                        <InputLabel htmlFor="txtCnpj">Pesquisar por CNPJ</InputLabel>
                        <Input
                            id="txtCnpj"
                            type={'text'}
                            value={this.state.txtCnpj}
                            onChange={event => this.setState({ txtCnpj: event.target.value })}
                            endAdornment={
                                <InputAdornment position="end" className="pointer" title="buscar" onClick={() => this.listEmpresa()} style={{ padding: '15px' }} >
                                    <span className="fas fa-search" />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <Paper >
                    <TableContainer style={{ maxHeight: 'calc(100vh - 260px)' }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {this.columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.empresaList.map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            {this.columns.map((column) => {

                                                if (column.id === 'edit') {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            < Button variant="outlined" color="primary" onClick={() => this.showModal(row)}>
                                                                Detalhes
                                                            </Button>
                                                        </TableCell>
                                                    );
                                                }

                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                );

                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        component="div"
                        labelRowsPerPage="Registros por página"
                        rowsPerPageOptions={[10, 30, 100]}
                        onChangeRowsPerPage={this.onChangeRowsPerPage}
                        rowsPerPage={this.state.page.size || 0}
                        count={this.state.page.total || 0}
                        page={this.state.page.current - 1 || 0}
                        onChangePage={this.onChangePage}
                    />
                </Paper>

                <OfflineModal
                    show={this.state.error}
                    closeModal={() => this.setState({ error: false })}
                />

                <EmpresaDetail
                    show={this.state.modalShow}
                    empresa={this.state.modalEmpresa}
                    closeModal={this.closeModal}
                />

            </Container >
        )
    }
}
