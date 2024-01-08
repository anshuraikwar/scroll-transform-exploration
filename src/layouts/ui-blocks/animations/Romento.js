import { ElementIDEnum, ScrollElementIDEnum } from '../../../constants/enums/ElementIDEnum.ts';
import {
  phoneOutRotateAnimationUtil,
  phoneOutTranslateYAnimationUtil,
  romentoInPhoneOutOpacityAnimationUtil,
  romentoInPhoneOutRotateYAnimationUtil,
  romentoInPhoneOutTranslateXAnimationUtil,
} from '../../../utils/ReusableAnimationUtils';
import { getElementTopBounding } from '../../../utils/boundingUtil';
import { getValueInNewRange } from '../../../utils/AnimationUtil';

export const romentoInPhoneOutAnimation = () => {
  [
    ElementIDEnum.ROMENTO_LEVEL_0,
    ElementIDEnum.ROMENTO_LEVEL_1,
    ElementIDEnum.ROMENTO_LEVEL_2,
    ElementIDEnum.ROMENTO_LEVEL_3,
  ].map((levelId, index) => {
    const level = document.getElementById(levelId);

    const levelTranslateX = romentoInPhoneOutTranslateXAnimationUtil(index);
    const levelTranslateY = phoneOutTranslateYAnimationUtil(index);
    const levelRotate = phoneOutRotateAnimationUtil();
    const levelRotateY = romentoInPhoneOutRotateYAnimationUtil();
    level.style.transform = `
      perspective(1200px)
      translateX(${levelTranslateX}px)
      translateY(-${levelTranslateY}px)
      rotate(${levelRotate}deg)
      rotateY(${levelRotateY}deg)
    `;
    return null;
  });

  const romento = document.getElementById(ElementIDEnum.ROMENTO);
  romento.style.opacity = romentoInPhoneOutOpacityAnimationUtil();
};
export const romentoVideoInAnimation = () => {
  const {
    topBounding: romentoInBounding,
    maxTopBounding: oldRomentoInMax,
  } = getElementTopBounding(ScrollElementIDEnum.ROMENTO_IN);

  const romentoVideo = document.getElementById(ElementIDEnum.ROMENTO_VIDEO);

  romentoVideo.style.opacity = getValueInNewRange(
    0,
    oldRomentoInMax,
    romentoInBounding,
    0.2,
    0.7,
  );
};
