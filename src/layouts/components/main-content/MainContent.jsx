import React from 'react';

// import: styles
import './MainContentStyles.css';

// import: assets
// import: constants
import { ScrollElementIDEnum } from '../../../constants/enums/ElementIDEnum.ts';

// import: utils
// import: redux
// import: components
// import: lazy load components

function MainContent() {
  return (
    <div className="main_content" id="main-content">
      <div className="page_content" id="page-content">
        <div className="flex_col sheet_in" id={ScrollElementIDEnum.SHEET_IN}>
          <div className="page_div_absolute home_indicator_color" id={ScrollElementIDEnum.HOME_BAR_COLOR} />
          <div className="page_div_absolute scroll_down_out" id={ScrollElementIDEnum.TEXT_SCROLL_FADE_OUT} />
        </div>
        <div className="frame_scale" id={ScrollElementIDEnum.HOME_SCREEN_SCALE} />
        <div className="hello_world_in" id={ScrollElementIDEnum.HELLO_WORLD_IN} />
        <div className="flex_col im_nate_smith_subtitles" id="im_nate_smith_subtitles">
          <div className="im_nate_smith_in" id={ScrollElementIDEnum.IM_NATE_SMITH_IN} />
          <div className="gap_2" id="gap" />
          <div className="los_angeles_based_in" id={ScrollElementIDEnum.LOS_ANGELES_BASED_IN} />
          <div className="gap_2" id="gap" />
          <div className="meticulous_visual_in" id={ScrollElementIDEnum.METICULOUS_VISUAL_IN} />
          <div className="gap_2" id="gap" />
          <div className="fluid_interface_in" id={ScrollElementIDEnum.FLUID_INTERFACE_IN} />
          <div className="gap_2" id="gap" />
          <div className="a_designer_in" id={ScrollElementIDEnum.A_DESIGNER_IN} />
          <div className="gap_2" id="gap" />
          <div className="current_job_in" id={ScrollElementIDEnum.CURRENT_JOB_IN} />
          <div className="gap_2" id="gap" />
          <div className="scroll_for_work_in" id={ScrollElementIDEnum.SCROLL_FOR_WORK_IN} />
        </div>
        <div className="section_gap" id="section-gap-1" />
        <div className="hello_out" id={ScrollElementIDEnum.HELLO_OUT}>
          <div className="hello_fade_out" id={ScrollElementIDEnum.HELLO_FADE_OUT} />
        </div>
        <div className="romento_in" id={ScrollElementIDEnum.ROMENTO_IN}>
          <div className="romento_fade_in" id={ScrollElementIDEnum.ROMENTO_FADE_IN} />
        </div>
        <div className="section_gap" id="section-gap-2" />
        <div className="phone_out" id={ScrollElementIDEnum.PHONE_OUT}>
          <div className="phone_rotate_x" id={ScrollElementIDEnum.PHONE_ROTATE_X} />
          <div className="phone_rotate_z" id={ScrollElementIDEnum.PHONE_ROTATE_Z} />
          <div className="phone_fade_out" id={ScrollElementIDEnum.PHONE_FADE_OUT} />
        </div>
        <div className="tv_in" id={ScrollElementIDEnum.TV_IN}>
          <div className="tv_fade_in" id={ScrollElementIDEnum.TV_FADE_IN} />
          <div className="tv_rotate_z" id={ScrollElementIDEnum.TV_ROTATE_Z} />
          <div className="tv_rotate_x" id={ScrollElementIDEnum.TV_ROTATE_X} />
          <div className="tv_legs_out" id={ScrollElementIDEnum.TV_LEGS_OUT} />
        </div>
        <div className="section_gap" id="section-gap-4" />
        <div className="tv_out" id={ScrollElementIDEnum.TV_OUT}>
          <div className="tv_fade_out" id={ScrollElementIDEnum.TV_FADE_OUT} />
        </div>
        <div className="laptop_1_in" id={ScrollElementIDEnum.LAPTOP_1_IN}>
          <div className="laptop_1_fade_in" id={ScrollElementIDEnum.LAPTOP_1_FADE_IN} />
          <div className="bottom_pos" id={ScrollElementIDEnum.BOTTOM_POS}>
            <div className="bottom_pos_0" id={ScrollElementIDEnum.BOTTOM_POS_0} />
            <div className="bottom_pos_1" id={ScrollElementIDEnum.BOTTOM_POS_1} />
            <div className="bottom_pos_2" id={ScrollElementIDEnum.BOTTOM_POS_2} />
          </div>
          <div className="laptop_bottom_fade_in" id={ScrollElementIDEnum.LAPTOP_1_BOTTOM_FADE_IN} />
        </div>
        <div className="section_gap" id="section-gap-4" />
        <div className="laptop_1_out" id={ScrollElementIDEnum.LAPTOP_1_OUT}>
          <div className="bottom_close_1" id={ScrollElementIDEnum.BOTTOM_CLOSE_1}>
            <div className="bottom_top_fade_out" id={ScrollElementIDEnum.BOTTOM_TOP_FADE_OUT} />
          </div>
          <div className="bottom_close_2" id={ScrollElementIDEnum.BOTTOM_CLOSE_2} />
          <div className="laptop_1_fade_out" id={ScrollElementIDEnum.LAPTOP_1_FADE_OUT} />
        </div>
        <div className="laptop_2_in" id={ScrollElementIDEnum.LAPTOP_2_IN}>
          <div className="laptop_2_fade_in" id={ScrollElementIDEnum.LAPTOP_2_FADE_IN} />
          <div className="laptop_bottom_fade_in" id={ScrollElementIDEnum.LAPTOP_2_BOTTOM_FADE_IN} />
        </div>
        <div className="section_gap" id="section-gap-5" />
        <div className="laptop_2_out" id={ScrollElementIDEnum.LAPTOP_2_OUT}>
          <div className="laptop_2_open_flat" id={ScrollElementIDEnum.LAPTOP_2_OPEN_FLAT} />
          <div className="laptop_2_fold_backwards" id={ScrollElementIDEnum.LAPTOP_2_FOLD_BACKWARDS} />
          <div className="laptop_2_fade_out" id={ScrollElementIDEnum.LAPTOP_2_FADE_OUT} />
        </div>
        <div className="tablet_in" id={ScrollElementIDEnum.TABLET_IN}>
          <div className="tablet_fade_in" id={ScrollElementIDEnum.TABLET_FADE_IN} />
        </div>
        <div className="section_gap" id="section-gap-4" />
        <div className="tablet_out" id={ScrollElementIDEnum.TABLET_OUT}>
          <div className="tablet_fade_out" id={ScrollElementIDEnum.TABLET_FADE_OUT} />
        </div>
        <div className="section_gap_200" id="section-gap-6" />
        <div className="conclusion_1" id={ScrollElementIDEnum.CONCLUSION_1_IN} />
        <div className="section_gap_60" id="section-gap-6" />
        <div className="conclusion_2" id={ScrollElementIDEnum.CONCLUSION_2_IN} />
        <div className="bottom_padding" id="section-gap-6" />
      </div>
    </div>
  );
}

MainContent.defaultProps = {};
MainContent.propTypes = {};
export default MainContent;
