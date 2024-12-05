import React from 'react';
import * as MD from '../modal/stylesModal';
import { CardModalTexto } from '../modal/CardModalTexto';
import { PageModalHelp }from '../components/pages/PageModal';
import { CardAcessoResgate } from './CardAcessoResgate';

type TypeCardHelpResgate = {
  imghlp?: string;
  imgcard?: string;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
};
export const CardHelpResgate = ({
  imghlp,
  imgcard,
  imgbm,
  titbm,
  onclose,
}: TypeCardHelpResgate) => {
  const [help, setHelp] = React.useState(false);

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'70px'}
            pwidth={'78px'}
            img={imghlp}
            onClick={() => setHelp(true)}
          />
        </MD.ContainerHeardModalMain>
        <h3>Help Página do Acesso Resgate.</h3>
        <p>
          &emsp; - Para que possa prosseguir com o Resgate de seu Acesso, é
          necessário disponinvel em seu cadastro de Usuário:
        </p>
        <p>&emsp;&emsp;&emsp; - Empresa cadastrada.</p>
        <p>&emsp;&emsp;&emsp; - Email cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Telefone cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Whatsapp cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Respostas as Peguntas cadastradas.</p>
        <h3>Situações dos recurso em processo do Resgate.</h3>
        <label>Do Caso.:</label>
        <p>
          &emsp; - Se não tiver logado, deverá selecionar uma nas opções
          oferecidas.
        </p>
        <p>
          &emsp; - Se estive logado, não precisará, sistema fornecera a opção.
        </p>
        <label>Obs.:</label>
        <p>
          &emsp; - Existem (3)Treis opções para satisfaser os recursos do
          resgate:
        </p>
        <p>&emsp; - Opções: "VOLTAR","ABORTAR" ou "CONTINUAR".</p>
        <h4>Opções: "VOLTAR" </h4>
        <p>&emsp;&emsp; - O Sistema irá retornar para o efeito anterior.</p>
        <h4>Opções: "ABORTAR" </h4>
        <p>
          &emsp;&emsp; - Se tiver Logado e Clicar "ABORTAR", o sistema irá achar
          que você não deseja RECUPERAR o acesso com a Empresa login efetuado.
        </p>
        <p>
          &emsp;&emsp; - O sistema limpará o login direcionado a Empresa
          apresentada e retornará com a opção de escolha de empresa.
        </p>
        <p>
          &emsp;&emsp; - Se não tiver Logado e Clicar "ABORTAR", o sistema irá
          retornar para a "HOME" inicial do sistema.
        </p>
        <h4>Opção: "CONTINUAR".</h4>
        <p>
          &emsp;&emsp; - o Sistema irá passar para próxima fase, de Opções de
          como voçê quer resgatar seu acesso.
        </p>
        <br />
        <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
        <label>Obs.:</label>
        <p>&emsp; - Click na imagem para ver o Help da Aplicação.</p>
        <br />
      </MD.ContentTextoModulos>

      {help ? (
        <PageModalHelp
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'90%'}
          titulo={'Acesso ao Resgate.'}
          imgbm={imgbm}
          titbm={titbm}
          onclose={onclose}
        >
          <CardAcessoResgate imgcard={imgcard} />
        </PageModalHelp>
      ) : null}
    </CardModalTexto>
  );
};
