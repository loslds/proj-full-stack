import React from 'react';
///
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';

import LayoutHome from '../layouts/LayoutHome';
import { PageModal } from './PageModal';

import img_logosys from '../../assets/svgs/img_logosys.svg';
import bt_help from '../../assets/svgs/bt_help.svg';
import bt_close from '../../assets/svgs/bt_close.svg';

import resgatebtn from '../../../assets/svgs/resgatebtn.svg';
import jrjr from '../../../assets/svgs/jrjr.svg';
import avatar from '../../../assets/svgs/avatar.svg';
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
  const [logoSys, setLogoSys] = React.useState(false);
  const handlerLogoSys = React.useCallback(() => {
    setLogoSys((oldState) => !oldState);
  }, []);

  const [helppage, setHelpPage] = React.useState(false);
  const handlerHelpPage = React.useCallback(() => {
    setHelpPage((oldState) => !oldState);
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <LayoutHome
          imgsys={img_logosys}
          titbtnsys="Home..."
          onclicksys={handlerLogoSys}
          titlepg="Home"
          imgbtnhlppg={bt_help}
          titbtnhlppg="Help Page."
          onclickhlppg={handlerHelpPage}
          imgbtnopen={''}
          titbtnopen="botaoOpen"
          onclickopen={() => {}}
          imgbtnreg={''}
          titbtnreg="botaoResgate"
          onclickreg={() => {}}
          onchange={ToggleTheme}
          ischeck={ischeck}
        >
          <h1>Bem-vindo à Home</h1>
          
          {logoSys ? (
            <PageModal
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'90%'}
              imgbm={bt_close}
              titbm="Fechar..."
              titulo={'Help Conteúdo do Sistema.'}
              onclose={() => setLogoSys(false)}
            >
              <CardHomeSys imgcard={jrjr} />
            </PageModal>
            
            {helppage ? (
              <PageModal
                ptop={'1%'}
                pwidth={'65%'}
                pheight={'90%'}
                imgbm={bt_close}
                titbm="Fechar..."
                titulo={'Help Conteúdo do Sistema.'}
                onclose={() => setHelpPage(false)}
              >
                <CardHomeSys imgcard={jrjr} />
              </PageModal>
            ) : null}
          ) : null}
      </LayoutHome>
    </ThemeProvider>
  );
};

export default Home;
