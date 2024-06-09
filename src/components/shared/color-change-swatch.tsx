import clsx from 'clsx';
import { Dispatch, MouseEventHandler } from 'react';
import Button from './button';
import { AdjustColorActions, HexColorType } from '../../color-reducer';

type ColorChangeSwatchProps = {
  hexColor: string;
  className?: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const ColorChangeSwatch = ({
  hexColor,
  className,
  dispatch,
}: ColorChangeSwatchProps) => {
  
  const updateHexByTriadColor = (color: HexColorType) =>  {
    dispatch({
      type: 'update-hex-color-by-triad',
      payload: {
        triad: color
      }
    })
  }
  return (
    <Button
      className={clsx(
        'border-2 border-slate-900 transition-shadow duration-200 ease-in hover:shadow-xl',
        className,
      )}
      style={{ backgroundColor: hexColor }}
      onClick={() => updateHexByTriadColor(hexColor.includes('#') ? hexColor as HexColorType : `#${hexColor}`)}
    >
      {hexColor}
    </Button>
  );
};

export default ColorChangeSwatch;
