import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Multiple = ({ height, width, transform, ...props }) => (
  <SvgIcon {...props} style={{ ...props, height, width, transform }} >
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="94.932%">
        <stop offset="0%" stopColor="#5E9AFF" />
        <stop offset="100%" stopColor="#448AFF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#FFF" d="M-615-1123H825v4407H-615z" />
      <g fill="url(#a)" fillRule="nonzero" opacity="1" transform="translate(-451 -116)">
        <path d="M472.6 125.48h7.2v7.171l10.96-7.971-10.96-7.971v7.171h-7.2c-5.734 0-10.4 4.666-10.4 10.4 0 4.852-3.948 8.8-8.8 8.8h-1.6a.8.8 0 1 0 0 1.6h1.6c5.734 0 10.4-4.666 10.4-10.4 0-4.852 3.948-8.8 8.8-8.8zm8.8-5.629l6.64 4.829-6.64 4.829v-9.658zM451.8 125.48h1.6a8.79 8.79 0 0 1 5.869 2.24.798.798 0 0 0 1.13-.063.8.8 0 0 0-.063-1.13 10.387 10.387 0 0 0-6.936-2.647h-1.6a.8.8 0 1 0 0 1.6zM479.8 143.08h-7.2a8.793 8.793 0 0 1-5.822-2.198.799.799 0 1 0-1.058 1.2 10.39 10.39 0 0 0 6.88 2.598h7.2v7.171l10.96-7.971-10.96-7.971v7.171zm1.6-4.029l6.64 4.829-6.64 4.829v-9.658z" />
      </g>
    </g>
  </SvgIcon>
);

export default Multiple;
