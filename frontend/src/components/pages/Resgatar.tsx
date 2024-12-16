// filtra em TB_RESGATE
// idempr === id_empresa;
// nmempr === id_empresa;
// cpf === cpf_origem
// se encontrar continua a filtrar
// caso mdlog === 1             (opção E-mail.)
// mail === mail_origem
// caso mdlog === 2             (opção E-mail Resgate.)
// mail === mailresg_origem
// caso mdlog === 3             (opção Celular via SMS.)
// cell === fn_sms
// caso mdlog === 4             (opção Celular via Whatsapp.)
// cell === fn_zap
// caso mdlog === 5            (opção Peguntas.)
// perg1 === perg_1
// perg2 === perg_2
// perg3 === perg_3
// resg1 === resg_1
// resg2 === resg_2
// resg3 === resg_3
// se tiver mais que um login filtra o de mesmo modulo

import React, { useState, useCallback, useEffect } from 'react';

import * as Pg from '../stylePages';

import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import { useNavigate } from 'react-router-dom';
import LayoutResgatar from '../layouts/LayoutResgatar';
import lg_resgate from '../../assets/svgs/lg_resgate.svg';
import bt_help from '../../assets/svgs/bt_help.svg';
import bt_abortar from '../../assets/svgs/bt_abortar.svg';
import bt_close from '../../assets/svgs/bt_close.svg';
import bt_setaesq from '../../assets/svgs/bt_setaesq.svg';
import bt_setadir from '../../assets/svgs/bt_setadir.svg';
import { CardHlpResgateLogo } from '../../cards/CardHlpResgateLogo';
import { CardHlpResgatePage } from '../../cards/CardHlpResgatePage';
import { CardModalErro } from '../../cards/CardModalErro';

import {
  isValidarEmail,
  isValidarCell,
  isCpfValid,
  isExistsCPF,
  VerPergResp,
} from '../../funcs/ErroEdicao';
import { ContentCardPageMain } from '../ContentCardPageMain';
import { ContentCardPage } from '../ContentCardPage';
import { ContentCardPageTitle } from '../ContentCardPageTitle';
import { ContentCardBoxDialogo } from '../ContentCardBoxDialogo';
import { ContentCardDialogoTitle } from '../ContentCardDialogoTitle';
import { ContainerSBItensModMn } from '../sidebar/ContainerSBItensModMn';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton';
import { PageModal } from './PageModal';

const Resgatar: React.FC = () => {
  const [mdlog, setMdlog] = useState(0);
  const [nmlog, setNmlog] = useState('');
  const [boolstart, setBoolStart] = useState(false);
  const [boolmail, setBoolMail] = useState(false);
  const [boolcell, setBoolCell] = useState(false);
  const [boolresp, setBoolResp] = useState(false);
  const [btncontinua, setBtnContinua] = useState(false);
  const [boolconf, setBoolConf] = useState(false);
  const [btnconfirma, setBtnConfirma] = useState(false);
  const [idempr, setIdEmpr] = useState(0);
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [cell, setCell] = useState('');
  const [perg1, setPerg1] = useState('Qual o Veículo que mais gosta ?');
  const [resp1, setResp1] = useState('');
  const [perg2, setPerg2] = useState('Qual o Nome que você acha bonito ?');
  const [resp2, setResp2] = useState('');
  const [perg3, setPerg3] = useState('Que animal você mais gosta ?');
  const [resp3, setResp3] = useState('');
  const [msgerro, setMsgErro] = useState('');
  const [boolerro, setBoolErro] = useState(false);

  const DescrOpc = [
    'Opções:',
    'E-mail.',
    'E-mail Resgate',
    'Celular via SMS.',
    'Celular via Whatsapp.',
    'Peguntas.',
  ];

  const [theme, setTheme] = useState(light);
  const [ischeck, setIscheck] = useState(false);
  const ToggleTheme = () => {
    if (theme.name === 'dark') {
      setTheme(light);
      setIscheck(true);
    } else {
      setTheme(dark);
      setIscheck(false);
    }
  };

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const [logoRes, setLogoRes] = useState(false);
  const handlerLogoRes = useCallback(() => {
    setLogoRes((oldState) => !oldState);
  }, []);

  const [helppageres, setHelpPageRes] = useState(false);
  const handlerHelpPageRes = useCallback(() => {
    setHelpPageRes((oldState) => !oldState);
  }, []);

  useEffect(() => {
    setBoolStart(true);
    const newNmlog = DescrOpc[mdlog];
    setNmlog(newNmlog);
    if (boolstart) {
      if (!nmlog || idempr === 0 || !cpf) {
        if (!nmlog) {
          setMsgErro('Erro... Falta informar: Modo para Resgate');
        } else if (idempr === 0) {
          setMsgErro('Erro... Falta informar: Empresa para Resgate');
        } else if (cpf === '') {
          setMsgErro('Erro... Falta informar: C.P.F. para Resgate');
        } else {
          if (!isCpfValid(cpf)) {
            setMsgErro('Erro...C.P.F. informado não é Coerênte...[' + cpf + '].');
          } else {
            if (!isExistsCPF(cpf)) {
              setMsgErro('Erro...CPF informado é INVÁLIDO...[' + cpf + '].');
            };
          };
        };
        if (msgerro !== '') {
          setBoolErro(true);
        } else {
          setMsgErro('');
          setBoolErro(false);
          setBtnContinua(true);
        }
      }
    } else {
      if (mdlog >= 1 && mdlog <= 5) {
        if (mdlog === 1 || mdlog === 2) {
          setBoolStart(false);
          setBoolMail(true);
        } else if (mdlog === 3 || mdlog === 4) {
          setBoolStart(false);
          setBoolCell(true);
        } else if (mdlog === 5) {
          setBoolStart(false);
          setBoolResp(true);
        };
        setBtnContinua(true);
      };
    }
  }, [boolstart, mdlog]);

  // Clique no botão "Continuar"
  const handlerBtnContinua = () => {
    setBtnContinua(false);
    setMsgErro('');
    setBoolStart(false);
    if (msgerro === '') {
      if (mdlog === 1 || mdlog === 2) {
        
        if (!isValidarEmail(email)) {
          if (mdlog === 1) {
            setMsgErro('Erro na Edição do Email Titular, ou Inválido...');
          } else {
            setMsgErro('Erro na Edição do Email Resgate, ou Inválido...');
          }
          setEmail('');
          setBoolErro(true);
        } else if (msgerro === '') {
          setBoolStart(false);
          setBoolMail(false);
          setBoolCell(false);
          setBoolResp(false);
          setBtnConfirma(true);
        };
      } else if (mdlog === 3 || mdlog === 4) {
        if (!isValidarCell(cell)) {
          if (mdlog === 3) {
            setMsgErro('Erro na Edição do Nº Celular SMS, ou Inválido...');
          } else {
            setMsgErro('Erro na Edição do Nº Celular Whatsapp, ou Inválido...');
          }
          setCell('');
          setBoolErro(true);
        }
        if (msgerro === '') {
          setBoolStart(false);
          setBoolMail(false);
          setBoolCell(false);
          setBoolResp(false);
          setBtnConfirma(true);
        }
      } else if (mdlog === 5) {
        if (!resp1 || !resp2 || !resp3) {
          setMsgErro('Erro...Faltando respostas às perguntas de segurança.');
          setBoolErro(true);
        } else {
          setBtnConfirma(true);
        }
      }
    }
  };

  const handlerConfirmar = () => {
    alert('Confirmar...');
  };

  return (
    <ThemeProvider theme={theme}>
      <LayoutResgatar
        imgsys={lg_resgate}
        titbtnsys="Home Sistema..."
        onclicksys={handlerLogoRes}
        titlepg="Resgatar"
        imgbtnhlppg={bt_help}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerHelpPageRes}
        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={goto('/')}
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        {boolstart ? (
          <ContentCardPageMain open={boolstart}>
            <ContentCardBoxDialogo>
              <ContentCardDialogoTitle>
                <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
              </ContentCardDialogoTitle>
              <div>
                <h4>1º - Passo: </h4>
                <p>
                  &emsp;Precisamos que nos indique a empresa e maneira pelo qual
                  deseja resgatar e o seu C.P.F.
                </p>
              </div>
              <ContentCardPage pwidth="100%">
                <ContentCardPageTitle>
                  <h2>Opções para Resgate.</h2>
                </ContentCardPageTitle>
                <Pg.SelectContainer>
                  <label htmlFor="resgate-select">Selecione Opção :</label>
                  <Pg.StyledSelect
                    id="resgate-select"
                    name="opcao"
                    defaultValue={mdlog}
                    onChange={(e) => setMdlog(parseInt(e.target.value))}
                  >
                    <Pg.StyledOption value={0}>Opções:</Pg.StyledOption>
                    <Pg.StyledOption value={1}>E-mail.</Pg.StyledOption>
                    <Pg.StyledOption value={2}>E-mail Resgate.</Pg.StyledOption>
                    <Pg.StyledOption value={3}>
                      Celular via SMS.
                    </Pg.StyledOption>
                    <Pg.StyledOption value={4}>
                      Celular via Whatsapp.
                    </Pg.StyledOption>
                    <Pg.StyledOption value={5}>Perguntas.</Pg.StyledOption>
                  </Pg.StyledSelect>
                </Pg.SelectContainer>
                <Pg.SelectContainer>
                  <label htmlFor="resgate-select">Selecione Empresa :</label>
                  <Pg.StyledSelect
                    id="empresa-select"
                    name="empresa"
                    defaultValue={idempr}
                    onChange={(e) => setIdEmpr(parseInt(e.target.value))}
                  >
                    <Pg.StyledOption value={0}>Opções:</Pg.StyledOption>
                    <Pg.StyledOption value={1}>Jr.Bordados.</Pg.StyledOption>
                    <Pg.StyledOption value={2}>Rb-Serviços.</Pg.StyledOption>
                  </Pg.StyledSelect>
                </Pg.SelectContainer>
                <form>
                  <Pg.ContainerCardBoxInput>
                    <label htmlFor="resgate-select"> Edite C.P.F. :</label>
                    <Pg.CpfInput
                      id="cpf"
                      placeholder="Digite o seu C.P.F."
                      defaultValue={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                    />
                  </Pg.ContainerCardBoxInput>
                </form>
              </ContentCardPage>
            </ContentCardBoxDialogo>
          </ContentCardPageMain>
        ) : null}

        {boolmail ? (
          <ContentCardPageMain open={boolmail}>
            <ContentCardBoxDialogo>
              <ContentCardDialogoTitle>
                <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
              </ContentCardDialogoTitle>
              <div>
                <h4>2º - Passo: </h4>
                <p>&emsp;Precisamos que nos indique um Email para Resgate.</p>
              </div>
            </ContentCardBoxDialogo>
            <ContentCardPage pwidth="30%">
              <ContentCardPageTitle>
                <h2>Email para Resgate.</h2>
              </ContentCardPageTitle>
              <form>
                <label htmlFor="resgate-email">Email:</label>
                <Pg.EmailInput
                  id="email"
                  placeholder="Digite seu email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div>{msgerro}</div>
              </form>
            </ContentCardPage>
          </ContentCardPageMain>
        ) : null}

        {boolcell ? (
          <ContentCardPageMain open={boolmail}>
            <ContentCardBoxDialogo>
              <ContentCardDialogoTitle>
                <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
              </ContentCardDialogoTitle>
              <div>
                <h4>3º - Passo: </h4>
                <p>
                  &emsp;Precisamos que nos indique Nº Fone-Celular para Resgate.
                </p>
              </div>
            </ContentCardBoxDialogo>
            <ContentCardPage pwidth="30%">
              <ContentCardPageTitle>
                <h2>Nº do Celular para Resgate.</h2>
              </ContentCardPageTitle>
              <form>
                <label htmlFor="resgate-fone">Nº Fone-Celular:</label>
                <Pg.EmailInput
                  id="fone"
                  placeholder="Digite seu Nº Fone-Celular"
                  defaultValue={cell}
                  onChange={(e) => setCell(e.target.value)}
                />
                <div>{msgerro}</div>
              </form>
            </ContentCardPage>
          </ContentCardPageMain>
        ) : null}

        {boolresp ? (
          <ContentCardPageMain open={boolresp}>
            <ContentCardBoxDialogo>
              <ContentCardDialogoTitle>
                <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
              </ContentCardDialogoTitle>
              <div>
                <h4>4º - Passo: </h4>
                <p>&emsp;Precisamos das Respostas para Resgate.</p>
              </div>
            </ContentCardBoxDialogo>
            <ContentCardPage>
              <ContentCardPageTitle>
                <h2>Respostas para Resgate.</h2>
              </ContentCardPageTitle>
              <form>
                <label htmlFor="perg-1"> 1º Pergunta: {perg1}.</label>
                <Pg.EmailInput
                  id="perg1"
                  placeholder="Digite a sua Respósta"
                  defaultValue={resp1}
                  onChange={(e) => setResp1(e.target.value)}
                />
                <div>{msgerro}</div>
              </form>
              <form>
                <label htmlFor="perg-2"> 2º Pergunta: {perg2}.</label>
                <Pg.EmailInput
                  id="perg2"
                  placeholder="Digite a sua Respósta"
                  defaultValue={resp2}
                  onChange={(e) => setResp2(e.target.value)}
                />
                <div>{msgerro}</div>
              </form>
              <form>
                <label htmlFor="perg-3"> 3º Pergunta: {perg3}.</label>
                <Pg.EmailInput
                  id="perg3"
                  placeholder="Digite a sua Respósta"
                  defaultValue={resp3}
                  onChange={(e) => setResp3(e.target.value)}
                />
                <div>{msgerro}</div>
              </form>
            </ContentCardPage>
          </ContentCardPageMain>
        ) : null}

        {boolconf ? <h1>Confirmação</h1> : null}

        <Pg.DivisionPgHztal />

        <ContainerSBItensModMn onoff={true}>
          <ContentSidePageBottonLabel istitl={true} title={'Voltar.: '}>
            <ContentSidePageBottonButton
              pxheight={'40px'}
              img={bt_setaesq}
              titbtn={'Volta...'}
              onclick={goto('/')}
            />
          </ContentSidePageBottonLabel>

          {btncontinua ? (
            <ContentSidePageBottonLabel istitl={true} title={'Continuar ? '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={bt_setadir}
                titbtn={'Continuar...'}
                onclick={handlerBtnContinua}
              />
            </ContentSidePageBottonLabel>
          ) : null}

          {btnconfirma ? (
            <ContentSidePageBottonLabel
              istitl={btnconfirma}
              title={'Confirmar ?'}
            >
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={bt_setadir}
                titbtn={'Confirmar...'}
                onclick={handlerConfirmar}
              />
            </ContentSidePageBottonLabel>
          ) : null}
        </ContainerSBItensModMn>

        {boolerro ? (
          <PageModal
            ptop={'1%'}
            pwidth={'40%'}
            pheight={'45%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'ERRO....'}
            onclose={() => setBoolErro(false)}
          >
            <CardModalErro pminheight="100px" pwidth="200px">
              {msgerro}
            </CardModalErro>
          </PageModal>
        ) : null}

        {logoRes ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Home Sistema.'}
            onclose={() => setLogoRes(false)}
          >
            <CardHlpResgateLogo
              imgcardlogo={lg_resgate}
              onclosesair={() => setLogoRes(false)}
            />
          </PageModal>
        ) : null}

        {helppageres ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Home.'}
            onclose={() => setHelpPageRes(false)}
          >
            <CardHlpResgatePage
              imgcardresg={lg_resgate}
              onclosesair={() => setHelpPageRes(false)}
            />
          </PageModal>
        ) : null}
      </LayoutResgatar>
    </ThemeProvider>
  );
};

export default Resgatar;
