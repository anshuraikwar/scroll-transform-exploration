/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';

// import: styles
import './animation-container-styles/AnimationContainer.css';
import './animation-container-styles/HelloWorldStyles.css';
import './animation-container-styles/RomentoStyles.css';
import './animation-container-styles/TVStyles.css';
import './animation-container-styles/Laptop1Styles.css';
import './animation-container-styles/TabletStyles.css';

// import: assets
import { ReactComponent as RomentoLogo } from '../../../assets/svg/romento-logo.svg';
import RomentoVideo from '../../../assets/video/romento.mp4';
import HuluTV from '../../../assets/img/huluTV.webp';
import HuluTVVideo from '../../../assets/video/huluTV.mp4';
import Laptop1 from '../../../assets/img/laptop_1.webp';
import Laptop1Video from '../../../assets/video/laptop_1.mp4';
import Laptop2L1 from '../../../assets/img/laptop-2-l-1.webp';
import Laptop2L2 from '../../../assets/img/laptop-2-l-2.webp';
import Laptop2L3L1 from '../../../assets/img/laptop-2-l-3-1.webp';
import Laptop2L3L2 from '../../../assets/img/laptop-2-l-3-2.webp';

// import: constants
import { ElementIDEnum } from '../../../constants/enums/ElementIDEnum.ts';

// import: utils
// import: redux
// import: components
// import: lazy load components

function AnimationContainer() {
  const keysConfig = [
    [
      {
        className: 'single_key',
        number: 10,
      },
      {
        className: 'double_key',
        number: 1,
      },
    ],
    [
      {
        className: 'single_key',
        number: 12,
      },
    ],
    [
      {
        className: 'double_key',
        number: 1,
      },
      {
        className: 'single_key',
        number: 8,
      },
      {
        className: 'double_key',
        number: 1,
      },
    ],
    [
      {
        className: 'single_key',
        number: 3,
      },
      {
        className: 'space_bar',
        number: 1,
      },
      {
        className: 'single_key',
        number: 3,
      },
    ],
  ];

  useEffect(() => {
    const ScrollText = document.getElementById(ElementIDEnum.SCROLL_CONT);
    ScrollText.style.opacity = 1;
    ScrollText.style.transform = 'translateX(-50%) translateY(0px)';
    ScrollText.style.transition = 'transform 0.5s ease 0.1s, opacity 0.5s ease 0.1s';

    const removeTransitionTimer = setTimeout(() => {
      ScrollText.style.transition = 'none';
      clearTimeout(removeTransitionTimer);
    }, 600);
  }, []);

  return (
    <div className="animation_container" id={ElementIDEnum.ANIMATION_CONTAINER}>

      {/* mobile_hello_world */}
      <div className="hello_world" id={ElementIDEnum.HELLO_WORLD}>
        <div className="hello_world_level l_0 frame" id={ElementIDEnum.HELLO_WORLD_LEVEL_0}>
          <div className="natesmith_dot_design_cont" id="natesmith.design">
            <p className="text_natesmith_dot_design">lorem.ipsum</p>
          </div>
        </div>
        <div className="hello_world_level l_1" id={ElementIDEnum.HELLO_WORLD_LEVEL_1}>
          <div className="home_screen" id={ElementIDEnum.HOME_SCREEN} />
          <div className="text_scroll_cont" id={ElementIDEnum.SCROLL_CONT}>
            <p className="text_scroll">Scroll</p>
          </div>
        </div>
        <div className="hello_world_level l_2" id={ElementIDEnum.HELLO_WORLD_LEVEL_2}>
          <div className="sheet" id={ElementIDEnum.SHEET} />
        </div>
        <div className="hello_world_level l_3" id={ElementIDEnum.HELLO_WORLD_LEVEL_3}>
          <div className="text_hello_world_cont" id={ElementIDEnum.HELLO_WORLD_CONT}>
            <h2 className="text_hello_world">Hello world</h2>
          </div>
          <div className="intros" id={ElementIDEnum.INTROS}>
            <div className="im_nate_smith_cont" id={ElementIDEnum.IM_NATE_SMITH_CONT}>
              <p className="text_im_nate_smith">
                Lorem ipsum
              </p>
            </div>
            <div className="A_cont" id={ElementIDEnum.A_CONT}>
              <p className="text_A">A</p>
            </div>
            <div className="los_angeles_based_cont" id={ElementIDEnum.LOS_ANGELES_BASED_CONT}>
              <p className="text_los_angeles_based">dol orsita-metlove</p>
            </div>
            <div className="designer_cont" id={ElementIDEnum.DESIGNER_CONT}>
              <p className="text_designer">consecte</p>
            </div>
            <div className="meticulous_visual_cont" id={ElementIDEnum.METICULOUS_DESIGNER_CONT}>
              <p className="text_meticulous_visual">adipiscing elitat v</p>
            </div>
            <div className="fluid_interface_cont" id={ElementIDEnum.FLUID_INTERFACE_CONT}>
              <p className="text_fluid_interface">Etiam atornar</p>
            </div>
            <div className="current_job_cont" id={ElementIDEnum.CURRENT_JOB_CONT}>
              <p className="text_current_job">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="scroll_for_work_cont" id={ElementIDEnum.SCROLL_FOR_WORK_CONT}>
              <p className="text_scroll_for_work">Scroll for samples of my work</p>
            </div>
          </div>
          <div className="home_bar_cont">
            <div className="home_bar hello_world_home_bar" id={ElementIDEnum.HOME_BAR} />
          </div>
        </div>
      </div>
      
      {/* romento */}
      <div className="romento" id={ElementIDEnum.ROMENTO}>
        <div className="romento_level l_0 frame" id={ElementIDEnum.ROMENTO_LEVEL_0} />
        <div className="romento_level l_1" id={ElementIDEnum.ROMENTO_LEVEL_1}>
          <div className="romento_video_cont" id={ElementIDEnum.ROMENTO_VIDEO}>
            <video className="romento_video" src={RomentoVideo} loop autoPlay muted playsInline>
              <track />
            </video>
          </div>
        </div>
        <div className="romento_level l_2" id={ElementIDEnum.ROMENTO_LEVEL_2}>
          <div className="romento_gradient" />
        </div>
        <div className="romento_level l_3" id={ElementIDEnum.ROMENTO_LEVEL_3}>
          <div className="romento_svg_cont">
            <RomentoLogo />
          </div>
          <div className="romento_text_cont">
            <p className="romento_text">
              Promt conversation and record video with people you love.
            </p>
          </div>
          <div className="home_bar_cont">
            <div className="home_bar romento_home_bar" />
          </div>
        </div>
      </div>
      
      {/* hulu_tv */}
      <div className="hulu_tv" id={ElementIDEnum.HULU_TV}>
        <div className="hulu_tv_level l_0" id={ElementIDEnum.HULU_TV_LEVEL_0}>
          <div className="hulu_tv_background" />
          <div className="hulu_tv_stand" id={ElementIDEnum.HULU_TV_STAND}>
            <div className="tv_stand_v1" />
            <div className="tv_stand_v2" />
            <div className="tv_stand_h" />
          </div>
        </div>
        <div className="hulu_tv_level l_1" id={ElementIDEnum.HULU_TV_LEVEL_1}>
          <div className="hulu_tv_video_cont" id={ElementIDEnum.HULU_TV_VIDEO_CONT}>
            <video className="hulu_tv_video" src={HuluTVVideo} loop autoPlay muted playsInline>
              <track />
            </video>
          </div>
        </div>
        <div className="hulu_tv_level l_2" id={ElementIDEnum.HULU_TV_LEVEL_2}>
          <div className="hulu_tv_gradient" />
        </div>
        <div className="hulu_tv_level l_3" id={ElementIDEnum.HULU_TV_LEVEL_3}>
          <div className="hulu_tv_image_cont">
            <img src={HuluTV} alt="" className="hulu_tv_image" />
          </div>
        </div>
        <div className="hulu_tv_level l_4" id={ElementIDEnum.HULU_TV_LEVEL_4} />
      </div>
      
      {/* laptop_1 */}
      <div className="laptop" id={ElementIDEnum.LAPTOP_1}>
        <div className="laptop_level l_0 laptop_top" id={ElementIDEnum.LAPTOP_1_LEVEL_0}>
          <div className="laptop_bottom_cont" id={ElementIDEnum.LAPTOP_1_BOTTOM_CONT}>
            <div className="laptop_bottom" id={ElementIDEnum.LAPTOP_1_BOTTOM}>
              <div className="laptop_keyboard_cont">
                <div className="trackpad" />
                <div className="connector" />
                <div className="keys">
                  {keysConfig.map((row, index) => (
                    <div className={`keys_row_${index}`} id={`keys_row_${index}`}>
                      {row.map((rowKey) => (Array.from(Array(rowKey.number).keys()).map((key) => (
                        <div key={key} className={`key ${rowKey.className}`} />
                      ))
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop_level l_1" id={ElementIDEnum.LAPTOP_1_LEVEL_1}>
          <div className="laptop_1_video_cont" id={ElementIDEnum.LAPTOP_1_VIDEO_CONT}>
            <video className="laptop_1_video" src={Laptop1Video} loop autoPlay muted playsInline>
              <track />
            </video>
          </div>
        </div>
        <div className="laptop_level l_2" id={ElementIDEnum.LAPTOP_1_LEVEL_2}>
          <div className="laptop_1_gradient" />
        </div>
        <div className="laptop_level l_3" id={ElementIDEnum.LAPTOP_1_LEVEL_3}>
          <div className="laptop_1_image_cont">
            <img src={Laptop1} alt="" className="laptop_image" />
          </div>
        </div>
      </div>
      
      {/* laptop_2 */}
      <div className="laptop" id={ElementIDEnum.LAPTOP_2}>
        <div className="laptopWrapper" id={ElementIDEnum.LAPTOP_WRAPPER}>
          <div className="laptop_level l_0" id={ElementIDEnum.LAPTOP_2_LEVEL_0}>
            <div className="laptop_top" id={ElementIDEnum.LAPTOP_2_TOP} />
            <div className="laptop_bottom_cont" id={ElementIDEnum.LAPTOP_2_BOTTOM_CONT}>
              <div className="laptop_bottom_wrapper" id={ElementIDEnum.LAPTOP_2_BOTTOM_CONT}>
                <div className="laptop_bottom laptop_2_bottom" id={ElementIDEnum.LAPTOP_2_BOTTOM}>
                  <div className="laptop_keyboard_cont">
                    <div className="trackpad" />
                    <div className="connector" />
                    <div className="keys">
                      {keysConfig.map((row, index) => (
                        <div className={`keys_row_${index}`} id={`keys_row_${index}`}>
                          {row.map((rowKey) => (Array.from(Array(rowKey.number).keys())
                            .map((key) => (
                              <div key={key} className={`key ${rowKey.className}`} />
                            ))
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="laptop_level l_1" id={ElementIDEnum.LAPTOP_2_LEVEL_1}>
            <div className="laptop_2_image_cont">
              <img src={Laptop2L1} alt="" className="laptop_image" />
            </div>
          </div>
          <div className="laptop_level l_2" id={ElementIDEnum.LAPTOP_2_LEVEL_2}>
            <div className="laptop_2_image_cont">
              <img src={Laptop2L2} alt="" className="laptop_image" />
            </div>
          </div>
          <div className="laptop_level l_3" id={ElementIDEnum.LAPTOP_2_LEVEL_3}>
            <div className="laptop_2_image_cont">
              <img src={Laptop2L3L1} alt="" className="laptop_image" />
            </div>
            <div className="laptop_2_image_cont">
              <img src={Laptop2L3L2} alt="" className="laptop_image" />
            </div>
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className="tablet" id={ElementIDEnum.TABLET}>
        <div className="tablet_level l_0 tablet_top" id={ElementIDEnum.TABLET_LEVEL_0} />
        <div className="tablet_level l_1" id={ElementIDEnum.TABLET_LEVEL_1}>
          <div className="tablet_video_cont">
            <video className="tablet_video" src={RomentoVideo} loop autoPlay muted playsInline>
              <track />
            </video>
          </div>
        </div>
        <div className="tablet_level l_2" id={ElementIDEnum.TABLET_LEVEL_2}>
          <div className="tablet_gradient" />
        </div>
        <div className="tablet_level l_3" id={ElementIDEnum.TABLET_LEVEL_3}>
          <div className="romento_svg_cont">
            <RomentoLogo />
          </div>
          <div className="romento_text_cont">
            <p className="romento_text">
              Promt conversation and record video with people you love.
            </p>
          </div>
          <div className="tablet_home_bar home_bar_cont">
            <div className="home_bar romento_home_bar" />
          </div>
        </div>
      </div>

    </div>
  );
}

AnimationContainer.defaultProps = {};
AnimationContainer.propTypes = {};
export default AnimationContainer;
