import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { Dispatch } from 'react';
import { AdjustColorActions } from '../../color-reducer';

type HexToCMYKProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const HexToCMYK = ({ hexColor, dispatch }: HexToCMYKProps) => {
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;
  
  const updateCYMK = ({ cyan = c, magenta = m, yellow = y, key = k }) => {
    dispatch({
      type: 'update-cmyk-color',
      payload: {
        cmyk: [cyan, magenta, yellow, key]
      }
    });
  }

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput label="C" type="number" value={c} onChange={e => updateCYMK({ cyan: e.target.valueAsNumber, magenta: m, yellow: y, key: k})} />
      <LabeledInput label="M" type="number" value={m} onChange={e => updateCYMK({ cyan: c, magenta: e.target.valueAsNumber, yellow: y, key: k})}/>
      <LabeledInput label="Y" type="number" value={y} onChange={e => updateCYMK({ cyan: c, magenta: m, yellow: e.target.valueAsNumber, key: k})}/>
      <LabeledInput label="K" type="number" value={k} onChange={e => updateCYMK({ cyan: c, magenta: m, yellow: y, key: e.target.valueAsNumber})}/>
    </section>
  );
};

export default HexToCMYK;
