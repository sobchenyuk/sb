import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Germany = ({ height, width, ...props }) => (
  <SvgIcon {...props} style={{ ...props, height, width }}>
    <g fill="none" fillRule="nonzero">
      <path fill="#464655" d="M34.932 7.673H0V.623C0 .29.27.02.602.02H34.33c.332 0 .602.27.602.604v7.05z" />
      <path fill="#FFE15A" d="M34.33 22.981H.601A.603.603 0 0 1 0 22.377v-7.05h34.932v7.05c0 .334-.27.604-.603.604z" />
      <path fill="#FF4B55" d="M0 7.673h34.932v7.654H0z" />
    </g>
  </SvgIcon>
);

export default Germany