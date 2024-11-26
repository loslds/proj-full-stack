import * as Pag from './stylePages';

interface PropsContentPagesButtonHelp {
  imgbtnhlp?: string;
  titbtnhlp?: string;
  onClickhlp?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentPagesButtonHelp = ({
  imgbtnhlp,
  titbtnhlp,
  onClickhlp,
}: PropsContentPagesButtonHelp) => {
  return (
    <Pag.ContainerPagesButton>
      <Pag.ButtonPagesImg
        img={imgbtnhlp}
        title={titbtnhlp}
        onClick={onClickhlp}
      />
    </Pag.ContainerPagesButton>
  );
};
