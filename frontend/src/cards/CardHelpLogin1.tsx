import React from 'react';
import * as MD from '../modal/stylesModal';

import { CardModalTexto } from '../Modal/CardModalTexto';
import { PageModalHelp } from '../Modal/PageModalHelp';
import { CardAcessoSistema } from './cardsbuttons/CardAcessoSistema';

type TypeCardHelpLogin1 = {
  imghlp?: string;
  imgcard?: string;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
};
export const CardHelpLogin1 = ({
  imghlp,
  imgcard,
  imgbm,
  titbm,
  onclose,
}: TypeCardHelpLogin1) => {
  const [help, setHelp] = React.useState(false);

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'70px'}
            pwidth={'78px'}
            img={imghlp}
            title={'Help-Login1...'}
            onClick={() => setHelp(true)}
          />
        </MD.ContainerHeardModalMain>

        <h3>Help Página do Acesso ao Sistema.</h3>
        <br />
        <p>
          &emsp; - Para prosseguir seu logo-on é necessário que selecione uma
          Opção.
        </p>
        <p>
          &emsp; - No momento você prescisa somente optar em selecionar uma das
          (4)quatro forma para seu Acesso ao Sitema.
        </p>
        <h4>Opções:</h4>
        <p>
          &emsp;&emsp; - Para Selecionar o desejado Click no Radiun na Frente da
          sua Opção.
        </p>
        <br />
        <p>&emsp;&emsp; - ID(apelido) e Senha(password).</p>
        <p>&emsp;&emsp; - ID(apelido) e PIN.</p>
        <p>&emsp;&emsp; - ID(E-Mail), e Senha(password).</p>
        <p>&emsp;&emsp; - ID(E-Mail), e PIN.</p>
        <br />
        <p>&emsp; - Após selecionar click em Continuar.</p>
        <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
        <label>Obs.:</label>
        <p>&emsp; - Click na imagem para ver o Help da Aplicação.</p>
        <br />
      </MD.ContentTextoModulos>

      {help ? (
        <PageModalHelp
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'87%'}
          titulo={'Acesso Sistema.'}
          imgbm={imgbm}
          titbm={titbm}
          onclose={onclose}
        >
          <CardAcessoSistema imgcard={imgcard} />
        </PageModalHelp>
      ) : null}
    </CardModalTexto>
  );
};
