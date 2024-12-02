import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light';
import dark from '../../../styles/themes/dark';
// img do HEADER
import logosys from '../../../assets/svgs/logosys.svg';
import help from '../../../assets/svgs/help.svg';
import avatar from '../../../assets/svgs/avatar.svg';
import bt_resgate from '../../../assets/svgs/bt_resgate.svg';
// img do MAIN
// import bt_visitante from '../../../assets/svgs/bt_visitante.svg';
// import bt_recepcao from '../../../assets/svgs/bt_recepcao.svg';
// import bt_design from '../../../assets/svgs/bt_design.svg';
// import bt_producao from '../../../assets/svgs/bt_producao.svg';
// import bt_acabamento from '../../../assets/svgs/bt_acabamento.svg';
// import bt_expedicao from '../../../assets/svgs/bt_expedicao.svg';
// import bt_administra from '../../../assets/svgs/bt_administracao.svg';
// import bt_config from '../../../assets/svgs/bt_config.svg';


import { ThemeHome } from './ThemeHome';
import { ContentItensBody } from '../../ContentItensBody';
// import { ContentCustonImgPage } from '../../ContentCustonImgPage';

export const Home = () => {
  const [theme, setTheme] = React.useState(dark);
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

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const [helppg, setHelpPg] = React.useState(false);
  // const [mainhelp, setMainHelp] = React.useState(false);
  const [meusdados, setMeusDados] = React.useState(false);

  const navigate = useNavigate();

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  // const handlerViewItensLogin = React.useCallback(() => {
  //   setMeusDados((oldState) => !oldState);
  // }, []);

  // const handlerLogin = React.useCallback(() => {
  //   goto('/login');
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeHome
        imgsys={logosys}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}

        titlepg={'Pagina'}

        imgbtnhlppg={help}
        titbtnhlppg={'Help...'}
        onclickhlppg={handlerHelpPg}

        imgbtnopen={avatar}
        titbtnopen={'Logar...'}
        onclickopen={() => {}}

        imgbtnreg={bt_resgate}
        titbtnreg={'Resgatar Acesso...'}
        onclickreg={() => {}}

        onchange={ToggleTheme}
        ischeck={ischeck}
        open={meusdados}
      >
        <ContentItensBody>
          <h1>HOME PAGE.</h1>
        </ContentItensBody>
      </ThemeHome>
    </ThemeProvider>
  );
};




// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import { ThemeProvider } from 'styled-components';
// import light from '../../../styles/themes/light';
// import dark from '../../../styles/themes/dark';

// import logosys from '../../../assets/svgs/logosys.svg';
// import help from '../../../assets/svgs/help.svg';
// import avatar from '../../../assets/svgs/avatar.svg';
// import bt_resgate from '../../../assets/svgs/bt_resgate.svg';
// import bt_visitante from '../../../assets/svgs/bt_visitante.svg';
// import bt_recepcao from '../../../assets/svgs/bt_recepcao.svg';
// import bt_design from '../../../assets/svgs/bt_design.svg';
// import bt_producao from '../../../assets/svgs/bt_producao.svg';
// import bt_acabamento from '../../../assets/svgs/bt_acabamento.svg';
// import bt_expedicao from '../../../assets/svgs/bt_expedicao.svg';
// import bt_administra from '../../../assets/svgs/bt_administracao.svg';
// import bt_config from '../../../assets/svgs/bt_config.svg';
// //import bt_master from '../../../assets/svgs/bt_master.svg';

// import { ThemeHome } from './ThemeHome';
// import { ContentItensBody } from '../../ContentItensBody';
// import { ContentCustonImgPage } from '../../ContentCustonImgPage';

// export const Home = () => {
//   const [theme, setTheme] = React.useState(dark);
//   const [ischeck, setIscheck] = React.useState(false);
  
//   const ToggleTheme = () => {
//     if (theme.name === 'dark') {
//       setTheme(light);
//       setIscheck(true);
//     } else {
//       setTheme(dark);
//       setIscheck(false);
//     }
//   };

//   const goto = (path: string) => {
//     return () => {
//       navigate(path);
//     };

//     // let rtn = false;
//     // if (!state.logado) {
//     //   if ( ( state.mdVisita ) || ( state.mdRecep ) || ( state.mdDesig ) ||
//     //     ( state.mdProdu ) || ( state.mdAcaba ) || ( state.mdExped ) ||
//     //     ( state.mdAdmin ) || ( state.mdConfig ) || ( state.mdMaster) ) {
//     //     rtn = true;
//     //   }
//     // } if (path === '/login' || path === '/resgate') {
//     //   rtn = true;
//     // }
//     // return () => {
//     //   if (rtn) {
//     //     navigate(path);
//     //   } else {
//     //     setMainHelp(true); // Mostra modal caso o usuário não esteja logado
//     //   }
//     // };
//   };

//   const [helppg, setHelpPg] = React.useState(false);
//   const [mainhelp, setMainHelp] = React.useState(false);
//   const [meusdados, setMeusDados] = React.useState(false);

//   const navigate = useNavigate();

//   const handlerHelpPg = React.useCallback(() => {
//     setHelpPg((oldState) => !oldState);
//   }, []);

//   const handlerViewItensLogin = React.useCallback(() => {
//     setMeusDados((oldState) => !oldState);
//   }, []);

//   const handlerLogin = React.useCallback(() => {
//     goto('/login');
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <ThemeHome
//         imgsys={logosys}
//         titbtnsys={'Home...'}
//         onclicksys={goto('/')}

//         titlepg={'Pagina'}

//         imgbtnhlppg={help}
//         titbtnhlppg={'Help...'}
//         onclickhlppg={handlerHelpPg}

//         imgbtnopen={avatar}
//         titbtnopen={'Logar...'}
//         onclickopen={() => {}}

//         imgbtnreg={bt_resgate}
//         titbtnreg={'Resgatar Acesso...'}
//         onclickreg={() => {}}

//         onchange={ToggleTheme}
//         ischeck={ischeck}
//         open={meusdados}
//       >
//         <ContentItensBody>
//           <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={bt_visitante}
//             titlebtn={'Visitante.'}
//             onclick={goto('/visitante')}
//           />

//           <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={bt_recepcao}
//             titlebtn={'Recepção.'}
//             onclick={goto('/recepcao')}
//           />
//           <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={bt_design}
//             titlebtn={'Designs.'}
//             onclick={goto('/design')}
//           />
//           <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={bt_producao}
//             titlebtn={'Produção.'}
//             onclick={goto('/producao')}
//           />
//           <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={bt_acabamento}
//             titlebtn={'Acabamento.'}
//             onclick={goto('/acabamento')}
//           />
//           <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={bt_expedicao}
//             titlebtn={'Expedição.'}
//             onclick={goto('/expedicao')}
//           />
//           <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={bt_administra}
//             titlebtn={'Administração.'}
//             onclick={goto('/administracao')}
//           />
//           <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             imgbtn={bt_config}
//             titlebtn={'Config.'}
//             onclick={goto('/config')}
//           />
//           {/* <ContentCustonImgPage
//             open={true}
//             pxheight={'165px'}
//             pheight={'165px'}
//             pwidth={'165px'}
//             img={master}
//             titlebtn={'Master.'}
//             onclick={goto('/master')}
//           /> */}

//           {helppg ? (
//             <div> <h3>'aguardando. programação'); </h3> </div>
          
//             // <PageModal
//             //   ptop={'1%'}
//             //   pwidth={'65%'}
//             //   pheight={'90%'}
//             //   imgbm={close}
//             //   titbm="Fechar..."
//             //   titulo={'Help Conteúdo do Sistema.'}
//             //   onclose={() => setHelpPg(false)}
//             // >
//             //   <CardHomeSys imgcard={jrjr} />
//             // </PageModal>
          
//           ) : null}

//           {mainhelp ? (
//             <div> <h3>'aguardando. programação'); </h3> </div>

//             // <PageModal
//             //   ptop="111px"
//             //   pwidth="30%"
//             //   pheight="25%"
//             //   titulo='" A T E N Ç Ã O "'
//             //   imgbm={close}
//             //   titbm="Fechar..."
//             //   onclose={() => {
//             //     setMainHelp(false);
//             //   }}
//             // >
//             //   <CardImgNeg imgcard={negado} />
//             // </PageModal>
//           ) : null}
//         </ContentItensBody>
//       </ThemeHome>
//     </ThemeProvider>
//   );
// };
