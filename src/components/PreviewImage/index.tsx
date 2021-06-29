import { Box } from '@material-ui/core';
import React from 'react';
import phone from '../../assets/phone-container.png';
import preview1 from '../../assets/preview1.jpg';

const PreviewImage: React.FC = () => {
  const url = `url(${phone})`;
  return (
    <Box
      display={{ xs: 'none', md: 'block' }}
      style={{
        background: url,
        backgroundSize: '454px 618px',
        width: 454,
        height: 618,
      }}
    >
      <div style={{ marginTop: 99, marginLeft: 151 }}>
        <img src={preview1} alt='' />
      </div>
    </Box>
  );
};

export default PreviewImage;
