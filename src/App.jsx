import React, { useEffect } from 'react';
import './App.css';
import './layouts/ui-blocks/app-theme.css';

import AnimationContainer from './layouts/components/animation-container/AnimationContainer';
import MainContent from './layouts/components/main-content/MainContent';
import {
  helloOutAnimation,
  helloWorldAnimation,
  homeBarColorAnimation,
  homeScreenScaleAnimation,
  ImNateSmithAnimation,
  scrollForWorkAnimation,
  scrollTextAnimation,
  sheetInAnimation,
  textAAnimation,
  textCurrentJobAnimation,
  textDesignerAnimation,
  textFluidInterfaceAnimation,
  textLosAngelesAnimation,
  textMeticulousVisualAnimation,
} from './layouts/ui-blocks/animations/HelloWorld';
import { romentoInPhoneOutAnimation, romentoVideoInAnimation } from './layouts/ui-blocks/animations/Romento';
import { huluTVInOutAnimation, huluTvStandOutAnimation } from './layouts/ui-blocks/animations/HuluTV';
import {
  laptop2InOutAnimation,
  laptop2InOutBottomAnimation,
  laptopInBottomAnimation,
  laptopInBottomContAnimation,
  laptopInOutAnimation,
} from './layouts/ui-blocks/animations/Laptop';
import { ElementIDEnum, ScrollElementIDEnum } from './constants/enums/ElementIDEnum.ts';
import { conclusionAnimation } from './layouts/ui-blocks/animations/Conclusion';
import { tabletInOutAnimation } from './layouts/ui-blocks/animations/Tablet';
import { animatedContainerScaleAnimation } from './layouts/ui-blocks/animations/AnimatedContainer';

function App() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // whole animated container
      animatedContainerScaleAnimation();

      // hello world animation
      sheetInAnimation();
      homeBarColorAnimation();
      scrollTextAnimation();
      homeScreenScaleAnimation();
      helloWorldAnimation();

      // intros animation
      ImNateSmithAnimation();

      textAAnimation();
      textLosAngelesAnimation();
      textDesignerAnimation();

      textMeticulousVisualAnimation();
      textFluidInterfaceAnimation();

      textCurrentJobAnimation();
      scrollForWorkAnimation();

      // phone out animation
      helloOutAnimation();

      // romento in phone out animation
      romentoInPhoneOutAnimation();
      romentoVideoInAnimation();

      // hulu tv animation
      huluTVInOutAnimation();
      huluTvStandOutAnimation();

      // laptop-1 animation
      laptopInBottomContAnimation(
        ScrollElementIDEnum.LAPTOP_1_BOTTOM_FADE_IN,
        ElementIDEnum.LAPTOP_1_BOTTOM_CONT,
      );
      laptopInBottomAnimation(
        ScrollElementIDEnum.LAPTOP_1_IN,
        ScrollElementIDEnum.LAPTOP_1_OUT,
        ElementIDEnum.LAPTOP_1_BOTTOM,
      );
      laptopInOutAnimation(
        [
          ElementIDEnum.LAPTOP_1_LEVEL_0,
          ElementIDEnum.LAPTOP_1_LEVEL_1,
          ElementIDEnum.LAPTOP_1_LEVEL_2,
          ElementIDEnum.LAPTOP_1_LEVEL_3,
        ],
        ScrollElementIDEnum.LAPTOP_1_IN,
        ScrollElementIDEnum.LAPTOP_1_OUT,
        ElementIDEnum.LAPTOP_1,
        ScrollElementIDEnum.LAPTOP_1_FADE_IN,
        ScrollElementIDEnum.LAPTOP_1_FADE_OUT,
      );

      // laptop-2 animation
      laptopInBottomContAnimation(
        ScrollElementIDEnum.LAPTOP_2_BOTTOM_FADE_IN,
        ElementIDEnum.LAPTOP_2_BOTTOM_CONT,
      );
      laptop2InOutBottomAnimation(
        ScrollElementIDEnum.LAPTOP_2_IN,
        ScrollElementIDEnum.LAPTOP_2_OPEN_FLAT,
        ScrollElementIDEnum.LAPTOP_2_FOLD_BACKWARDS,
      );
      laptop2InOutAnimation(
        [
          ElementIDEnum.LAPTOP_2_TOP,
          ElementIDEnum.LAPTOP_2_LEVEL_0,
          ElementIDEnum.LAPTOP_2_LEVEL_1,
          ElementIDEnum.LAPTOP_2_LEVEL_2,
          ElementIDEnum.LAPTOP_2_LEVEL_3,
        ],
        ScrollElementIDEnum.LAPTOP_2_IN,
        ScrollElementIDEnum.LAPTOP_2_OUT,
        ElementIDEnum.LAPTOP_2,
        ScrollElementIDEnum.LAPTOP_2_FADE_IN,
        ScrollElementIDEnum.LAPTOP_2_FADE_OUT,
      );

      // tablet animation
      tabletInOutAnimation();

      // conclusion animation
      conclusionAnimation(
        ScrollElementIDEnum.CONCLUSION_1_IN,
        ElementIDEnum.CONCLUSION_1,
      );
      conclusionAnimation(
        ScrollElementIDEnum.CONCLUSION_2_IN,
        ElementIDEnum.CONCLUSION_2,
      );
    });
  });

  return (
    <div className="App" id="app">
      <AnimationContainer />
      <MainContent />
      <div className="conclusion_cont">
        <div className="conclusion" id={ElementIDEnum.CONCLUSION_1}>
          <p className="conclusion_text">
            Thanks for visiting.
          </p>
        </div>
        <div className="conclusion" id={ElementIDEnum.CONCLUSION_2}>
          <p className="conclusion_text">
            This project is inspired by
            {' '}
            <a
              href="https://natesmith.design/scroll-transform-exploration"
              target="_blank"
              rel="noreferrer"
            >
              scroll-transform-exploration
            </a>
            {' '}
            by nate smith.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
