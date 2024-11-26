import * as Pag from './stylePages';

interface PropsContentPagesButtonOpen {
  imgbtnopen?: string;
  titbtnopen?: string;
  onClickopen?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentPagesButtonOpen = ({
  imgbtnopen,
  titbtnopen,
  onClickopen,
}: PropsContentPagesButtonOpen) => {
  return (
    <Pag.ContainerPagesButton>
      <Pag.ButtonPagesImg
        img={imgbtnopen}
        title={titbtnopen}
        onClick={onClickopen}
      />
    </Pag.ContainerPagesButton>
  );
};
