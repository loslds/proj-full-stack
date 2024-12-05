import * as M from '../modal/stylesModal';
import { CardModalTexto } from '../modal/CardModalTexto';

interface PropsCardDesemvolver {
  imgcarddes?: string;
}
export const CardDesemvolver = ({ imgcarddes }: PropsCardDesemvolver) => {
  return (
    <CardModalTexto>
      <M.ContainerHeardModalMain>
        <M.ContainerModalImg
          pminheight={'60px'}
          pwidth={'80px'}
          img={imgcarddes}
        />
      </M.ContainerHeardModalMain>
      <label>Serviço em Desemvolvimento.</label>
      <p>No momento aguardando programação de aplicativo.</p>
      <p>Desculpas pelo transtorno.</p>
    </CardModalTexto>
  );
};
