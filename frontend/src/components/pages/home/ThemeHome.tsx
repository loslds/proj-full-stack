import { ReactNode } from 'react';

import { LayoutHome } from './LayoutHome';

type PropsThemeHome = {
  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;

  titlepg?: string;

  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onclickhlppg?: () => void;

  imgbtnopen?: string;
  titbtnopen?: string;
  onclickopen?: () => void;

  imgbtnreg?: string;
  titbtnreg?: string;
  onclickreg?: () => void;

  onchange: () => void;
  ischeck: boolean;

  children?: ReactNode | JSX.Element;

  open?: boolean;
};
export const ThemeHome = ({
  imgsys,
  titbtnsys,
  onclicksys,

  titlepg,

  imgbtnhlppg,
  titbtnhlppg,
  onclickhlppg,

  imgbtnopen,
  titbtnopen,
  onclickopen,

  imgbtnreg,
  titbtnreg,
  onclickreg,

  onchange,
  ischeck,

  children,

  open,
}: PropsThemeHome) => {
  return (
    <LayoutHome
      imgsys={imgsys}
      titbtnsys={titbtnsys}
      onclicksys={onclicksys}
      titlepg={titlepg}
      imgbtnhlppg={imgbtnhlppg}
      titbtnhlppg={titbtnhlppg}
      onclickhlppg={onclickhlppg}
      imgbtnopen={imgbtnopen}
      titbtnopen={titbtnopen}
      onclickopen={onclickopen}
      imgbtnreg={imgbtnreg}
      titbtnreg={titbtnreg}
      onclickreg={onclickreg}
      onchange={onchange}
      ischeck={ischeck}
      open={open}
    >
      {children}
    </LayoutHome>
  );
};
