import { Dispatch } from 'react';
import Button from '../shared/button';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { AdjustColorActions } from '../../color-reducer';

type SavedColorProps = {
  name: string;
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
  onRemove?: () => void;
};

const SavedColor = ({ name, hexColor, dispatch, onRemove }: SavedColorProps) => {
  return (
    <article className="flex items-center gap-2 place-content-between">
      <ColorChangeSwatch hexColor={hexColor} dispatch={dispatch} />
      <h3 className="text-sm whitespace-nowrap">{name}</h3>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Remove
      </Button>
    </article>
  );
};

export default SavedColor;
