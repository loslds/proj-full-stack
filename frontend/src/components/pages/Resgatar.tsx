import React from 'react';

import * as Md from '../../modal/stylesModal';
import * as Pg from '../stylePages';

import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import { useNavigate } from 'react-router-dom';
import LayoutResgatar from '../layouts/LayoutResgatar';
import lg_resgate from '../../assets/svgs/lg_resgate.svg';
import bt_help from '../../assets/svgs/bt_help.svg';
import bt_abortar from '../../assets/svgs/bt_abortar.svg';
import bt_resgate from '../../assets/svgs/bt_resgate.svg';
import bt_close from '../../assets/svgs/bt_close.svg';

import { CardHlpResgateLogo } from '../../cards/CardHlpResgateLogo';
import { CardHlpResgatePage } from '../../cards/CardHlpResgatePage';

import { ContentCardPageMain } from '../ContentCardPageMain';

import { ContentCardPage } from '../ContentCardPage';
import { ContentCardPageTitle } from '../ContentCardPageTitle';
import { ContentCardBoxDialogo } from '../ContentCardBoxDialogo';
import { ContentCardDialogoTitle } from '../ContentCardDialogoTitle';

import { ContentItensBody } from '../ContentItensBody';

import { ContentCardBoxBorderPg } from '../ContentCardBoxBorderPg';
import { ContentCardBoxTitle } from '../ContentCardBoxTitle';
//import { ContentCardBoxPageCenter } from '../ContentCardBoxPageCenter';
import { CardModalTextoColumn } from '../../modal/CardModalTextoColumn';

import bt_visitante from '../../assets/svgs/bt_visitante.svg';

import { PageModal } from './PageModal';

const Resgatar: React.FC = () => {
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);
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

  const [logoRes, setLogoRes] = React.useState(false);
  const handlerLogoRes = React.useCallback(() => {
    setLogoRes((oldState) => !oldState);
  }, []);

  const [helppageres, setHelpPageRes] = React.useState(false);
  const handlerHelpPageRes = React.useCallback(() => {
    setHelpPageRes((oldState) => !oldState);
  }, []);

  const [passo1, setPasso1] = React.useState(true);
  const [passo2, setPasso2] = React.useState(false);
  const [passo3, setPasso3] = React.useState(false);
  const [msgerro, setMsgErro] = React.useState('');

  const [btnabortar, setBtnAbortar] = React.useState(true);
  const [btncontinua, setBtnContinua] = React.useState(false);
  const [opcaores, setOpcaoRes] = React.useState(0);
  const [descropcaores, setDescrOpcaoRes] = React.useState('');
  const DescrOpc = [
    'Opções:',
    'E-mail.',
    'E-mail Resgate',
    'Celular via SMS.',
    'Celular via Whatsapp.',
    'Peguntas.',
  ];
  const [opcemail, setOpcEmail] = React.useState('');
  const [opcidempr, setOpcIdEmpr] = React.useState(0);
  const [opcnmempr, setOpcNmEmpr] = React.useState('');

  const handleValidationMail = () => {
    const isValidEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (passo2) {
      if (isValidEmail(opcemail)) {
        setPasso2(false);
        setPasso3(true);
        setBtnContinua(true);
        setMsgErro('Sucesso!');
      } else {
        setMsgErro('Erro de Edição do Email...');
        setBtnContinua(false);
      }
    }
  };

  React.useEffect(() => {
    setDescrOpcaoRes(DescrOpc[opcaores]);
    if (opcaores === 0) {
      setPasso1(true);
      setPasso2(false);
      setPasso3(false);
      setOpcEmail('');
      setOpcIdEmpr(0);
      setOpcNmEmpr('');
      setBtnContinua(false);
    }
    if (passo1) {
      if (opcaores > 0) {
        setPasso1(false);
        setPasso2(true);
        setBtnContinua(true);
      } else {
        setBtnContinua(false);
      }
    }
    if (passo2) {
      handleValidationMail();
    }
    if (passo3) {
    }
  }, [opcaores, descropcaores, opcemail, btncontinua, passo1, passo2, passo3]);

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
        <ContentCardPageMain open={true}>
          <ContentCardBoxDialogo>
            <ContentCardDialogoTitle>
              <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
            </ContentCardDialogoTitle>
            {passo1 && opcaores === 0 ? (
              <div>
                <h4>1º - Passo: </h4>
                <p>
                  &emsp;Precisamos que nos indique a maneira pelo qual deseja
                  resgatar.
                </p>
              </div>
            ) : null}
            {passo2 ? (
              <div>
                <h4>2º - Passo: </h4>
                <p>&emsp;Precisamos que nos indique um Email para Resgate.</p>
              </div>
            ) : null}
          </ContentCardBoxDialogo>
          <ContentCardPage pwidth="30%">
            <ContentCardPageTitle>
              <h2>Opções para Resgate.</h2>
            </ContentCardPageTitle>
            {passo1 && opcaores === 0 ? (
              <Pg.SelectContainer>
                <label htmlFor="resgate-select">Selecione uma opção:</label>
                <Pg.StyledSelect
                  id="resgate-select"
                  name="opcao"
                  defaultValue={opcaores}
                  onChange={(e) => setOpcaoRes(parseInt(e.target.value))}
                >
                  <Pg.StyledOption value={0}>Opções:</Pg.StyledOption>
                  <Pg.StyledOption value={1}>E-mail.</Pg.StyledOption>
                  <Pg.StyledOption value={2}>E-mail Resgate.</Pg.StyledOption>
                  <Pg.StyledOption value={3}>Celular via SMS.</Pg.StyledOption>
                  <Pg.StyledOption value={4}>
                    Celular via Whatsapp.
                  </Pg.StyledOption>
                  <Pg.StyledOption value={5}>Perguntas.</Pg.StyledOption>
                </Pg.StyledSelect>
              </Pg.SelectContainer>
            ) : null}
            {passo2 && (opcaores >= 1 || opcaores <= 2) ? (
              <form>
                <label htmlFor="resgate-email">Email:</label>
                <Pg.EmailInput
                  id="email"
                  placeholder="Digite seu email"
                  onChange={(e) => setOpcEmail(e.target.value)}
                />
                <div>{msgerro}</div>
              </form>
            ) : null}
          </ContentCardPage>
        </ContentCardPageMain>

        <Pg.DivisionPgHztal />

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

{
  /*
   <ContentCardBoxDialogo>
<ContentCardDialogoTitle>
  <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
</ContentCardDialogoTitle>
<h4>1º - Passo: </h4>
<p>
  &emsp;Precisamos que nos indique a maneira pelo qual deseja resgatar.
</p>
</ContentCardBoxDialogo>

<ContentCardPage pwidth="30%">
<ContentCardPageTitle>
  <h2>Opções para Resgate.</h2>
</ContentCardPageTitle>
<Pg.SelectContainer>
  <label htmlFor="resgate-select">Selecione uma opção:</label>
  <Pg.StyledSelect
    id="resgate-select"
    name="opcao"
    defaultValue={opcaores}
    onChange={(e) => setOpcaoRes(parseInt(e.target.value))}
  >
    <Pg.StyledOption value={0}>Opções:</Pg.StyledOption>
    <Pg.StyledOption value={1}>E-mail.</Pg.StyledOption>
    <Pg.StyledOption value={2}>E-mail Resgate.</Pg.StyledOption>
    <Pg.StyledOption value={3}>Celular via SMS.</Pg.StyledOption>
    <Pg.StyledOption value={4}>Celular via Whatsapp.</Pg.StyledOption>
    <Pg.StyledOption value={5}>Perguntas.</Pg.StyledOption>
  </Pg.StyledSelect>
</Pg.SelectContainer>
</ContentCardPage>
<Pg.DivisionPgHztal />
<ContentCardBoxDialogo>
<ContentCardDialogoTitle>
  <h3>Acione em CONTINUAR, ou ABORTE Resgate.</h3>
</ContentCardDialogoTitle>
<ContentCardPage pwidth="100px">aaaa</ContentCardPage>
</ContentCardBoxDialogo> 
*/
}

// <Pg.ContainerCardBoxBorderPg>

// <h3>Ok, estamos pronto para Resgatar o seu acesso ao Sistema.</h3>
// <br />
// <p>
//   Estamos pronto para iniciar o seu acesso. Precisamos que nos
//   indique a maneira pelo qual deseja resgatar.
// </p>

// </Pg.ContainerCardBoxBorderPg>

// <Pg.ContainerCardBoxColumnPg>
// <Pg.ContainerCardBoxColumnPgFlex>
//   <ContentCardBoxBorderPg pwidth="200px">
//     <ContentCardBoxTitle>
//       <h4>{'Modo de Resgate'}</h4>
//     </ContentCardBoxTitle>
//     <Pg.SelectContainer>
//       <label htmlFor="resgate-select">Selecione uma opção:</label>
//       <Pg.StyledSelect
//         id="resgate-select"
//         name="opcao"
//         defaultValue={opcoesres}
//         onChange={(e) => setOpcoesRes(parseInt(e.target.value))}
//       >
//         <Pg.StyledOption value={0}>Opções:</Pg.StyledOption>
//         <Pg.StyledOption value={1}>E-mail.</Pg.StyledOption>
//         <Pg.StyledOption value={2}>E-mail Resgate.</Pg.StyledOption>
//         <Pg.StyledOption value={3}>
//           Celular via SMS.
//         </Pg.StyledOption>
//         <Pg.StyledOption value={4}>
//           Celular via Whatsapp.
//         </Pg.StyledOption>
//         <Pg.StyledOption value={5}>Perguntas.</Pg.StyledOption>
//       </Pg.StyledSelect>
//     </Pg.SelectContainer>
//   </ContentCardBoxBorderPg>

//   <ContentCardBoxBorderPg pwidth="200px">
//     <ContentCardBoxTitle>
//       <h4>{'Modo de Edição'}</h4>
//     </ContentCardBoxTitle>
//     <Pg.SelectContainer>
//       <label htmlFor="resgate-select">Selecione uma opção:</label>
//       <Pg.StyledSelect
//         id="resgate-select"
//         name="opcao"
//         defaultValue={opcoesres}
//         onChange={(e) => setOpcoesRes(parseInt(e.target.value))}
//       >
//         <Pg.StyledOption value={0}>Opções:</Pg.StyledOption>
//         <Pg.StyledOption value={1}>E-mail.</Pg.StyledOption>
//         <Pg.StyledOption value={2}>E-mail Resgate.</Pg.StyledOption>
//         <Pg.StyledOption value={3}>
//           Celular via SMS.
//         </Pg.StyledOption>
//         <Pg.StyledOption value={4}>
//           Celular via Whatsapp.
//         </Pg.StyledOption>
//         <Pg.StyledOption value={5}>Perguntas.</Pg.StyledOption>
//       </Pg.StyledSelect>
//     </Pg.SelectContainer>
//   </ContentCardBoxBorderPg>

//   <ContentCardBoxBorderPg pwidth="200px">
//     asasasa
//   </ContentCardBoxBorderPg>
// </Pg.ContainerCardBoxColumnPgFlex>
// </Pg.ContainerCardBoxColumnPg>

// <SelectContainer>
//   <label htmlFor="resgate-select">Selecione uma opção:</label>
//   <StyledSelect
//     id="resgate-select"
//     name="opcao"
//     defaultValue={opcoesres}
//     onChange={(e) => setOpcoesRes(parseInt(e.target.value))}
//   >
//     <StyledOption value={0}>Opções:</StyledOption>
//     <StyledOption value={1}>E-mail.</StyledOption>
//     <StyledOption value={2}>E-mail Resgate.</StyledOption>
//     <StyledOption value={3}>Celular via SMS.</StyledOption>
//     <StyledOption value={4}>Celular via Whatsapp.</StyledOption>
//     <StyledOption value={5}>Perguntas.</StyledOption>
//   </StyledSelect>
// </SelectContainer>
