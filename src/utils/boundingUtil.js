import { getMinMaxBottomBounding, getMinMaxTopBounding } from './AnimationUtil';

export const getElementTopBounding = (
  elementId,
) => {
  const element = document.getElementById(elementId);
  const elementBounding = element.getBoundingClientRect();
  const { top: currentTopBounding } = elementBounding;

  const minTopBounding = 0;
  const maxTopBounding = element.clientHeight;
  const topBounding = getMinMaxTopBounding(
    minTopBounding,
    maxTopBounding,
    currentTopBounding,
  );

  return { topBounding, minTopBounding, maxTopBounding };
};
export const getElementBottomBounding = (
  elementId,
) => {
  const element = document.getElementById(elementId);
  const elementBounding = element.getBoundingClientRect();
  const { bottom: currentBottomBounding } = elementBounding;

  const minBottomBounding = 0;
  const maxBottomBounding = element.clientHeight;
  const bottomBounding = getMinMaxBottomBounding(
    minBottomBounding,
    maxBottomBounding,
    currentBottomBounding,
  );

  return { bottomBounding, minBottomBounding, maxBottomBounding };
};
