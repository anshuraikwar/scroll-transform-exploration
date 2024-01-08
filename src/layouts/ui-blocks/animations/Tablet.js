import { getElementTopBounding } from '../../../utils/boundingUtil';
import { ConversionTypeEnum } from '../../../constants/enums/ConversionType.ts';
import { getValueInNewRange } from '../../../utils/AnimationUtil';
import { ElementIDEnum, ScrollElementIDEnum } from '../../../constants/enums/ElementIDEnum.ts';

export const tabletInOutOpacityAnimationUtil = () => {
  const {
    topBounding: tabletFadeInBounding,
    maxTopBounding: oldTabletFadeInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TABLET_FADE_IN);
  const {
    topBounding: tabletFadeOutBounding,
    maxTopBounding: oldTabletFadeOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TABLET_FADE_OUT);

  // laptop in out opacity animation
  let oldOpacityMax = oldTabletFadeInMax;
  let opacityBounding = tabletFadeInBounding;
  let opacityConversionType = [];
  if (tabletFadeOutBounding > 0) {
    oldOpacityMax = oldTabletFadeOutMax;
    opacityBounding = tabletFadeOutBounding;
    opacityConversionType = [ConversionTypeEnum.REVERSE];
  }
  const tabletOpacity = getValueInNewRange(
    0,
    oldOpacityMax,
    opacityBounding,
    0,
    1,
    opacityConversionType,
  );
  return tabletOpacity;
};

export const tabletInOutAnimation = () => {
  const {
    topBounding: tabletInBounding,
    maxTopBounding: oldTabletInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TABLET_IN);
  const {
    topBounding: tabletOutBounding,
    maxTopBounding: oldTabletOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TABLET_OUT);

  const tabletTranslateX = getValueInNewRange(
    0,
    oldTabletInMax,
    tabletInBounding,
    0,
    16,
    [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE],
  );
  const tabletTranslateY = getValueInNewRange(
    0,
    oldTabletInMax,
    tabletInBounding,
    0,
    176,
    [ConversionTypeEnum.REVERSE],
  );
  const tablet = document.getElementById(ElementIDEnum.TABLET);
  tablet.style.opacity = tabletInOutOpacityAnimationUtil();
  tablet.style.transform = `
    // translate(${tabletTranslateX}px, ${tabletTranslateY}px)
  `;

  const tabletLevelList = [
    ElementIDEnum.TABLET_LEVEL_0,
    ElementIDEnum.TABLET_LEVEL_1,
    ElementIDEnum.TABLET_LEVEL_2,
    ElementIDEnum.TABLET_LEVEL_3,
  ];
  tabletLevelList.map((levelId, index) => {
    const level = document.getElementById(levelId);

    // tablet in out translate X animation
    const levelScale = getValueInNewRange(
      0,
      oldTabletInMax,
      tabletInBounding,
      0.85,
      1,
      [ConversionTypeEnum.REVERSE],
    );

    // tablet in out translate X animation
    let oldTranslateXMax = oldTabletInMax;
    let translateXBounding = tabletInBounding;
    let translateXConversionType = [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE];
    if (tabletOutBounding > 0) {
      oldTranslateXMax = oldTabletOutMax;
      translateXBounding = tabletOutBounding;
      translateXConversionType = [];
    }
    const levelTranslateX = getValueInNewRange(
      0,
      oldTranslateXMax,
      translateXBounding,
      0,
      (32 * index),
      translateXConversionType,
    );
    // tablet in out translate Y animation
    let oldTranslateYMax = oldTabletInMax;
    let translateYBounding = tabletInBounding;
    let translateYConversionType = [ConversionTypeEnum.REVERSE];
    if (tabletOutBounding > 0) {
      oldTranslateYMax = oldTabletOutMax;
      translateYBounding = tabletOutBounding;
      translateYConversionType = [ConversionTypeEnum.NEGATIVE];
    }
    const levelTranslateY = getValueInNewRange(
      0,
      oldTranslateYMax,
      translateYBounding,
      0,
      (32 * index),
      translateYConversionType,
    );
    const levelTranslateZ = -370;
    getValueInNewRange(
      0,
      oldTabletInMax,
      tabletInBounding,
      0,
      (32 * 6),
      [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE],
    );

    // tablet in rotate X animation
    let oldRotateXMax = oldTabletInMax;
    let rotateXBounding = tabletInBounding;
    let rotateXConversionType = [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE];
    if (tabletOutBounding > 0) {
      oldRotateXMax = oldTabletOutMax;
      rotateXBounding = tabletOutBounding;
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

    // tablet in rotate Y animation
    let oldRotateYMax = oldTabletInMax;
    let rotateYBounding = tabletInBounding;
    let rotateYConversionType = [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE];
    if (tabletOutBounding > 0) {
      oldRotateYMax = oldTabletOutMax;
      rotateYBounding = tabletOutBounding;
      rotateYConversionType = [];
    }
    const levelRotateY = getValueInNewRange(
      0,
      oldRotateYMax,
      rotateYBounding,
      0,
      45,
      rotateYConversionType,
    );

    // tablet in rotate Z animation
    let oldRotateZMax = oldTabletInMax;
    let rotateZBounding = tabletInBounding;
    let rotateZConversionType = [ConversionTypeEnum.REVERSE, ConversionTypeEnum.NEGATIVE];
    if (tabletOutBounding > 0) {
      oldRotateZMax = oldTabletOutMax;
      rotateZBounding = tabletOutBounding;
      rotateZConversionType = [ConversionTypeEnum.NEGATIVE];
    }
    const levelRotateZ = getValueInNewRange(
      0,
      oldRotateZMax,
      rotateZBounding,
      0,
      90,
      rotateZConversionType,
    );

    level.style.transform = `
      perspective(1200px)
      scale(${levelScale})
      translateX(${levelTranslateX}px)
      translateY(${levelTranslateY}px)
      translateZ(${levelTranslateZ}px)
      rotateX(${levelRotateX}deg)
      rotateY(${levelRotateY}deg)
      rotateZ(${levelRotateZ}deg)
    `;
    return null;
  });
};
