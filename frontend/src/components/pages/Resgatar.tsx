import React from 'react';

import * as Md from '../../modal/stylesModal';
import * as Pg from '../stylePages';

import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import { useNavigate } from 'react-router-dom';
import LayoutResgatar from '../layouts/LayoutResgatar';
import lg_sys from '../../assets/svgs/lg_sys.svg';
import bt_help from '../../assets/svgs/bt_help.svg';
import bt_abortar from '../../assets/svgs/bt_abortar.svg';
import bt_resgate from '../../assets/svgs/bt_resgate.svg';
import bt_close from '../../assets/svgs/bt_close.svg';

//import { CardHomeSys } from '../../cards/CardHlpHomePage';
//import { CardHomePg } from '@/cards/CardHlpHomeLogo';

import { ContentCardPage } from '../ContentCarPage';
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

  const [helppageRes, setHelpPageRes] = React.useState(false);
  const handlerHelpPageRes = React.useCallback(() => {
    setHelpPageRes((oldState) => !oldState);
  }, []);

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

  React.useEffect(() => {
    setDescrOpcaoRes(DescrOpc[opcaores]);
    if (opcaores === 0) {
      setBtnContinua(false);
    } else {
      setBtnContinua(true);
    };
  }, [opcaores, descropcaores]);    
    
  return (
    <ThemeProvider theme={theme}>
      <LayoutResgatar
        imgsys={lg_sys}
        titbtnsys="Home Sistema..."
        onclicksys={handlerLogoRes}
        titlepg="Resgatar"
        imgbtnhlppg={bt_help}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerHelpPageRes}
        imgbtnopen={bt_abortar}
        titbtnopen="Abortar..."
        onclickopen={goto('/')}
        //        imgbtnreg={bt_resgate}
        //        titbtnreg="Resgatar Acesso..."
        //        onclickreg={() => {}}
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <ContentCardBoxDialogo>
          <ContentCardDialogoTitle>
            <h3>Ok, pronto para Resgatar o seu acesso ao Sistema?'</h3>
          </ContentCardDialogoTitle>
          <p> Precisamos que nos indique a maneira pelo qual deseja resgatar.</p>
        </ContentCardBoxDialogo>
        <ContentCardPage pwidth='30%'>
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
          <ContentCardPage pwidth='100px'>
            aaaa
          </ContentCardPage>
        </ContentCardBoxDialogo>
      </LayoutResgatar>
    </ThemeProvider>
  );
};

export default Resgatar;

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
