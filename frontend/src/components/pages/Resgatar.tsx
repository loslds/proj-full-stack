import React from 'react';

import * as Md from '../../modal/stylesModal';
import { SelectContainer, StyledSelect, StyledOption } from '../stylePages';

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

import { CardHomeSys } from '../../cards/CardHomeSys';
import { CardHomePg } from '@/cards/CardHomePg';

import { ContentItensBody } from '../ContentItensBody';
import { ContentCardBoxCenterPage } from '../ContentCardBoxCenterPage';
import { ContentCardBoxTitle } from '../ContentCardBoxTitle';
import { ContentCardBoxInput } from '../ContentCardBoxInput';

import { ContentCustonImgPage } from '../ContentCustonImgPage';
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

  const [opcoesres, setOpcoesRes] = React.useState(0);
  const DescrOpc = [
    'Opções:',
    'E-mail.',
    'E-mail Resgate',
    'Celular via SMS.',
    'Celular via Whatsapp.',
    'Peguntas.',
  ];

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
        <ContentItensBody>
          <Md.ContainerInfoModalFlex>
            <h3>Ok, estamos pronto para Resgatar o seu acesso ao Sistema.</h3>
            <br />
            <p>Estamos pronto para iniciar o seu acesso.</p>
            <p>
              Precisamos que nos indique a maneira pelo qual deseja resgatar.
            </p>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardBoxTitle>
                <h4>{'Modo de Resgate'}</h4>
              </ContentCardBoxTitle>
              <ContentCardBoxInput>
                <SelectContainer>
                  <label htmlFor="resgate-select">Selecione uma opção:</label>
                  <StyledSelect
                    id="resgate-select"
                    name="opcao"
                    defaultValue={opcoesres}
                    onChange={(e) => setOpcoesRes(parseInt(e.target.value))}
                  >
                    <StyledOption value={0}>Opções:</StyledOption>
                    <StyledOption value={1}>E-mail.</StyledOption>
                    <StyledOption value={2}>E-mail Resgate.</StyledOption>
                    <StyledOption value={3}>Celular via SMS.</StyledOption>
                    <StyledOption value={4}>Celular via Whatsapp.</StyledOption>
                    <StyledOption value={5}>Perguntas.</StyledOption>
                  </StyledSelect>
                </SelectContainer>
              </ContentCardBoxInput>
            </ContentCardBoxCenterPage>
          </Md.ContainerInfoModalFlex>
        </ContentItensBody>
      </LayoutResgatar>
    </ThemeProvider>
  );
};

export default Resgatar;
