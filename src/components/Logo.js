import React from 'react';
import { Box } from '@mantine/core';
import { IconCircle, IconSquare, IconTriangle } from '@tabler/icons-react';

export default function Logo({ size = 24 }) {
  return (
    <Box ml={16} style={{ position: 'relative', width: size * 3.5, height: size }}>
      <IconCircle
        size={size}
        color="black"
        fill="black"
        style={{ position: 'absolute', left: 0 }}
      />
      <IconTriangle
        size={size}
        color="black"
        fill="black"
        style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
      />
      <IconSquare
        size={size}
        color="black"
        fill="black"
        style={{ position: 'absolute', right: 0 }}
      />
    </Box>
  );
}