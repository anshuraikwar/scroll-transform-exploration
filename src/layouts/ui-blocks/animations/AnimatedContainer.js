import { ElementIDEnum, ScrollElementIDEnum } from '../../../constants/enums/ElementIDEnum.ts';
import { getElementTopBounding } from '../../../utils/boundingUtil';
import { getValueInNewRange } from '../../../utils/AnimationUtil';
import { ConversionTypeEnum } from '../../../constants/enums/ConversionType.ts';

export const animatedContainerScaleAnimation = () => {
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);
  const {
    topBounding: tabletInBounding,
    maxTopBounding: oldTabletInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TABLET_IN);
  const {
    topBounding: tabletOutBounding,
    maxTopBounding: oldTabletOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TABLET_OUT);

  const animatedContainer = document.getElementById(ElementIDEnum.ANIMATION_CONTAINER);

  let initialScale = 1;
  let huluTvScale = 1;
  let tabletScale = 1.25;
  const windowWidth = window.innerWidth;
  if (windowWidth < 809) {
    initialScale = 0.85;
    huluTvScale = 0.55;
    tabletScale = 1;
  }

  let oldScaleMax = oldPhoneOutMax;
  let scaleBounding = phoneOutBounding;
  let newScaleMax = initialScale; // 1;
  let scaleConversionType = [ConversionTypeEnum.REVERSE];
  if (tabletInBounding > 0) {
    oldScaleMax = oldTabletInMax;
    scaleBounding = tabletInBounding;
    newScaleMax = tabletScale;
    scaleConversionType = [];
  }
  if (tabletOutBounding > 0) {
    oldScaleMax = oldTabletOutMax;
    scaleBounding = tabletOutBounding;
    newScaleMax = tabletScale;
    scaleConversionType = [ConversionTypeEnum.REVERSE];
  }
  const scale = getValueInNewRange(
    0,
    oldScaleMax,
    scaleBounding,
    huluTvScale,
    newScaleMax,
    scaleConversionType,
  );
  animatedContainer.style.transform = `
    perspective(1200px)
    scale(${scale})
  `;
};
