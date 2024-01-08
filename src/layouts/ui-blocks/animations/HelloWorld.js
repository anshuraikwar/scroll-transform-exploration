import { ElementIDEnum, ScrollElementIDEnum } from '../../../constants/enums/ElementIDEnum.ts';
import { ConversionTypeEnum } from '../../../constants/enums/ConversionType.ts';
import { getValueInNewRange } from '../../../utils/AnimationUtil';
import { getElementBottomBounding, getElementTopBounding } from '../../../utils/boundingUtil';
import {
  helloOutRotateYAnimationUtil,
  helloOutTranslateXAnimationUtil,
  introTextFadeInOutOpacityUtil,
  introTextInOutTranslateYUtil,
  introTextRotateXOutUtil,
  introTextScaleOutUtil,
} from '../../../utils/ReusableAnimationUtils';

export const sheetInAnimation = () => {
  const {
    bottomBounding: sheetInBoundingBottom,
    maxBottomBounding: maxSheetInBoundingBottom,
  } = getElementBottomBounding(ScrollElementIDEnum.SHEET_IN);
  const {
    bottomBounding: homeScreenScaleBoundingBottom,
    maxBottomBounding: maxHomeScreenScaleBoundingBottom,
  } = getElementBottomBounding(ScrollElementIDEnum.HOME_SCREEN_SCALE);

  const HelloWorld = document.getElementById(ElementIDEnum.HELLO_WORLD);
  const Sheet = document.getElementById(ElementIDEnum.SHEET);

  if (HelloWorld && Sheet) {
    const bottom = sheetInBoundingBottom + homeScreenScaleBoundingBottom;
    const oldMax = maxSheetInBoundingBottom + maxHomeScreenScaleBoundingBottom;

    const sheetTopBounding = getValueInNewRange(
      0,
      oldMax,
      bottom,
      HelloWorld.clientHeight * 0.075,
      HelloWorld.clientHeight,
      [ConversionTypeEnum.PERCENT],
      HelloWorld.clientHeight,
    );
    Sheet.style.top = `${sheetTopBounding}%`;
  }
};
export const homeBarColorAnimation = () => {
  const { topBounding } = getElementTopBounding(ScrollElementIDEnum.HOME_BAR_COLOR);
  const HomeBar = document.getElementById(ElementIDEnum.HOME_BAR);
  if (HomeBar) {
    let homeBarColor = 'var(--elevation_10)';
    if (topBounding > 0) homeBarColor = 'var(--elevation_2)';
    HomeBar.style.backgroundColor = homeBarColor;
  }
};
export const scrollTextAnimation = () => {
  const {
    bottomBounding,
    minBottomBounding: oldMin,
    maxBottomBounding: oldMax,
  } = getElementBottomBounding(ScrollElementIDEnum.TEXT_SCROLL_FADE_OUT);
  const ScrollText = document.getElementById(ElementIDEnum.SCROLL_CONT);

  if (ScrollText) {
    const scrollTextTranslateY = getValueInNewRange(
      oldMin,
      oldMax,
      bottomBounding,
      0,
      40,
      [ConversionTypeEnum.REVERSE],
    );
    const scrollTextOpacity = getValueInNewRange(
      oldMin,
      oldMax,
      bottomBounding,
      0,
      1,
    );
    ScrollText.style.opacity = scrollTextOpacity;
    ScrollText.style.transform = `translateX(-50%) translateY(-${scrollTextTranslateY}px)`;
  }
};
export const homeScreenScaleAnimation = () => {
  const {
    bottomBounding,
    minBottomBounding: oldMin,
    maxBottomBounding: oldMax,
  } = getElementBottomBounding(ScrollElementIDEnum.HOME_SCREEN_SCALE);

  const HomeScreen = document.getElementById(ElementIDEnum.HOME_SCREEN);
  if (HomeScreen) {
    const homeScreenScale = getValueInNewRange(
      oldMin,
      oldMax,
      bottomBounding,
      0.9,
      1,
    );
    const homeScreenTranslateY = getValueInNewRange(
      oldMin,
      oldMax,
      bottomBounding,
      0,
      8,
      [ConversionTypeEnum.REVERSE],
    );
    HomeScreen.style.transform = `scale(${homeScreenScale}) translateY(${homeScreenTranslateY}px)`;
  }
};
export const helloWorldAnimation = () => {
  const {
    bottomBounding,
    minBottomBounding: oldMin,
    maxBottomBounding: oldMax,
  } = getElementBottomBounding(ScrollElementIDEnum.HELLO_WORLD_IN);
  const helloWorldCont = document.getElementById(ElementIDEnum.HELLO_WORLD_CONT);

  if (helloWorldCont) {
    const helloWorldOpacity = getValueInNewRange(
      oldMax / 2,
      oldMax,
      bottomBounding,
      0,
      1,
      [ConversionTypeEnum.REVERSE],
    );
    const helloWorldRotateX = getValueInNewRange(
      oldMin,
      oldMax,
      bottomBounding,
      0,
      720,
    );
    const helloWorldTranslateY = getValueInNewRange(
      oldMin,
      oldMax,
      bottomBounding,
      0,
      80,
    );
    helloWorldCont.style.opacity = helloWorldOpacity;
    helloWorldCont.style.transform = `
      perspective(1200px)
      translateX(-50%)
      translateY(${helloWorldTranslateY}px)
      rotateX(-${helloWorldRotateX}deg)
    `;
  }
};
export const ImNateSmithAnimation = () => {
  const {
    bottomBounding: imNateSmithInBottomBounding,
    minBottomBounding: oldImNateSmithInMin,
    maxBottomBounding: oldImNateSmithInMax,
  } = getElementBottomBounding(ScrollElementIDEnum.IM_NATE_SMITH_IN);
  const {
    bottomBounding: losAngelesBasedBottomBounding,
    minBottomBounding: oldLosAngelesBasedMin,
    maxBottomBounding: oldLosAngelesBasedMax,
  } = getElementBottomBounding(ScrollElementIDEnum.LOS_ANGELES_BASED_IN);

  const intros = document.getElementById(ElementIDEnum.INTROS);
  const imNateSmith = document.getElementById(ElementIDEnum.IM_NATE_SMITH_CONT);

  if (intros) {
    const introsOpacity = getValueInNewRange(
      oldImNateSmithInMin,
      oldImNateSmithInMax,
      imNateSmithInBottomBounding,
      0,
      1,
      [ConversionTypeEnum.REVERSE],
    );
    const introsTranslateY = getValueInNewRange(
      oldImNateSmithInMin,
      oldImNateSmithInMax,
      imNateSmithInBottomBounding,
      0,
      40,
    );
    const imNateSmithTranslateY = getValueInNewRange(
      oldLosAngelesBasedMin,
      oldLosAngelesBasedMax,
      losAngelesBasedBottomBounding,
      0,
      40,
      [ConversionTypeEnum.REVERSE],
    );
    intros.style.opacity = introsOpacity;
    intros.style.transform = `
      translateX(-50%)
      translateY(${introsTranslateY}px)
    `;

    imNateSmith.style.transform = `
      perspective(1200px)
      translateX(-50%)
      translateY(-${imNateSmithTranslateY}px)
    `;
  }
};
export const textAAnimation = () => {
  const {
    topBounding: losAngelesBasedTopBounding,
    maxTopBounding: oldLosAngelesBasedInMax,
  } = getElementTopBounding(ScrollElementIDEnum.LOS_ANGELES_BASED_IN);
  const {
    topBounding: meticulousVisualTopBounding,
    maxTopBounding: oldMeticulousVisualInMax,
  } = getElementTopBounding(ScrollElementIDEnum.METICULOUS_VISUAL_IN);
  const {
    topBounding: fluidInterfaceTopBounding,
    maxTopBounding: oldFluidInterfaceInMax,
  } = getElementTopBounding(ScrollElementIDEnum.FLUID_INTERFACE_IN);
  const {
    topBounding: aDesignerTopBounding,
    maxTopBounding: oldADesignerInMax,
  } = getElementTopBounding(ScrollElementIDEnum.A_DESIGNER_IN);
  const {
    topBounding: currentJobTopBounding,
    maxTopBounding: oldCurrentJobInMax,
  } = getElementTopBounding(ScrollElementIDEnum.CURRENT_JOB_IN);

  const a = document.getElementById(ElementIDEnum.A_CONT);

  if (a) {
    // text opacity animation
    const textOpacity = introTextFadeInOutOpacityUtil(
      oldLosAngelesBasedInMax,
      losAngelesBasedTopBounding,
      oldCurrentJobInMax,
      currentJobTopBounding,
    );

    // text translate Y animation
    const textTranslateY = introTextInOutTranslateYUtil(
      // losAngelesBasedIn
      oldLosAngelesBasedInMax,
      losAngelesBasedTopBounding,
      // currentJobIn
      oldCurrentJobInMax,
      currentJobTopBounding,
    );

    // text translate X animation
    // meticulousVisualIn
    let textTranslateXOldMax = oldMeticulousVisualInMax;
    let textTranslateXBounding = meticulousVisualTopBounding;
    let textTranslateXNewMin = 0;
    let textTranslateXNewMax = 4;
    // fluidInterfaceIn
    if (fluidInterfaceTopBounding > 0) {
      textTranslateXOldMax = oldFluidInterfaceInMax;
      textTranslateXBounding = fluidInterfaceTopBounding;
      textTranslateXNewMin = 4;
      textTranslateXNewMax = 19;
    }
    // aDesignerIn
    if (aDesignerTopBounding > 0) {
      textTranslateXOldMax = oldADesignerInMax;
      textTranslateXBounding = aDesignerTopBounding;
      textTranslateXNewMin = 19;
      textTranslateXNewMax = 85;
    }
    const textTranslateX = getValueInNewRange(
      0,
      textTranslateXOldMax,
      textTranslateXBounding,
      textTranslateXNewMin,
      textTranslateXNewMax,
    );

    // text scale animation
    const textScale = introTextScaleOutUtil(
      oldCurrentJobInMax,
      currentJobTopBounding,
    );
    // text rotate X animation
    const textRotateX = introTextRotateXOutUtil(
      oldCurrentJobInMax,
      currentJobTopBounding,
    );

    a.style.opacity = textOpacity;
    a.style.transform = `
      perspective(1200px)
      translateX(${textTranslateX}px)
      translateY(${textTranslateY}px)
      scale(${textScale})
      rotateX(${textRotateX}deg)
    `;
  }
};

export const textLosAngelesAnimation = () => {
  const {
    topBounding: losAngelesBasedTopBounding,
    maxTopBounding: oldLosAngelesBasedInMax,
  } = getElementTopBounding(ScrollElementIDEnum.LOS_ANGELES_BASED_IN);
  const {
    topBounding: meticulousVisualTopBounding,
    maxTopBounding: oldMeticulousVisualInMax,
  } = getElementTopBounding(ScrollElementIDEnum.METICULOUS_VISUAL_IN);

  const losAngelesBased = document.getElementById(ElementIDEnum.LOS_ANGELES_BASED_CONT);

  if (losAngelesBased) {
    // text opacity animation
    const textOpacity = introTextFadeInOutOpacityUtil(
      oldLosAngelesBasedInMax,
      losAngelesBasedTopBounding,
      oldMeticulousVisualInMax,
      meticulousVisualTopBounding,
    );

    // text translate Y animation
    const textTranslateY = introTextInOutTranslateYUtil(
      // losAngelesBasedIn
      oldLosAngelesBasedInMax,
      losAngelesBasedTopBounding,
      // meticulousVisualIn
      oldMeticulousVisualInMax,
      meticulousVisualTopBounding,
    );

    // text scale animation
    const textScale = introTextScaleOutUtil(
      oldMeticulousVisualInMax,
      meticulousVisualTopBounding,
    );
    // text rotate X animation
    const textRotateX = introTextRotateXOutUtil(
      oldMeticulousVisualInMax,
      meticulousVisualTopBounding,
    );

    losAngelesBased.style.opacity = textOpacity;
    losAngelesBased.style.transform = `
      perspective(1200px)
      translateY(${textTranslateY}px)
      scale(${textScale})
      rotateX(-${textRotateX}deg)
    `;
  }
};

export const textDesignerAnimation = () => {
  const {
    topBounding: losAngelesBasedTopBounding,
    maxTopBounding: oldLosAngelesBasedInMax,
  } = getElementTopBounding(ScrollElementIDEnum.LOS_ANGELES_BASED_IN);
  const {
    topBounding: meticulousVisualTopBounding,
    maxTopBounding: oldMeticulousVisualInMax,
  } = getElementTopBounding(ScrollElementIDEnum.METICULOUS_VISUAL_IN);
  const {
    topBounding: fluidInterfaceTopBounding,
    maxTopBounding: oldFluidInterfaceInMax,
  } = getElementTopBounding(ScrollElementIDEnum.FLUID_INTERFACE_IN);
  const {
    topBounding: aDesignerTopBounding,
    maxTopBounding: oldADesignerInMax,
  } = getElementTopBounding(ScrollElementIDEnum.A_DESIGNER_IN);
  const {
    topBounding: currentJobTopBounding,
    maxTopBounding: oldCurrentJobInMax,
  } = getElementTopBounding(ScrollElementIDEnum.CURRENT_JOB_IN);

  const designer = document.getElementById(ElementIDEnum.DESIGNER_CONT);

  if (designer) {
    // text opacity animation
    const textOpacity = introTextFadeInOutOpacityUtil(
      oldLosAngelesBasedInMax,
      losAngelesBasedTopBounding,
      oldCurrentJobInMax,
      currentJobTopBounding,
    );

    // text translate Y animation
    const textTranslateY = introTextInOutTranslateYUtil(
      // losAngelesBasedIn
      oldLosAngelesBasedInMax,
      losAngelesBasedTopBounding,
      // currentJobIn
      oldCurrentJobInMax,
      currentJobTopBounding,
    );

    // text translate X animation
    // meticulousVisualIn
    let textTranslateXOldMax = oldMeticulousVisualInMax;
    let textTranslateXBounding = meticulousVisualTopBounding;
    let textTranslateXNewMin = 0;
    let textTranslateXNewMax = 5;
    // fluidInterfaceIn
    if (fluidInterfaceTopBounding > 0) {
      textTranslateXOldMax = oldFluidInterfaceInMax;
      textTranslateXBounding = fluidInterfaceTopBounding;
      textTranslateXNewMin = 5;
      textTranslateXNewMax = 20;
    }
    // aDesignerIn
    if (aDesignerTopBounding > 0) {
      textTranslateXOldMax = oldADesignerInMax;
      textTranslateXBounding = aDesignerTopBounding;
      textTranslateXNewMin = 20;
      textTranslateXNewMax = 85;
    }
    const textTranslateX = getValueInNewRange(
      0,
      textTranslateXOldMax,
      textTranslateXBounding,
      textTranslateXNewMin,
      textTranslateXNewMax,
    );

    // text scale animation
    const textScale = introTextScaleOutUtil(
      oldCurrentJobInMax,
      currentJobTopBounding,
    );
    // text rotate X animation
    const textRotateX = introTextRotateXOutUtil(
      oldCurrentJobInMax,
      currentJobTopBounding,
    );

    designer.style.opacity = textOpacity;
    designer.style.transform = `
        perspective(1200px)
        translateX(-${textTranslateX}px)
        translateY(${textTranslateY}px)
        scale(${textScale})
        rotateX(${textRotateX}deg)
      `;
  }
};

export const textMeticulousVisualAnimation = () => {
  const {
    topBounding: meticulousVisualTopBounding,
    maxTopBounding: oldMeticulousVisualInMax,
  } = getElementTopBounding(ScrollElementIDEnum.METICULOUS_VISUAL_IN);
  const {
    topBounding: fluidInterfaceTopBounding,
    maxTopBounding: oldFluidInterfaceInMax,
  } = getElementTopBounding(ScrollElementIDEnum.FLUID_INTERFACE_IN);

  const meticulousVisual = document.getElementById(ElementIDEnum.METICULOUS_DESIGNER_CONT);

  if (meticulousVisual) {
    // text opacity animation
    const textOpacity = introTextFadeInOutOpacityUtil(
      oldMeticulousVisualInMax,
      meticulousVisualTopBounding,
      oldFluidInterfaceInMax,
      fluidInterfaceTopBounding,
    );

    // text translate Y animation
    const textTranslateY = introTextInOutTranslateYUtil(
      // meticulousVisualIn
      oldMeticulousVisualInMax,
      meticulousVisualTopBounding,
      // fluidInterfaceIn
      oldFluidInterfaceInMax,
      fluidInterfaceTopBounding,
    );

    // text scale animation
    const textScale = introTextScaleOutUtil(
      oldFluidInterfaceInMax,
      fluidInterfaceTopBounding,
    );
    // text rotate X animation
    const textRotateX = introTextRotateXOutUtil(
      oldFluidInterfaceInMax,
      fluidInterfaceTopBounding,
    );

    meticulousVisual.style.opacity = textOpacity;
    meticulousVisual.style.transform = `
        perspective(1200px)
        translateY(${textTranslateY}px)
        scale(${textScale})
        rotateX(-${textRotateX}deg)
      `;
  }
};
export const textFluidInterfaceAnimation = () => {
  const {
    topBounding: fluidInterfaceTopBounding,
    maxTopBounding: oldFluidInterfaceInMax,
  } = getElementTopBounding(ScrollElementIDEnum.FLUID_INTERFACE_IN);
  const {
    topBounding: aDesignerTopBounding,
    maxTopBounding: oldADesignerInMax,
  } = getElementTopBounding(ScrollElementIDEnum.A_DESIGNER_IN);

  const fluidInterface = document.getElementById(ElementIDEnum.FLUID_INTERFACE_CONT);

  if (fluidInterface) {
    const textOpacity = getValueInNewRange(
      0,
      oldFluidInterfaceInMax,
      fluidInterfaceTopBounding,
      0,
      1,
    );
    const textTranslateY = getValueInNewRange(
      0,
      oldFluidInterfaceInMax,
      fluidInterfaceTopBounding,
      0,
      20,
      [ConversionTypeEnum.REVERSE],
    );
    // text scale animation
    const textScale = getValueInNewRange(
      0,
      oldADesignerInMax,
      aDesignerTopBounding,
      0,
      1,
      [ConversionTypeEnum.REVERSE],
    );
    fluidInterface.style.opacity = textOpacity;
    fluidInterface.style.transform = `
      perspective(1200px)
      translateY(${textTranslateY}px)
      scale(${textScale})
      rotateX(0deg)
    `;
  }
};
export const textCurrentJobAnimation = () => {
  const {
    topBounding: currentJobTopBounding,
    maxTopBounding: oldCurrentJobInMax,
  } = getElementTopBounding(ScrollElementIDEnum.CURRENT_JOB_IN);
  const {
    topBounding: scrollForWorkBounding,
    maxTopBounding: oldScrollForWorkMax,
  } = getElementTopBounding(ScrollElementIDEnum.SCROLL_FOR_WORK_IN);

  const currentJob = document.getElementById(ElementIDEnum.CURRENT_JOB_CONT);

  if (currentJob) {
    // text opacity animation
    const textOpacity = introTextFadeInOutOpacityUtil(
      oldCurrentJobInMax,
      currentJobTopBounding,
      oldScrollForWorkMax,
      scrollForWorkBounding,
    );

    // text translate Y animation
    const textTranslateY = introTextInOutTranslateYUtil(
      // currentJobIn
      oldCurrentJobInMax,
      currentJobTopBounding,
      // scrollForWork
      oldScrollForWorkMax,
      scrollForWorkBounding,
    );

    // text scale animation
    const textScale = introTextScaleOutUtil(
      oldScrollForWorkMax,
      scrollForWorkBounding,
    );
    // text rotate X animation
    const textRotateX = introTextRotateXOutUtil(
      oldScrollForWorkMax,
      scrollForWorkBounding,
    );

    currentJob.style.opacity = textOpacity;
    currentJob.style.transform = `
      perspective(1200px)
      translateX(-50%)
      translateY(${textTranslateY}px)
      scale(${textScale})
      rotateX(${textRotateX}deg)
    `;
  }
};
export const scrollForWorkAnimation = () => {
  const {
    topBounding: scrollForWorkBounding,
    maxTopBounding: oldScrollForWorkMax,
  } = getElementTopBounding(ScrollElementIDEnum.SCROLL_FOR_WORK_IN);

  const scrollForWork = document.getElementById(ElementIDEnum.SCROLL_FOR_WORK_CONT);

  if (scrollForWork) {
    const textOpacity = getValueInNewRange(
      0,
      oldScrollForWorkMax,
      scrollForWorkBounding,
      0,
      1,
    );
    const textTranslateY = getValueInNewRange(
      0,
      oldScrollForWorkMax,
      scrollForWorkBounding,
      0,
      20,
      [ConversionTypeEnum.REVERSE],
    );

    scrollForWork.style.opacity = textOpacity;
    scrollForWork.style.transform = `
      perspective(1200px)
      translateX(-50%)
      translateY(${textTranslateY}px)
      scale(1)
      rotateX(0deg)
    `;
  }
};
export const helloOutAnimation = () => {
  [
    ElementIDEnum.HELLO_WORLD_LEVEL_0,
    ElementIDEnum.HELLO_WORLD_LEVEL_1,
    ElementIDEnum.HELLO_WORLD_LEVEL_2,
    ElementIDEnum.HELLO_WORLD_LEVEL_3,
  ].map((levelId, index) => {
    const level = document.getElementById(levelId);

    const levelRotateY = helloOutRotateYAnimationUtil();
    const levelTranslateX = helloOutTranslateXAnimationUtil(index);
    level.style.transform = `
      perspective(1200px)
      translateX(-${levelTranslateX}px)
      rotateY(-${levelRotateY}deg)
    `;
    return null;
  });

  const {
    topBounding: helloFadeOutBounding,
    maxTopBounding: oldHelloFadeOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.HELLO_FADE_OUT);
  const helloWorld = document.getElementById(ElementIDEnum.HELLO_WORLD);

  helloWorld.style.opacity = getValueInNewRange(
    0,
    oldHelloFadeOutMax,
    helloFadeOutBounding,
    0,
    1,
    [ConversionTypeEnum.REVERSE],
  );
};
