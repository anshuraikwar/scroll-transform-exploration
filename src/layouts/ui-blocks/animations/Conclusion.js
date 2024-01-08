import { getValueInNewRange } from '../../../utils/AnimationUtil';
import { getElementTopBounding } from '../../../utils/boundingUtil';
import { ConversionTypeEnum } from '../../../constants/enums/ConversionType.ts';

export const conclusionAnimation = (
  conclusionInId,
  conclusionId,
) => {
  const {
    topBounding: conclusionInBounding,
    maxTopBounding: oldConclusionInMax,
  } = getElementTopBounding(conclusionInId);

  const conclusion = document.getElementById(conclusionId);

  const conclusionOpacity = getValueInNewRange(
    0,
    oldConclusionInMax,
    conclusionInBounding,
    0,
    1,
  );

  const conclusionTranslateY = getValueInNewRange(
    0,
    oldConclusionInMax,
    conclusionInBounding,
    0,
    20,
    [ConversionTypeEnum.REVERSE],
  );

  conclusion.style.opacity = conclusionOpacity;
  conclusion.style.transform = `
    perspective(1200px)
    translateY(${conclusionTranslateY}px)
  `;
};
