import { ElementIDEnum, ScrollElementIDEnum } from '../../../constants/enums/ElementIDEnum.ts';
import {
  huluTVInOutTranslateYAnimationUtil,
  huluTvInRotateXAnimationUtil,
  huluTVInTranslateXAnimationUtil,
  tvInOutOpacityAnimationUtil,
  tvInRotateAnimationUtil,
} from '../../../utils/ReusableAnimationUtils';
import { getElementTopBounding } from '../../../utils/boundingUtil';
import { ConversionTypeEnum } from '../../../constants/enums/ConversionType.ts';
import { getValueInNewRange } from '../../../utils/AnimationUtil';

export const huluTVInOutAnimation = () => {
  [
    ElementIDEnum.HULU_TV_LEVEL_0,
    ElementIDEnum.HULU_TV_LEVEL_1,
    ElementIDEnum.HULU_TV_LEVEL_2,
    ElementIDEnum.HULU_TV_LEVEL_3,
    ElementIDEnum.HULU_TV_LEVEL_4,
  ].map((levelId, index) => {
    const level = document.getElementById(levelId);

    const levelTranslateX = huluTVInTranslateXAnimationUtil(index);
    const levelTranslateY = huluTVInOutTranslateYAnimationUtil(index);
    const levelRotate = tvInRotateAnimationUtil();
    const levelRotateX = huluTvInRotateXAnimationUtil();
    level.style.transform = `
      perspective(1200px)
      translateX(${levelTranslateX}px)
      translateY(${levelTranslateY}px)
      rotate(-${levelRotate}deg)
      rotateX(${levelRotateX}deg)
    `;
    return null;
  });

  const huluTV = document.getElementById(ElementIDEnum.HULU_TV);
  huluTV.style.opacity = tvInOutOpacityAnimationUtil();
};

export const huluTvStandOutAnimation = () => {
  const {
    topBounding: tvLegsOutBounding,
    maxTopBounding: oldTvLegsOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_LEGS_OUT);
  const {
    topBounding: tvOutBounding,
    maxTopBounding: oldTvOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_OUT);

  // hulu tv in out translate Y animation
  let oldTranslateYMax = oldTvLegsOutMax;
  let translateYBounding = tvLegsOutBounding;
  let translateYConversionType = [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE];
  if (tvOutBounding > 0) {
    oldTranslateYMax = oldTvOutMax;
    translateYBounding = tvOutBounding;
    translateYConversionType = [ConversionTypeEnum.NEGATIVE];
  }
  const translateY = getValueInNewRange(
    0,
    oldTranslateYMax,
    translateYBounding,
    0,
    40,
    translateYConversionType,
  );

  const huluTvStand = document.getElementById(ElementIDEnum.HULU_TV_STAND);
  huluTvStand.style.transform = `
      perspective(1200px)
      translateY(${translateY}px)
  `;
};
