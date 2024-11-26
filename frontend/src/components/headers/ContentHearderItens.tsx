import * as Hdr from '../stylePages';

interface PropsContentHearderItens {
  children?: React.ReactNode | JSX.Element;
}
export const ContentHearderItens = ({ children }: PropsContentHearderItens) => {
  return <Hdr.ContainerHeaderItens>{children}</Hdr.ContainerHeaderItens>;
};
