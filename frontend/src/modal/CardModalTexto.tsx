import React from 'react';
import * as M from '../modal/stylesModal';

interface PropsCardModalTexto {
  children?: React.ReactNode | JSX.Element;
}
export const CardModalTexto = ({ children }: PropsCardModalTexto) => {
  return <M.ContainerModalTexto>{children}</M.ContainerModalTexto>;
};
