import * as Hed from '../../stylePages';

interface PropsContentHearderRight {
  children?: React.ReactNode | JSX.Element;
}
export const ContentHearderRight = ({ children }: PropsContentHearderRight) => {
  return (
    <Hed.ContainerHeaderRight>
      <Hed.ContainerHearderRightFlex>{children}</Hed.ContainerHearderRightFlex>
    </Hed.ContainerHeaderRight>
  );
};
