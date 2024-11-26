import * as Pag from './stylePages';

interface PropsContentPagesButton {
  imgbtn?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentPagesButton = ({
  imgbtn,
  titbtn,
  onClick,
}: PropsContentPagesButton) => {
  return (
    <Pag.ContainerPagesButton>
      <Pag.ButtonPagesImg img={imgbtn} title={titbtn} onClick={onClick} />
    </Pag.ContainerPagesButton>
  );
};
