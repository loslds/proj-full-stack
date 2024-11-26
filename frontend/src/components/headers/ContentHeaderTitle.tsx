import * as Hed from './styledHeader';

interface PropsContentHeaderTitle {
  title?: string;
}
export const ContentHeaderTitle = ({ title }: PropsContentHeaderTitle) => {
  return (
    <Hed.ContainerTitleHeader>
      <h1>{title}</h1>
    </Hed.ContainerTitleHeader>
  );
};
