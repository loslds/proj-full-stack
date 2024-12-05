import React from 'react';
///
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
import { useNavigate } from 'react-router-dom';

import LayoutHome from '../layouts/LayoutHome';
import { PageModal } from './PageModal';
import { ContentItensBody } from '../ContentItensBody';
import { ContentCustonImgPage } from '../ContentCustonImgPage';

import logo_sys from '../../assets/svgs/logo_sys.svg';
import bt_help from '../../assets/svgs/bt_help.svg';
import bt_close from '../../assets/svgs/bt_close.svg';
import bt_avatar from '../../assets/svgs/bt_avatar.svg';
import bt_resgate from '../../assets/svgs/bt_resgate.svg';
import lg_negado from '../../assets/svgs/lg_negado.svg';

import { CardHomeSys } from '../../cards/CardHomeSys';
import { CardHomePg } from '../../cards/CardHomePg';
import { CardAcessoNeg } from '../../cards/CardAcessoNeg' ;

import avatar001 from '../../../assets/pngs/avatares/avatar001.png';
import negado from '../../../assets/svgs/negado.svg';
import recepcao from '../../../assets/svgs/servicos.svg';
import design from '../../../assets/svgs/design.svg';
import producao from '../../../assets/svgs/producao.svg';
import acabamento from '../../../assets/svgs/acabamento.svg';
import expedicao from '../../../assets/svgs/expedicao.svg';
import administra from '../../../assets/svgs/administracao.svg';
import master from '../../../assets/svgs/master.svg';
import config from '../../../assets/svgs/config.svg';

import jr_circ from '../../assets/svgs/jr_circ.svg';

const Home = () => {
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

  const [logado, setLogado] = React.useState(false);
  const [callmodulo, setCallModulo] = React.useState('');

  const goto = (path: string) => {
    setCallModulo(path);

    if (!logado && (callmodulo === '/login' || callmodulo === '/resgate')) {
      return () => {
        navigate(path);
      };
    } else {
      if (logado) { 
        if ( callmodulo === 'Visitante' || callmodulo === 'Master') {
          path = '/visitante';
        } else if ( callmodulo === 'Recepção' || callmodulo === 'Master') {
          path = '/recepcao';
        } else if ( callmodulo === 'Design' || callmodulo === 'Master') {
          path = '/design';
        } else if ( callmodulo === 'Produção' || callmodulo === 'Master') {
          path = '/producao';
        } else if ( callmodulo === 'Acabamento' || callmodulo === 'Master') {
          path = '/acabamento';
        } else if ( callmodulo === 'Expedição' || callmodulo === 'Master') {
          path = '/expedicao';
        } else if ( callmodulo === 'Administração' || callmodulo === 'Master') {
          path = '/administacao';
        } else if ( callmodulo === 'Config' || callmodulo === 'Master') {
          path = '/config';
        };
        return () => {
          navigate(path);
        };
      };
    };
  };

  const [logoSys, setLogoSys] = React.useState(false);
    const handlerLogoSys = React.useCallback(() => {
    setLogoSys((oldState) => !oldState);
  }, []);

  const [helppage, setHelpPage] = React.useState(false);
  const handlerHelpPage = React.useCallback(() => {
    setHelpPage((oldState) => !oldState);
  }, []);

  const [mainhelp, setMainHelp] = React.useState(false);

  


  return (
    <ThemeProvider theme={theme}>
      <LayoutHome
        imgsys={logo_sys}
        titbtnsys="Home..."
        onclicksys={handlerLogoSys}
        titlepg="Home"
        imgbtnhlppg={bt_help}
        titbtnhlppg="Help Page."
        onclickhlppg={handlerHelpPage}
        imgbtnopen={bt_avatar}
        titbtnopen="Login..."
        onclickopen={() => {}}
        imgbtnreg={bt_resgate}
        titbtnreg="botaoResgate"
        onclickreg={goto('/resgate')}
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <ContentItensBody>
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            imgbtn={''}
            titlebtn={'Visitante...'}
            onclick={ logado ? (goto('/visitante')) : (() => setMainHelp(true))}
          />


          {logoSys ? (
            <PageModal
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'90%'}
              imgbm={bt_close}
              titbm="Fechar..."
              titulo={'Help Home Sistema.'}
              onclose={() => setLogoSys(false)}
            >
              <CardHomeSys imgcardsys={jr_circ} />
            </PageModal>
          ) : null}
        
        <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            imgbtn={lg_recepcao}
            titlebtn={'Recepção.'}
            onclick={goto('/recepcao')}
          />        


          {helppage ? (
            <PageModal
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'90%'}
              imgbm={bt_close}
              titbm="Fechar..."
              titulo={'Help Conteúdo Home.'}
              onclose={() => setHelpPage(false)}
            >
              <CardHomePg imgcardpg={logo_sys} />
            </PageModal>
          ) : null}
          
          {mainhelp ? (
            <PageModal
              ptop="111px"
              pwidth="30%"
              pheight="25%"
              titulo='" A T E N Ç Ã O "'
              imgbm={bt_close}
              titbm="Fechar..."
              onclose={() => {
                setMainHelp(false);
              }}
            >
              <CardAcessoNeg imgcardneg={lg_negado} />
            </PageModal>
          ) : null}
        </ContentItensBody>
      </LayoutHome>
    </ThemeProvider>
  );
};

export default Home;
