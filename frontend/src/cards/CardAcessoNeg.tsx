import * as M from '../modal/stylesModal';

import { CardModalTexto } from '../modal/CardModalTexto';

interface PropsCardAcessoNeg {
  imgcardneg?: string;
}
export const CardAcessoNeg = ({ imgcardneg }: PropsCardAcessoNeg) => {
  return (
    <CardModalTexto>
      <M.ContainerHeardModalMain>
        <M.ContainerModalImg
          pminheight={'70px'}
          pwidth={'70px'}
          img={imgcardneg}
        />
      </M.ContainerHeardModalMain>
      <label>Acesso NEGADO.</label>
      <p>No momento seus requisitos não estão habilitados.</p>
      <br />
    </CardModalTexto>
  );
};
