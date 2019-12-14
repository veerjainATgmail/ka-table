import React from 'react';

import defaultOptions from '../../defaultOptions';
import { Column, Group } from '../../models';
import { GroupRowData } from '../../Models/GroupRowData';
import { OptionChangedFunc } from '../../types';
import { groupClick } from '../../Utils/GroupUtils';
import EmptyCells from '../EmptyCells/EmptyCells';

export interface IGroupRowProps {
  columns: Column[];
  emptyColumnsCount: number;
  groupRowData: GroupRowData;
  groups: Group[];
  groupsExpanded: any[][];
  onOptionChanged: OptionChangedFunc;
}

const GroupRow: React.FunctionComponent<IGroupRowProps> = ({
  columns,
  emptyColumnsCount,
  groupRowData,
  groups,
  groupsExpanded,
  onOptionChanged,
}) => {
  return (
    <tr className={defaultOptions.css.groupRow}>
      <EmptyCells count={emptyColumnsCount}/>
      <td
        className='ka-group-column'
        colSpan={columns.length - emptyColumnsCount + groups.length}>
          <div className='ka-group-column-content'>
            <div
              onClick={() => {
                groupClick(groupsExpanded, groupRowData, onOptionChanged);
              }}
              className={groupsExpanded.some((ge) => JSON.stringify(ge) === JSON.stringify(groupRowData.key))
                ? defaultOptions.css.iconGroupArrowExpanded : defaultOptions.css.iconGroupArrowCollapsed}
            />
            <div className='ka-group-text'>{groupRowData.value.toString()}</div>
          </div>
      </td>
    </tr>
  );
};

export default GroupRow;
