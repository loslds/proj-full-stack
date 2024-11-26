
import * as Hed from '../stylePages';

interface PropsContentHearderItensBar {
  children?: React.ReactNode | JSX.Element;
};
export const ContentHearderItensBar = ({ children }: PropsContentHearderItensBar) => {
  return <Hed.ContainerHeaderItensBar>{children}</Hed.ContainerHeaderItensBar>;
};
