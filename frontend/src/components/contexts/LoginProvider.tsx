import React from 'react';

type StateAcesso = {
  page: string; // pagina usada no momento de execução
  auth: string; // dong do acesso html
  pinAdm: number; // acesso geral ao modulo gerado após estar logado
  // diante da tb_empresa
  idemp: number; // id selecionado
  nmfant: string; // nome fantasia
  // correspondente conforme tabela: (tb_funcionario),(tb_cliente),(tb_consumidor)
  // diante da tb_usuario
  iduser: number; // id tb_usuario
  nome: string; // nome (tb_funcionario),(tb_cliente),(tb_consumidor)
  usando_tb: string;
  nmiduser: string; // nmiduser(nome ou pseudonimo)
  pswuser: string; // pswuser (mail ou pin)
  pinuser: string; // pinuser (outra forma de entrar
  cadeado: boolean; // flag false/true
  avatar: string; // img tb_usuario em uso do acesso
  // mail,fonec,fonez e cpf correspondente conforme tabela:
  // (tb_funcionario),(tb_cliente),(tb_consumidor) -> tb_cadastro :->
  mail: string; // tb_cadastro -> tb_email-> mail
  mailresg: string; // tb_cadastro -> tb_email-> mail
  fonec: string; // tb_cadastro -> tb_fone-> fonec
  fonez: string; // tb_cadastro -> tb_fone-> fonez
  cpf: string; // tb_cadastro -> tb_fone-> doc
  // diante da tabela tb_acesso
  idacesso: number; // id
  // diante da tabela tb_modulo
  
  acessomodulo: string; // nome tb_modulo
  // dados para resgate para Acesso ao sistema
  // diante da tabela tb_resgate
  perg1: string; // tb_resgate -> primeira pergunta
  perg2: string; // tb_resgate -> segunda pergunta
  perg3: string; // tb_resgate -> terceira pergunta
  resp1: string; // tb_resgate -> primeira resposta
  resp2: string; // tb_resgate -> segunda resposta
  resp3: string; // tb_resgate -> terveira resposta
  // diante tb_nivel
  nivel: number;
  descnivel: string;
  // controle para paginas de login
  mdlogin: number;
  nmlogin: string;
  // controle do exesso de login
  nrcont: number;
  nmcont: string;
  // controle do titulo da Pagina acessada
  modulo: string;
  // controle da aplicação na pagina acessada
  aplicacao: string;
  // controle da verificação do acesso
  logado: boolean;
  // controle da arquivo de logsys
  dtini: string;
  dtfim: string;
  tempo: string;
};

export const initialData: StateAcesso = {
  page: '',
  auth: '',
  pinAdm: 0,
  idemp: 0,
  nmfant: '',
  iduser: 0,
  nome: '',
  usando_tb: '',
  nmiduser: '',
  pswuser: '',
  pinuser: '',
  cadeado: false,
  avatar: '',

  mail: '',
  mailresg: '',
  fonec: '',
  fonez: '',
  cpf: '',

  idacesso: 0,

  nmiduser: '',
  pswuser: '',
  pinuser: '',
  cadeado: false,

  acessomodulo: '',
  mailresg: '',
  perg1: '',
  perg2: '',
  perg3: '',
  resp1: '',
  resp2: '',
  resp3: '',
  descnivel: '',
  nivel: 0,
  nrcont: 0,
  nmcont: '',
  mdlogin: 0,
  nmlogin: '',
  modulo: '',
  aplicacao: '',
  logado: false,
  dtini: '',
  dtfim: '',
  tempo: '',
};

export enum AcessoUseActions {
  setPage,
  setAuth,
  setPinAdm,
  setIdEmp,
  setNmFant,

  setIdUser,
  setNome,
  setUsando_tb,
  setNmIdUser,
  setPswUser,
  setPinUser,
  setCadeado,
  setAvatar,

  setMail,
  setFoneC,
  setFoneZ,
  setCpf,

  setIdAcesso,
  
  setAcessoModulo,
  setMailResg,
  setperg1,
  setperg2,
  setperg3,
  setresp1,
  setresp2,
  setresp3,
  setDescNivel,
  setNivel,
  setNrCont,
  setNmCont,
  setMdLogin,
  setNmLogin,
  setModulo,
  setAplicacao,
  setLogado,
  setDtIni,
  setDtFim,
  setTmp,
}

type AcessoAction = {
  type: AcessoUseActions;
  payload: any;
};

type AcessoContextType = {
  state: StateAcesso;
  dispatch: (action: AcessoAction) => void;
};

const AcessoReducer = (state: StateAcesso, action: AcessoAction) => {
  switch (action.type) {
    // Page atual
    case AcessoUseActions.setPage:
      return { ...state, page: action.payload };
    case AcessoUseActions.setPinAdm:
      return { ...state, pinadm: action.payload };
    // Servidor
    case AcessoUseActions.setAuth:
      return { ...state, auth: action.payload };
    // set tb_empresa 
    case AcessoUseActions.setIdEmp:
      return { ...state, idemp: action.payload };
    case AcessoUseActions.setNmFant:
      return { ...state, nmfant: action.payload };
    // set tb_usuario 
    case AcessoUseActions.setIdUser:
      return { ...state, iduser: action.payload };
    case AcessoUseActions.setNome:
      return { ...state, nome: action.payload };
    case AcessoUseActions.setUsando_tb:
      return { ...state, usando_tb: action.payload };
    case AcessoUseActions.setAvatar:
      return { ...state, avatar: action.payload };


    case AcessoUseActions.setIdAcesso:
      return { ...state, idacesso: action.payload };
  
// set ( tb_funcionario,tb_cliente,tb_consumidor )
      case AcessoUseActions.setIdNmUser:
        return { ...state, idnmuser: action.payload };
      case AcessoUseActions.setPswUser:
        return { ...state, pswuser: action.payload };
        case AcessoUseActions.setPin:
          return { ...state, pin: action.payload };
  
    // set ( tb_funcionario,tb_cliente,tb_consumidor )
    case AcessoUseActions.setNome:
      return { ...state, nome: action.payload };
    // <=> tb_cadastro->( tb_mail <=> tb_fone <=> tb_doc ) 
    case AcessoUseActions.setMail:
      return { ...state, mail: action.payload };
    case AcessoUseActions.setFoneC:
      return { ...state, fonec: action.payload };
    case AcessoUseActions.setFoneZ:
      return { ...state, fonez: action.payload };
    case AcessoUseActions.setCpf:
      return { ...state, cpf: action.payload };
  

    setMail,
    setFoneC,
    setFoneZ,
    setCpf,
    // set tb_usuario
  
        
    case AcessoUseActions.setAvatar:
      return { ...state, avatar: action.payload };

    case AcessoUseActions.setperg1:
      return { ...state, perg1: action.payload };
    case AcessoUseActions.setresp1:
      return { ...state, resp1: action.payload };
    case AcessoUseActions.setperg2:
      return { ...state, perg2: action.payload };
    case AcessoUseActions.setresp2:
      return { ...state, resp2: action.payload };
    case AcessoUseActions.setperg3:
      return { ...state, perg3: action.payload };
    case AcessoUseActions.setresp3:
      return { ...state, resp3: action.payload };

    case AcessoUseActions.setMdVisita:
      return { ...state, mdV: action.payload };
    case AcessoUseActions.setNmVisita:
      return { ...state, ndrecep: action.payload };
    case AcessoUseActions.setNmRecep:
      return { ...state, nmrecep: action.payload };
    case AcessoUseActions.setMdDesig:
      return { ...state, mddesig: action.payload };
    case AcessoUseActions.setNmDesig:
      return { ...state, nmdesig: action.payload };
    case AcessoUseActions.setMdProdu:
      return { ...state, mdprodu: action.payload };
    case AcessoUseActions.setNmProdu:
      return { ...state, nmprodu: action.payload };
    case AcessoUseActions.setMdAcaba:
      return { ...state, mdacaba: action.payload };
    case AcessoUseActions.setNmAcaba:
      return { ...state, nmacaba: action.payload };
    case AcessoUseActions.setMdExped:
      return { ...state, mdexped: action.payload };
    case AcessoUseActions.setNmExped:
      return { ...state, nmexped: action.payload };
    case AcessoUseActions.setMdAdmin:
      return { ...state, mdadmin: action.payload };
    case AcessoUseActions.setNmAdmin:
      return { ...state, nmadmin: action.payload };
    case AcessoUseActions.setMdMaster:
      return { ...state, mdmaster: action.payload };
    case AcessoUseActions.setNmMaster:
      return { ...state, nmmaster: action.payload };
    case AcessoUseActions.setMdConfig:
      return { ...state, mdconfig: action.payload };
    case AcessoUseActions.setNmConfig:
      return { ...state, nmconfig: action.payload };

    case AcessoUseActions.setMdLogin:
      return { ...state, mdlogin: action.payload };
    case AcessoUseActions.setNmLogin:
      return { ...state, nmlogin: action.payload };
    case AcessoUseActions.setNrCont:
      return { ...state, nrcont: action.payload };
    case AcessoUseActions.setNmCont:
      return { ...state, nmcont: action.payload };

    case AcessoUseActions.setModulo:
      return { ...state, modulo: action.payload };
    case AcessoUseActions.setAplicacao:
      return { ...state, aplicacao: action.payload };
    case AcessoUseActions.setDescnivel:
      return { ...state, descnivel: action.payload };
    case AcessoUseActions.setNivel:
      return { ...state, nivel: action.payload };

    case AcessoUseActions.setLogado:
      return { ...state, logado: action.payload };
    case AcessoUseActions.setDtIni:
      return { ...state, datetimei: action.payload };
    case AcessoUseActions.setDtFim:
      return { ...state, datetimef: action.payload };
    case AcessoUseActions.setTmp:
      return { ...state, tempo: action.payload };

    default:
      return state;
  }
};

const AcessoContext = React.createContext<AcessoContextType | undefined>(
  undefined,
);

type AcessoProviderProps = {
  children: React.ReactNode | JSX.Element;
};
export const AcessoProvider = ({ children }: AcessoProviderProps) => {
  const [state, dispatch] = React.useReducer(AcessoReducer, initialData);
  const value = { state, dispatch };
  return (
    <AcessoContext.Provider value={value}>{children}</AcessoContext.Provider>
  );
};

export const AcessoUseForm = () => {
  const context = React.useContext(AcessoContext);
  if (context === undefined) {
    throw new Error('"Useform" precisa ser usado dentro do Provider!');
  }
  return context;
};

export default AcessoContext;
