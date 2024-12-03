import * as H from './../stylePages';

interface PropsContentHearderRight {
  children?: React.ReactNode | JSX.Element;
}
export const ContentHearderRight = ({ children }: PropsContentHearderRight) => {
  return (
    <H.ContainerHeaderRight>
      <H.ContainerHearderRightFlex>{children}</H.ContainerHearderRightFlex>
    </H.ContainerHeaderRight>
  );
};
