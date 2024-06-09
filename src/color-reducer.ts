import { hsl, hsv, rgb } from "color-convert";

type HexColor = `#${string}`;

const isHexColor = (s: string): s is HexColor => {
  return s.startsWith('#');
}
type ColorFormats = 'rgb' | 'hex' | 'hsl' | 'hsv';
type ActionTypes = `update-${ColorFormats}-color`;

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  }
}

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [number, number, number] }
}

type ColorState = {
  hexColor: string;
}

type UpdateHSLColorAction = {
  type: 'update-hsl-color';
  payload: {
    hsl: [number, number, number]
  }
}

type UpdateHSVColorAction = {
  type: 'update-hsv-color';
  payload: {
    hsv: [number, number, number]
  }
}

export type AdjustColorActions = UpdateHexColorAction | UpdateRGBColorAction | UpdateHSLColorAction | UpdateHSVColorAction;

export const initialState: ColorState = {
  hexColor: '#BADA55'
}

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor }
  }
  
  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor }
  }
  
  if (action.type === 'update-hsl-color') {
    const hexColor = '#' + hsl.hex(action.payload.hsl);
    return { ...state, hexColor }
  }
  
  if (action.type === 'update-hsv-color') {
    const hexColor = '#' + hsv.hex(action.payload.hsv);
    return { ...state, hexColor };
  }
  
  return state
}
