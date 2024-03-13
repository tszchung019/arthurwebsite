import React, { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const CustomizedDividers = () => {
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => ['italic']);
  const contentEditableRef = useRef(null);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
    applyStylesToSelection();
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    applyStylesToSelection();
  };

  const applyStylesToSelection = (appliedFormats) => {
    const selection = window.getSelection();
  
    if (appliedFormats && appliedFormats.length > 0 && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
  
      // Apply styles to the newly created span
      appliedFormats.forEach((format) => {
        span.style[format] = 'inherit';
      });
  
      // Surround the selected text with the styled span
      range.surroundContents(span);
    }
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          {/* Alignment buttons... */}
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton
            value="bold"
            aria-label="bold"
          >
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton
            value="italic"
            aria-label="italic"
          >
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton
            value="underlined"
            aria-label="underlined"
          >
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
      <div
        ref={contentEditableRef}
        contentEditable
        style={{
          border: '1px solid #ccc',
          minHeight: '100px',
          padding: '8px',
        }}
      ></div>
    </div>
  );
};

export default CustomizedDividers;
