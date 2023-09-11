import data_json from '../assets/data.json';

export enum Timeframe {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export class TimeframeStat {
  previous!: number;
  current!: number;
}

export class Data {
  title!: string;
  timeframes!: Map<Timeframe, TimeframeStat>;
}

export default function loadData(): Array<Data> {
  return data_json.map(input_data => {
    const data = new Data();
    data.title = input_data['title'];
    data.timeframes = get_timeframes(input_data['timeframes']);
    return data;
  });
}

function get_timeframes(input_timeframes): Map<Timeframe, TimeframeStat> {
  const timeframes = new Map<Timeframe, TimeframeStat>();
  timeframes.set(
    Timeframe.DAILY,
    get_timeframe_stat(input_timeframes['daily'])
  );
  timeframes.set(
    Timeframe.WEEKLY,
    get_timeframe_stat(input_timeframes['weekly'])
  );
  timeframes.set(
    Timeframe.MONTHLY,
    get_timeframe_stat(input_timeframes['monthly'])
  );
  return timeframes;
}

function get_timeframe_stat(input_stat: {
  previous: number;
  current: number;
}): TimeframeStat {
  const timeframe_stat = new TimeframeStat();
  timeframe_stat.previous = input_stat.previous;
  timeframe_stat.current = input_stat.current;
  return timeframe_stat;
}
