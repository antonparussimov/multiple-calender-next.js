'use client';

import { 
  DateRange, 
  Range, 
  RangeKeyDict
} from 'react-date-range';
import { Calendar, DateObject } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';

import '../../../public/mydatepicker.css';
interface DatePickerProps {
  value: DateObject | DateObject[] | null,
  // onChange: (value: Date[]) => false;
  onChange: (value: DateObject | DateObject[] | null) => false | void;
  disabledDates?: DateObject[];
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  disabledDates
}) => {
  return ( 
    //  <DateRange
    //   rangeColors={['#262626']}
    //   ranges={[value]}
    //   date={new Date()}
    //   onChange={onChange}
    //   direction="vertical"
    //   showDateDisplay={false}
    //   minDate={new Date()}
    //   disabledDates={disabledDates}
    // />

    <Calendar 
      multiple
      value={value}
      onChange={onChange}
      mapDays={() => {
        if (disabledDates) return {
          disabled: true,
          style: { color: "#ccc" },
        }
      }}
      plugins={[
        // eslint-disable-next-line react/jsx-key
        <DatePanel />
      ]}
    />
   );
}
 
export default DatePicker;
