import * as Lay from '../../stylePages';

import { ContentPages } from '../../ContentPages';
import { HearderHome } from './HearderHome';

//import { FooterHome } from '../../footers/FooterHome';
//import { BarSideMenuHome } from '../../sidebar/BarSideMenuHome';
//import { BarSideMenuDados } from '../../sidebar/BarSideMenuDados';

type TypeLayoutHome = {
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
  ischeck?: boolean;
  children?: React.ReactNode | JSX.Element;
  open?: boolean;
};
export const LayoutHome = ({
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
}: TypeLayoutHome) => {
  return (
    <ContentPages>
      <HearderHome
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
      />
      <Lay.DivisionPgHztal />
      <Lay.ContainerBody>
        <Lay.ContainerPage>
          {/* <BarSideMenuHome /> */}
          {/* <BarSideMenuDados open={open} /> */}
          <Lay.DivisionPgHztal />
          {children}
        </Lay.ContainerPage>
      </Lay.ContainerBody>
      {/* <Hm.DivisionPgHztal />
      <FooterHome /> */}
    </ContentPages>
  );
};
