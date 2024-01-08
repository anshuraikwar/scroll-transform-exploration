import { ConversionTypeEnum } from '../constants/enums/ConversionType.ts';
import { getValueInNewRange } from './AnimationUtil';
import { getElementTopBounding } from './boundingUtil';
import { ScrollElementIDEnum } from '../constants/enums/ElementIDEnum.ts';

export const introTextFadeInOutOpacityUtil = (
  fadeInOldMax,
  fadeInBounding,
  fadeOutOldMax,
  fadeOutBounding,
) => {
  // text opacity animation
  let textOpacityOldMax = fadeInOldMax;
  let textOpacityBounding = fadeInBounding;
  let textOpacityConversionType = [];
  if (fadeOutBounding > 0) {
    textOpacityOldMax = fadeOutOldMax;
    textOpacityBounding = fadeOutBounding;
    textOpacityConversionType = [ConversionTypeEnum.REVERSE];
  }
  const textOpacity = getValueInNewRange(
    0,
    textOpacityOldMax,
    textOpacityBounding,
    0,
    1,
    textOpacityConversionType,
  );
  return textOpacity;
};

export const introTextInOutTranslateYUtil = (
  translateYInOldMax,
  translateYInBounding,
  translateYOutOldMax,
  translateYOutBounding,
) => {
  // text translate Y animation
  let textTranslateYOldMax = translateYInOldMax;
  let textTranslateYBounding = translateYInBounding;
  let textTranslateYNewMin = 0;
  let textTranslateYNewMax = 20;
  if (translateYOutBounding > 0) {
    textTranslateYOldMax = translateYOutOldMax;
    textTranslateYBounding = translateYOutBounding;
    textTranslateYNewMin = -10;
    textTranslateYNewMax = 0;
  }
  const textTranslateY = getValueInNewRange(
    0,
    textTranslateYOldMax,
    textTranslateYBounding,
    textTranslateYNewMin,
    textTranslateYNewMax,
    [ConversionTypeEnum.REVERSE],
  );
  return textTranslateY;
};

export const introTextScaleOutUtil = (
  scaleOutMax,
  scaleOutBounding,
) => {
  // text scale animation
  const textScale = getValueInNewRange(
    0,
    scaleOutMax,
    scaleOutBounding,
    0.9,
    1,
    [ConversionTypeEnum.REVERSE],
  );
  return textScale;
};

export const introTextRotateXOutUtil = (
  rotateXOutMax,
  rotateXOutBounding,
) => {
  // text rotate X animation
  const textRotateX = getValueInNewRange(
    0,
    rotateXOutMax,
    rotateXOutBounding,
    0,
    80,
  );
  return textRotateX;
};

export const helloOutRotateYAnimationUtil = () => {
  const {
    topBounding: helloOutBounding,
    maxTopBounding: oldHelloOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.HELLO_OUT);

  // phone out rotate Y animation
  const levelRotateY = getValueInNewRange(
    0,
    oldHelloOutMax,
    helloOutBounding,
    0,
    90,
  );
  return levelRotateY;
};
export const helloOutTranslateXAnimationUtil = (
  levelId,
) => {
  const {
    topBounding: helloOutBounding,
    maxTopBounding: oldHelloOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.HELLO_OUT);

  // phone out translate X animation
  const levelTranslateX = getValueInNewRange(
    0,
    oldHelloOutMax,
    helloOutBounding,
    0,
    (32 * levelId),
  );
  return levelTranslateX;
};

export const romentoInPhoneOutOpacityAnimationUtil = () => {
  const {
    topBounding: romentoFadeInBounding,
    maxTopBounding: oldRomentoFadeInMax,
  } = getElementTopBounding(ScrollElementIDEnum.ROMENTO_FADE_IN);
  const {
    topBounding: phoneFadeOutBounding,
    maxTopBounding: oldPhoneFadeOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_FADE_OUT);

  // romento in phone out opacity animation
  let oldOpacityMax = oldRomentoFadeInMax;
  let opacityBounding = romentoFadeInBounding;
  let opacityConversionType = [];
  if (phoneFadeOutBounding > 0) {
    oldOpacityMax = oldPhoneFadeOutMax;
    opacityBounding = phoneFadeOutBounding;
    opacityConversionType = [ConversionTypeEnum.REVERSE];
  }
  const romentoOpacity = getValueInNewRange(
    0,
    oldOpacityMax,
    opacityBounding,
    0,
    1,
    opacityConversionType,
  );
  return romentoOpacity;
};
export const romentoInPhoneOutTranslateXAnimationUtil = (
  levelId,
) => {
  const {
    topBounding: romentoInBounding,
    maxTopBounding: oldRomentoInMax,
  } = getElementTopBounding(ScrollElementIDEnum.ROMENTO_IN);
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);

  // romento in phone out translate X animation
  let oldTranslateXMax = oldRomentoInMax;
  let translateXBounding = romentoInBounding;
  let translateXConversionType = [ConversionTypeEnum.REVERSE];
  if (phoneOutBounding > 0) {
    oldTranslateXMax = oldPhoneOutMax;
    translateXBounding = phoneOutBounding;
    translateXConversionType = [ConversionTypeEnum.NEGATIVE];
  }
  const levelTranslateX = getValueInNewRange(
    0,
    oldTranslateXMax,
    translateXBounding,
    0,
    (32 * levelId),
    translateXConversionType,
  );
  return levelTranslateX;
};
export const romentoInPhoneOutRotateYAnimationUtil = () => {
  const {
    topBounding: romentoInBounding,
    maxTopBounding: oldRomentoInMax,
  } = getElementTopBounding(ScrollElementIDEnum.ROMENTO_IN);
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);

  // romento in phone out rotate Y animation
  let oldRotateYMax = oldRomentoInMax;
  let rotateYBounding = romentoInBounding;
  let rotateYConversionType = [ConversionTypeEnum.REVERSE];
  if (phoneOutBounding > 0) {
    oldRotateYMax = oldPhoneOutMax;
    rotateYBounding = phoneOutBounding;
    rotateYConversionType = [ConversionTypeEnum.NEGATIVE];
  }
  const levelRotateY = getValueInNewRange(
    0,
    oldRotateYMax,
    rotateYBounding,
    0,
    90,
    rotateYConversionType,
  );
  return levelRotateY;
};
export const phoneOutTranslateYAnimationUtil = (
  levelId,
) => {
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);

  // phone out translate Y animation
  const levelTranslateY = getValueInNewRange(
    0,
    oldPhoneOutMax,
    phoneOutBounding,
    0,
    (32 * levelId),
  );
  return levelTranslateY;
};
export const phoneOutRotateAnimationUtil = () => {
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);

  // phone out rotate animation
  const levelRotate = getValueInNewRange(
    0,
    oldPhoneOutMax,
    phoneOutBounding,
    0,
    45,
  );
  return levelRotate;
};

export const huluTVInTranslateXAnimationUtil = (
  levelId,
) => {
  const {
    topBounding: tvInBounding,
    maxTopBounding: oldTvInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_IN);

  const levelTranslateX = getValueInNewRange(
    0,
    oldTvInMax,
    tvInBounding,
    0,
    (32 * levelId),
    [ConversionTypeEnum.REVERSE],
  );
  return levelTranslateX;
};
export const huluTVInOutTranslateYAnimationUtil = (
  levelId,
) => {
  const {
    topBounding: tvInBounding,
    maxTopBounding: oldTvInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_IN);
  const {
    topBounding: tvOutBounding,
    maxTopBounding: oldTvOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_OUT);

  // tv-in-out rotate Y animation
  let oldTranslateYMax = oldTvInMax;
  let translateYBounding = tvInBounding;
  let translateYConversionType = [ConversionTypeEnum.REVERSE];
  if (tvOutBounding > 0) {
    oldTranslateYMax = oldTvOutMax;
    translateYBounding = tvOutBounding;
    translateYConversionType = [ConversionTypeEnum.NEGATIVE];
  }
  const levelTranslateY = getValueInNewRange(
    0,
    oldTranslateYMax,
    translateYBounding,
    0,
    (32 * levelId),
    translateYConversionType,
  );
  return levelTranslateY;
};
export const tvInRotateAnimationUtil = () => {
  const {
    topBounding: tvInBounding,
    maxTopBounding: oldTvInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_IN);

  // tv in rotate animation
  const levelRotate = getValueInNewRange(
    0,
    oldTvInMax,
    tvInBounding,
    0,
    45,
    [ConversionTypeEnum.REVERSE],
  );
  return levelRotate;
};
export const huluTvInRotateXAnimationUtil = () => {
  const {
    topBounding: tvInBounding,
    maxTopBounding: oldTvInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_IN);
  const {
    topBounding: tvOutBounding,
    maxTopBounding: oldTvOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_OUT);

  // tv-in-out rotate Y animation
  let oldRotateYMax = oldTvInMax;
  let rotateYBounding = tvInBounding;
  let rotateYConversionType = [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE];
  if (tvOutBounding > 0) {
    oldRotateYMax = oldTvOutMax;
    rotateYBounding = tvOutBounding;
    rotateYConversionType = [];
  }
  const levelRotateY = getValueInNewRange(
    0,
    oldRotateYMax,
    rotateYBounding,
    0,
    90,
    rotateYConversionType,
  );
  return levelRotateY;
};
export const tvInOutOpacityAnimationUtil = () => {
  const {
    topBounding: tvFadeInBounding,
    maxTopBounding: oldTvFadeInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_FADE_IN);
  const {
    topBounding: tvFadeOutBounding,
    maxTopBounding: oldTvFadeOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_FADE_OUT);

  // hulu tv in out opacity animation
  let oldOpacityMax = oldTvFadeInMax;
  let opacityBounding = tvFadeInBounding;
  let opacityConversionType = [];
  if (tvFadeOutBounding > 0) {
    oldOpacityMax = oldTvFadeOutMax;
    opacityBounding = tvFadeOutBounding;
    opacityConversionType = [ConversionTypeEnum.REVERSE];
  }
  const huluTvOpacity = getValueInNewRange(
    0,
    oldOpacityMax,
    opacityBounding,
    0,
    1,
    opacityConversionType,
  );
  return huluTvOpacity;
};
