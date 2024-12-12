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

import {
  isValidarEmail,
  isValidarCell,
  isValidarCpf,
  VerPergResp,
} from '../../funcs/ErroEdicao';
import { ContentCardPageMain } from '../ContentCardPageMain';
import { ContentCardPage } from '../ContentCardPage';
import { ContentCardPageTitle } from '../ContentCardPageTitle';
import { ContentCardBoxDialogo } from '../ContentCardBoxDialogo';
import { ContentCardDialogoTitle } from '../ContentCardDialogoTitle';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton';

//import { ContentCardBoxPageCenter } from '../ContentCardBoxPageCenter';

//import bt_visitante from '../../assets/svgs/bt_visitante.svg';

import { PageModal } from './PageModal';

const Resgatar: React.FC = () => {
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

  const [mdlog, setMdlog] = useState(0);
  const [nmlog, setNmlog] = useState('');
  const [boolstart, setBoolStart] = useState(false);
  const [boolmail, setBoolMail] = useState(false);
  const [boolcell, setBoolCell] = useState(false);
  const [boolresp, setBoolResp] = useState(false);
  const [boolConf, setBoolConf] = useState(false);

  const [proxmd, setProxMd] = useState(false);
  const [confirma, setConfirma] = useState(false);
  const [idempr, setIdEmpr] = useState(0);
  const [cpf, setCpf] = useState('');

  const [nmempr, setNmEmpr] = useState('');
  const [email, setEmail] = useState('');
  const [cell, setCell] = useState('');

  const [perg1, setPerg1] = useState('Qual o Veículo que mais gosta ?');
  const [resp1, setResp1] = useState('');
  const [perg2, setPerg2] = useState('Qual o Nome que você acha bonito ?');
  const [resp2, setResp2] = useState('');
  const [perg3, setPerg3] = useState('Que animal você mais gosta ?');
  const [resp3, setResp3] = useState('');

  const [msgerro, setMsgErro] = useState('');

  const DescrOpc = [
    'Opções:',
    'E-mail.',
    'E-mail Resgate',
    'Celular via SMS.',
    'Celular via Whatsapp.',
    'Peguntas.',
  ];

  useEffect(() => {
    setNmlog(DescrOpc[mdlog]);
    if (mdlog === 0 || idempr === 0 || cpf === '') {
      setBoolStart(true);
      setProxMd(false);
    } else {
      if (mdlog === 0 && idempr > 0 && cpf !== '') {
        setProxMd(true);
      } else if ((mdlog === 1 || mdlog === 2) && email !== '') {
        setBoolStart(false);
        setBoolMail(true);
        setProxMd(true);
      } else if ((mdlog === 3 || mdlog === 4) && cell !== '') {
        setBoolMail(false);
        setBoolCell(true);
        setProxMd(true);
      } else if (mdlog === 5 && resp1 !== '' && resp2 !== '' && resp3 !== '') {
        setBoolCell(false);
        setBoolResp(true);
        setProxMd(false);
      } else if (mdlog === 6) {
        setBoolResp(false);
        setBoolConf(true);
        setConfirma(true);
      }
    }
  }, [mdlog, proxmd, idempr, cpf, email, cell, resp1, resp2, resp3]);

  const handlerButtonProximo = useCallback(() => {
    setMsgErro('');
    if (mdlog === 0) {
      if (!isValidarCpf(cpf)) {
        setMsgErro('Erro na Edição do CPF, ou Inválido...');
      } else {
        setMdlog(1);
      }
    } else if (mdlog === 1 || mdlog === 2) {
      if (!isValidarEmail(email)) {
        setMsgErro('Erro na Edição do email, ou Inválido...');
      } else {
        setMdlog(3);
      }
    } else if (mdlog === 3 || mdlog === 4) {
      if (!isValidarCell(cell)) {
        setMsgErro('Erro na Edição do Nº Telefone, ou Inválido...');
      } else {
        setMdlog(5);
      }
    } else if (mdlog === 5) {
      if (resp1 === '' || resp2 === '' || resp3 === '') {
        if (resp1 === '') {
          setMsgErro('Erro, Responda Pergunta...');
        } else if (resp2 === '') {
          setMsgErro('Erro, Responda Pergunta...');
        } else if (resp3 === '') {
          setMsgErro('Erro, Responda Pergunta...');
        }
      } else {
        if (resp1 !== '') {
          if (!VerPergResp(perg1, resp1)) {
            setMsgErro('Erro, Resposta errada...');
          }
        } else if (resp2 !== '') {
          if (!VerPergResp(perg2, resp2)) {
            setMsgErro('Erro, Resposta errada...');
          }
        } else if (resp3 !== '') {
          if (!VerPergResp(perg3, resp3)) {
            setMsgErro('Erro, Resposta errada...');
          }
        }
      }
    } else if (mdlog === 6) {
      setMdlog(6);
    }
  }, []);

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
                  <label htmlFor="resgate-select"> Edite C.P.F. :</label>
                  <Pg.CpfInput
                    id="cpf"
                    placeholder="Digite o seu C.P.F."
                    defaultValue={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                  <div>{msgerro}</div>
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

        <Pg.DivisionPgHztal />

        <ContentSidePageBottonLabel istitl={true} title={'Voltar.: '}>
          <ContentSidePageBottonButton
            pxheight={'40px'}
            img={bt_setaesq}
            titbtn={'Volta...'}
            onclick={goto('/')}
          />
        </ContentSidePageBottonLabel>
        {proxmd ? (
          <ContentSidePageBottonLabel istitl={true} title={'Proximo ? '}>
            <ContentSidePageBottonButton
              pxheight={'40px'}
              img={bt_setadir}
              titbtn={'Próximo...'}
              onclick={handlerButtonProximo}
            />
          </ContentSidePageBottonLabel>
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
