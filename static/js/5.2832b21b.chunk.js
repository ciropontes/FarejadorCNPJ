(this["webpackJsonpfarejador-cnpj"]=this["webpackJsonpfarejador-cnpj"]||[]).push([[5],{176:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return B}));var n=t(68),r=t.n(n),l=t(69),o=t(10),i=t(9),s=t(12),c=t(11),u=t(0),p=t.n(u),m=t(153),d=t(163),h=t(95),E=t.n(h).a.create({baseURL:"https://app.futurelegis.com.br/api"});E.interceptors.response.use((function(e){return new Promise(function(){var a=Object(l.a)(r.a.mark((function a(t,n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t(e);case 1:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())}),(function(e){return new Promise(function(){var a=Object(l.a)(r.a.mark((function a(t,n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n(e);case 1:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())}));var f={headers:{"Content-Type":"application/json"}};function v(e){var a=1;return e&&e.page&&e.page.current&&(a=e.page.current),E.post("/company/listCompanies?page="+a,e,f)}var b=t(157),g=t(168),C=t(172),x=t(171),w=t(167),j=t(169),y=t(173),S=t(170),k=t(164),D=t(166),O=t(165),T=t(178),M=t(162),F=t(177),N=t(158),P=t(160),L=t(161),R=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return this.props.show&&this.props.empresa?p.a.createElement(F.a,{onClose:function(){return e.props.closeModal()},open:this.props.show},p.a.createElement(N.a,{id:"customized-dialog-title"},"Dados gerais da empresa"),p.a.createElement(P.a,{dividers:!0},p.a.createElement("div",null,p.a.createElement("b",null,"Nome da empresa: "),this.props.empresa.razaoSocial),p.a.createElement("div",null,p.a.createElement("b",null,"Nome fantasia: "),this.props.empresa.nomeFantasia?this.props.empresa.nomeFantasia:"*******"),p.a.createElement("div",null,p.a.createElement("b",null,"CNPJ: "),this.props.empresa.cnpj),p.a.createElement("div",null,p.a.createElement("b",null,"Data de abertura: "),this.props.empresa.dataInicioAtividade?new Date(this.props.empresa.dataInicioAtividade).toLocaleDateString("pt-BR"):""),p.a.createElement("hr",null),p.a.createElement("div",null,p.a.createElement("b",null,"Ramo de atividade: ")),p.a.createElement("div",null,this.props.empresa.cnaeFiscalValue+" - "+this.props.empresa.cnaeFiscalText),p.a.createElement("div",null,p.a.createElement("b",null,"Endere\xe7o: "),this.props.empresa.address),p.a.createElement("hr",null),p.a.createElement("div",null,p.a.createElement("b",null,"Endere\xe7o eletr\xf4nico: "),this.props.empresa.email?this.props.empresa.email:"*******"),p.a.createElement("div",null,p.a.createElement("b",null,"Telefone: "),this.props.empresa.telefone?this.props.empresa.telefone:"*******"),p.a.createElement("hr",null),p.a.createElement("div",null,p.a.createElement("b",null,"Situa\xe7\xe3o cadastral: "),this.props.empresa.situacaoCadastralText),p.a.createElement("div",null,p.a.createElement("b",null,"Motivo situa\xe7\xe3o cadastral: "),this.props.empresa.situacaoCadastralMotivoText),p.a.createElement("div",null,p.a.createElement("b",null,"Data da situa\xe7\xe3o cadastral: "),this.props.empresa.situacaoCadastralData?new Date(this.props.empresa.situacaoCadastralData).toLocaleDateString("pt-BR"):"")),p.a.createElement(L.a,null,p.a.createElement(M.a,{autoFocus:!0,onClick:this.props.closeModal,color:"primary"},"Fechar"))):null}}]),t}(u.Component),W=t(159),z=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.show?p.a.createElement(F.a,{open:this.props.show,onClose:function(){return e.props.closeModal()}},p.a.createElement(P.a,{dividers:!0},p.a.createElement(W.a,{gutterBottom:!0},p.a.createElement("p",null,p.a.createElement("b",null,"Ops! Ocorreu um erro!")),p.a.createElement("p",null,p.a.createElement("ul",null,p.a.createElement("li",null,"Verifique sua conex\xe3o e a velocidade da sua internet."),p.a.createElement("li",null,"Tente novamente."),p.a.createElement("li",null,"Caso persista, favor entrar em contato conosco.")))))):null}}]),t}(u.Component),B=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).listEmpresa=Object(l.a)(r.a.mark((function e(){var a,t,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),a=n.state.page,t={},n.state.txtCnpj&&(t.cnpj=n.state.txtCnpj),e.next=6,v({page:a,filter:t}).catch((function(e){return n.bindingError(e)}));case 6:if((l=e.sent)&&l.data){e.next=10;break}return n.bindingError(l),e.abrupt("return");case 10:o=l.data.list.map((function(e){e.cnaeFiscalValue+="\n\n"+e.cnaeFiscalText;var a="Inicio em:\n"+(e.dataInicioAtividade?new Date(e.dataInicioAtividade).toLocaleDateString("pt-BR"):"");return e.situacaoCadastralMotivoText&&(a+="\n\n"+e.situacaoCadastralText,a+="\n"+(e.situacaoCadastralData?new Date(e.situacaoCadastralData).toLocaleDateString("pt-BR"):""),a+="\n\n"+e.situacaoCadastralMotivoText),e.situacao=a,e.contato="",e.telefone&&(e.contato+="Telefone: "+e.telefone+"\n"),e.email&&(e.contato+="Email: "+e.email+"\n"),e.address=e.logradouroTipo+": "+e.logradouro+" N\xba "+e.logradouroNumero+"\nBairro: "+e.bairro+"\n"+e.municipio+"/"+e.UF,e.nomeFantasia&&(e.razaoSocial+="\n\nNome fantasia:\n"+e.nomeFantasia),e})),n.setState({loading:!1,empresaList:o,page:l.data.page});case 12:case"end":return e.stop()}}),e)}))),n.TimeoutError=null,n.bindingError=function(e){console.log("bindingError",e),clearTimeout(n.TimeoutError),n.TimeoutError=setTimeout((function(){return n.setState({error:!1})}),3e3),n.setState({loading:!1,error:!0,empresaList:[]})},n.onChangePage=function(e,a){var t=n.state.page;t.current=a+1,n.setState({page:t},(function(){n.listEmpresa()}))},n.columns=[{id:"razaoSocial",label:"Raz\xe3o social",minWidth:170},{id:"cnpj",label:"CNPJ",minWidth:100},{id:"address",label:"Endere\xe7o",minWidth:100},{id:"matrizOrFilial",label:"Matriz/Filial",minWidth:100},{id:"cnaeFiscalValue",label:"Ramo atividade",minWidth:100},{id:"contato",label:"Contato",minWidth:100},{id:"situacao",label:"Situa\xe7\xe3o",minWidth:100}],n.closeModal=function(){n.setState({modalShow:!1,modalEmpresa:null})},n.showModal=function(e){n.setState({modalShow:!0,modalEmpresa:e})},n.state={loading:!0,empresaList:[],page:{}},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.listEmpresa()}},{key:"render",value:function(){var e=this;return this.state.loading?p.a.createElement("div",{style:{margin:"0 auto",width:"300px",marginTop:"calc(40vh - 100px)"}},"Buscando empresas, aguarde...",p.a.createElement(d.a,{color:"inherit"})):p.a.createElement(m.a,{maxWidth:!1},p.a.createElement("div",null,p.a.createElement("div",{style:{display:"flex",float:"left"}},p.a.createElement("a",{href:"/"},p.a.createElement("button",{type:"button",className:"btn btn-primary"},"Voltar")),p.a.createElement("span",{className:"page-header-title"},"Lista de empresas do Brasil")),p.a.createElement(k.a,{style:{float:"right",width:"250px",marginTop:"-10px"}},p.a.createElement(T.a,{htmlFor:"txtCnpj"},"Pesquisar por CNPJ"),p.a.createElement(O.a,{id:"txtCnpj",type:"text",value:this.state.txtCnpj,onChange:function(a){return e.setState({txtCnpj:a.target.value.replace(/\D/g,"")})},endAdornment:p.a.createElement(D.a,{position:"end",className:"pointer",title:"buscar",onClick:function(){return e.listEmpresa()},style:{padding:"15px"}},p.a.createElement("span",{className:"fas fa-search"}))}))),p.a.createElement(b.a,null,p.a.createElement(w.a,{style:{maxHeight:"calc(100vh - 260px)"}},p.a.createElement(g.a,{stickyHeader:!0},p.a.createElement(j.a,null,p.a.createElement(S.a,null,this.columns.map((function(e,a){return p.a.createElement(x.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth},className:a>1?"table-cell-mobile-hidden":""},e.label)})))),p.a.createElement(C.a,null,this.state.empresaList.map((function(a,t){return p.a.createElement(S.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t,onClick:function(){return e.showModal(a)},className:"pointer",title:"Ver detalhes"},e.columns.map((function(e,t){var n=a[e.id];return p.a.createElement(x.a,{key:e.id,align:e.align,className:t>1?"table-cell-mobile-hidden":""},e.format&&"number"===typeof n?e.format(n):n)})))}))))),p.a.createElement(y.a,{component:"div",labelRowsPerPage:"",rowsPerPageOptions:[],labelDisplayedRows:function(e){var a=e.from,t=e.to,n=e.count;return"Exibindo ".concat(a," \xe0 ").concat(-1===t?n:t," de ").concat(-1!==n?n:"more than "+t)},rowsPerPage:this.state.page.size||0,count:this.state.page.total||0,page:this.state.page.current-1||0,onChangePage:this.onChangePage})),p.a.createElement(z,{show:this.state.error,closeModal:function(){return e.setState({error:!1})}}),p.a.createElement(R,{show:this.state.modalShow,empresa:this.state.modalEmpresa,closeModal:this.closeModal}))}}]),t}(u.Component)}}]);
//# sourceMappingURL=5.2832b21b.chunk.js.map