import IconWork from '../assets/images/icon-work.svg';
import IconPlay from '../assets/images/icon-play.svg';
import IconStudy from '../assets/images/icon-study.svg';
import IconExercise from '../assets/images/icon-exercise.svg';
import IconSocial from '../assets/images/icon-social.svg';
import IconSelfCare from '../assets/images/icon-self-care.svg';

import { Data, Timeframe } from './data_loader';

export function get_current_stat(
  data: Data,
  chosen_timeframe: Timeframe
): string {
  const stat_value = data.timeframes.get(chosen_timeframe)?.current;
  return `${stat_value}hrs`;
}

export function get_previous_stat(
  data: Data,
  chosen_timeframe: Timeframe
): string {
  const stat_value = data.timeframes.get(chosen_timeframe)?.previous;
  switch (chosen_timeframe) {
    case Timeframe.DAILY:
      return `Yesterday - ${stat_value}hrs`;
    case Timeframe.WEEKLY:
      return `Last week - ${stat_value}hrs`;
    case Timeframe.MONTHLY:
      return `Last month - ${stat_value}hrs`;
  }
}

export function get_img_bg_color(title: string): string {
  switch (title.toLowerCase()) {
    case 'work':
      return 'bg-light-red-1';
    case 'play':
      return 'bg-soft-blue';
    case 'study':
      return 'bg-light-red-2';
    case 'exercise':
      return 'bg-lime-green';
    case 'social':
      return 'bg-violet';
    case 'self care':
      return 'bg-soft-orange';
  }
  return '';
}

export function get_icon(title: string): string {
  switch (title.toLowerCase()) {
    case 'work':
      return IconWork;
    case 'play':
      return IconPlay;
    case 'study':
      return IconStudy;
    case 'exercise':
      return IconExercise;
    case 'social':
      return IconSocial;
    case 'self care':
      return IconSelfCare;
  }
  return IconWork;
}
