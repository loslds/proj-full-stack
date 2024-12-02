import * as Hrd from './styledHeader';

interface PropsContentHeaderButtonSys {
  imgsys?: string;
  titlesys?: string;
  onClicksys?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonSys = ({
  imgsys,
  titlesys,
  onClicksys,
}: PropsContentHeaderButtonSys) => {
  return (
    <Hrd.ContainerImgSys>
      <Hrd.ButtonPagesImgSys
        img={imgsys}
        title={titlesys}
        onClick={onClicksys}
      />
    </Hrd.ContainerImgSys>
  );
};
export default ContentHeaderButtonSys;
