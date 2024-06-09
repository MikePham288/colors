import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { Dispatch } from 'react';
import { AdjustColorActions } from '../../color-reducer';

type HexToHSVProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const HexToHSV = ({ hexColor, dispatch }: HexToHSVProps) => {
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;
  
  const updateHSV = ({ hue = h, saturation = s, value = v }) => {
    dispatch({
      type: 'update-hsv-color',
      payload: {
        hsv: [hue, saturation, value]
      }
    });
  }

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput label="H" type="number" value={h} onChange={e => updateHSV({hue: e.target.valueAsNumber, saturation: s, value: v})} />
      <LabeledInput label="S" type="number" value={s} onChange={e => updateHSV({hue: h, saturation: e.target.valueAsNumber, value: v})} />
      <LabeledInput label="V" type="number" value={v} onChange={e => updateHSV({ hue: h, saturation: s, value: e.target.valueAsNumber})}/>
    </section>
  );
};

export default HexToHSV;
