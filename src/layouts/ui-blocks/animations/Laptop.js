import { getElementTopBounding } from '../../../utils/boundingUtil';
import { ConversionTypeEnum } from '../../../constants/enums/ConversionType.ts';
import { getValueInNewRange } from '../../../utils/AnimationUtil';
import { ElementIDEnum, ScrollElementIDEnum } from '../../../constants/enums/ElementIDEnum.ts';

const laptopInOutTranslateYAnimationUtil = (
  laptopInId,
  laptopOutId,
  levelId,
) => {
  const {
    topBounding: laptopInBounding,
    maxTopBounding: oldLaptopInMax,
  } = getElementTopBounding(laptopInId);
  const {
    topBounding: tvLaptopOutBounding,
    maxTopBounding: oldLaptopOutMax,
  } = getElementTopBounding(laptopOutId);

  // laptop in out translate Y animation
  let oldTranslateYMax = oldLaptopInMax;
  let translateYBounding = laptopInBounding;
  let translateYConversionType = [ConversionTypeEnum.REVERSE];
  if (tvLaptopOutBounding > 0) {
    oldTranslateYMax = oldLaptopOutMax;
    translateYBounding = tvLaptopOutBounding;
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

export const laptopInRotateXAnimationUtil = (
  laptopInId,
  laptopOutId,
) => {
  const {
    topBounding: laptopInBounding,
    maxTopBounding: oldLaptopInMax,
  } = getElementTopBounding(laptopInId);
  const {
    topBounding: tvLaptopOutBounding,
    maxTopBounding: oldLaptopOutMax,
  } = getElementTopBounding(laptopOutId);

  // laptop in rotate X animation
  let oldRotateXMax = oldLaptopInMax;
  let rotateXBounding = laptopInBounding;
  let rotateXConversionType = [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE];
  if (tvLaptopOutBounding > 0) {
    oldRotateXMax = oldLaptopOutMax;
    rotateXBounding = tvLaptopOutBounding;
    rotateXConversionType = [];
  }
  const levelRotateX = getValueInNewRange(
    0,
    oldRotateXMax,
    rotateXBounding,
    0,
    90,
    rotateXConversionType,
  );
  return levelRotateX;
};

export const laptopInOutOpacityAnimationUtil = (
  laptopFadeInId,
  laptopFadeOutId,
) => {
  const {
    topBounding: laptopFadeInBounding,
    maxTopBounding: oldLaptopFadeInMax,
  } = getElementTopBounding(laptopFadeInId);
  const {
    topBounding: laptopFadeOutBounding,
    maxTopBounding: oldLaptopFadeOutMax,
  } = getElementTopBounding(laptopFadeOutId);

  // laptop in out opacity animation
  let oldOpacityMax = oldLaptopFadeInMax;
  let opacityBounding = laptopFadeInBounding;
  let opacityConversionType = [];
  if (laptopFadeOutBounding > 0) {
    oldOpacityMax = oldLaptopFadeOutMax;
    opacityBounding = laptopFadeOutBounding;
    opacityConversionType = [ConversionTypeEnum.REVERSE];
  }
  const laptopOpacity = getValueInNewRange(
    0,
    oldOpacityMax,
    opacityBounding,
    0,
    1,
    opacityConversionType,
  );
  return laptopOpacity;
};

export const laptopInOutAnimation = (
  laptopLevelIdsList,
  laptopInId,
  laptopOutId,
  laptopId,
  laptopFadeInId,
  laptopFadeOutId,
) => {
  laptopLevelIdsList.map((levelId, index) => {
    const level = document.getElementById(levelId);

    const levelTranslateY = laptopInOutTranslateYAnimationUtil(laptopInId, laptopOutId, index);
    const levelRotateX = laptopInRotateXAnimationUtil(laptopInId, laptopOutId);
    level.style.transform = `
      perspective(1200px)
      translateY(${levelTranslateY}px)
      rotateX(${levelRotateX}deg)
    `;
    return null;
  });

  const laptop = document.getElementById(laptopId);
  laptop.style.opacity = laptopInOutOpacityAnimationUtil(laptopFadeInId, laptopFadeOutId);
};

export const laptopInBottomContAnimation = (
  laptopBottomFadeIn,
  laptopBottomContId,
) => {
  const {
    topBounding: laptopBottomContFadeInBounding,
    maxTopBounding: oldLaptopBottomContFadeInMax,
  } = getElementTopBounding(laptopBottomFadeIn);

  // laptop-in bottom-cont opacity animation
  const laptopBottomContOpacity = getValueInNewRange(
    0,
    oldLaptopBottomContFadeInMax,
    laptopBottomContFadeInBounding,
    0,
    1,
  );

  // laptop-in bottom-cont perspective animation
  const laptopBottomContPersp = getValueInNewRange(
    0,
    oldLaptopBottomContFadeInMax,
    laptopBottomContFadeInBounding,
    1200,
    5000,
  );

  const laptopBottomCont = document.getElementById(laptopBottomContId);
  laptopBottomCont.style.opacity = laptopBottomContOpacity;
  laptopBottomCont.style.transform = `
    perspective(${laptopBottomContPersp}px)
  `;
};

export const laptopInBottomAnimation = (
  laptopInId,
  laptopOutId,
  laptopBottomId,
) => {
  const {
    topBounding: laptopInBounding,
    maxTopBounding: oldLaptopInMax,
  } = getElementTopBounding(laptopInId);
  const {
    topBounding: laptopOutBounding,
    maxTopBounding: oldLaptopOutMax,
  } = getElementTopBounding(laptopOutId);

  // laptop-in bottom translateY animation
  let oldTranslateYMax = oldLaptopInMax;
  let translateYBounding = laptopInBounding;

  let newTranslateYMin = 38;
  // let newTranslateYMin = 140;

  let translateYConversionType = [];
  if (laptopOutBounding > 0) {
    oldTranslateYMax = oldLaptopOutMax;
    translateYBounding = laptopOutBounding;

    newTranslateYMin = 59.5;
    // newTranslateYMin = 218;

    translateYConversionType = [ConversionTypeEnum.REVERSE];
  }
  const laptopBottomTranslateY = getValueInNewRange(
    0,
    oldTranslateYMax,
    translateYBounding,
    newTranslateYMin,

    62.5,
    // 229,

    translateYConversionType,
  );

  // laptop-in-out bottom scale animation
  let oldScaleMax = oldLaptopInMax;
  let scaleBounding = laptopInBounding;
  let scaleConversionType = [];
  if (laptopOutBounding > 0) {
    oldScaleMax = oldLaptopOutMax;
    scaleBounding = laptopOutBounding;
    scaleConversionType = [ConversionTypeEnum.REVERSE];
  }
  const laptopBottomScale = getValueInNewRange(
    0,
    oldScaleMax,
    scaleBounding,
    0.7,
    1.15,
    scaleConversionType,
  );

  // laptop-in-out bottom rotateX animation
  let oldRotateXMax = oldLaptopInMax;
  let rotateXBounding = laptopInBounding;
  let rotateXConversionType = [];
  if (laptopOutBounding > 0) {
    oldRotateXMax = oldLaptopOutMax;
    rotateXBounding = laptopOutBounding;
    rotateXConversionType = [ConversionTypeEnum.REVERSE];
  }
  const laptopBottomRotateX = getValueInNewRange(
    0,
    oldRotateXMax,
    rotateXBounding,
    90,
    95,
    rotateXConversionType,
  );

  const laptopBottom = document.getElementById(laptopBottomId);
  laptopBottom.style.transform = `
    perspective(1200px)
    translateY(${laptopBottomTranslateY}%)
    scale(${laptopBottomScale})
    rotateX(-${laptopBottomRotateX}deg)
  `;
};

export const laptop2InOutAnimation = (
  laptopLevelIdsList,
  laptopInId,
  laptopOutId,
  laptopId,
  laptopFadeInId,
  laptopFadeOutId,
) => {
  const {
    topBounding: laptopInBounding,
    maxTopBounding: oldLaptopInMax,
  } = getElementTopBounding(laptopInId);
  const {
    topBounding: laptopOutBounding,
    maxTopBounding: oldLaptopOutMax,
  } = getElementTopBounding(laptopOutId);

  const {
    topBounding: laptopFoldBackBounding,
    maxTopBounding: oldLaptopFoldBackMax,
  } = getElementTopBounding(ScrollElementIDEnum.LAPTOP_2_FOLD_BACKWARDS);

  const laptop = document.getElementById(laptopId);
  laptop.style.opacity = laptopInOutOpacityAnimationUtil(laptopFadeInId, laptopFadeOutId);

  const laptopRotateZ = getValueInNewRange(
    0,
    oldLaptopOutMax,
    laptopOutBounding,
    0,
    45,
  );
  const laptopTranslateX = getValueInNewRange(
    0,
    oldLaptopOutMax,
    laptopOutBounding,
    0,
    32,
  );
  const laptopTranslateY = getValueInNewRange(
    0,
    oldLaptopOutMax,
    laptopOutBounding,
    0,
    160,
  );
  const laptopWrapper = document.getElementById(ElementIDEnum.LAPTOP_WRAPPER);
  laptopWrapper.style.transform = `
    rotateZ(${laptopRotateZ}deg)
    translate(${laptopTranslateX}px, -${laptopTranslateY}px)
  `;

  laptopLevelIdsList.map((levelId, index) => {
    const level = document.getElementById(levelId);

    // laptop in out translate Y animation
    let oldTranslateYMax = oldLaptopInMax;
    let translateYBounding = laptopInBounding;
    let translateYConversionType = [ConversionTypeEnum.REVERSE];
    if (laptopFoldBackBounding > 0) {
      oldTranslateYMax = oldLaptopFoldBackMax;
      translateYBounding = laptopFoldBackBounding;
      translateYConversionType = [ConversionTypeEnum.NEGATIVE];
    }
    const levelTranslateY = getValueInNewRange(
      0,
      oldTranslateYMax,
      translateYBounding,
      0,
      (32 * (index)),
      translateYConversionType,
    );

    // laptop-in-out rotate X animation
    let oldRotateXMax = oldLaptopInMax;
    let rotateXBounding = laptopInBounding;
    let newRotateXMax = 90;
    let rotateXConversionType = [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE];
    if (laptopFoldBackBounding > 0) {
      oldRotateXMax = oldLaptopFoldBackMax;
      rotateXBounding = laptopFoldBackBounding;
      newRotateXMax = 90;
      rotateXConversionType = [];
    }
    if (index === 0) newRotateXMax = 0;
    const levelRotateX = getValueInNewRange(
      0,
      oldRotateXMax,
      rotateXBounding,
      0,
      newRotateXMax,
      rotateXConversionType,
    );

    let levelTransformOrigin = 'center';
    if (laptopOutBounding > 0) levelTransformOrigin = 'center bottom';

    level.style.transformOrigin = levelTransformOrigin;
    level.style.transform = `
      perspective(1200px)
      translateY(${levelTranslateY}px)
      rotateX(${levelRotateX}deg)
    `;
    return null;
  });
};

export const laptop2InOutBottomAnimation = (
  laptopInId,
  laptopOpenFlatId,
  laptopFoldBackwardsId,
) => {
  const {
    topBounding: laptopInBounding,
    maxTopBounding: oldLaptopInMax,
  } = getElementTopBounding(laptopInId);

  const {
    topBounding: laptopOpenFlatBounding,
    maxTopBounding: oldLaptopOpenFlatMax,
  } = getElementTopBounding(laptopOpenFlatId);

  const {
    topBounding: laptopFoldBackBounding,
    maxTopBounding: oldLaptopFoldBackMax,
  } = getElementTopBounding(laptopFoldBackwardsId);

  const laptopBottomTranslateY = getValueInNewRange(
    0,
    oldLaptopFoldBackMax,
    laptopFoldBackBounding,
    0,
    0,
  );

  // laptop-in-out bottom rotateX animation
  let oldRotateXMax = oldLaptopInMax;
  let rotateXBounding = laptopInBounding;
  let newRotateXMin = 90;
  let newRotateXMax = 102;
  if (laptopOpenFlatBounding > 0) {
    oldRotateXMax = oldLaptopOpenFlatMax;
    rotateXBounding = laptopOpenFlatBounding;
    newRotateXMin = 102;
    newRotateXMax = 180;
  }
  if (laptopFoldBackBounding > 0) {
    oldRotateXMax = oldLaptopFoldBackMax;
    rotateXBounding = laptopFoldBackBounding;
    newRotateXMin = 180;
    newRotateXMax = 271;
  }
  const laptopBottomRotateX = getValueInNewRange(
    0,
    oldRotateXMax,
    rotateXBounding,
    newRotateXMin,
    newRotateXMax,
    [ConversionTypeEnum.NEGATIVE],
  );

  const laptopBottom = document.getElementById(ElementIDEnum.LAPTOP_2_BOTTOM);
  laptopBottom.style.transform = `
    perspective(1200px)
    translateY(${laptopBottomTranslateY}px)
    rotateX(${laptopBottomRotateX}deg)
  `;
};
