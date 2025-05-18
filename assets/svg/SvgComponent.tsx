import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type ToggleIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

const ToggleIcon: React.FC<ToggleIconProps> = ({
  color = '#000',
  width = 24,
  height = 24,
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path
        d="M3 6h18M3 12h18M3 18h18"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ToggleIcon;
