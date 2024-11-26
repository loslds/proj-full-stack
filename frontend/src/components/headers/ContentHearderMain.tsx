import * as Hdr from '../stylePages';

interface PropsContentHearderMain {
  children?: React.ReactNode | JSX.Element;
}
export const ContentHearderMain = ({ children }: PropsContentHearderMain) => {
  return <Hdr.ContainerHearder>{children}</Hdr.ContainerHearder>;
};
