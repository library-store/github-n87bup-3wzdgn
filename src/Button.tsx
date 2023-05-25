import * as React from 'react';
import ButtonUnstyled, {
  ButtonUnstyledOwnerState,
  ButtonUnstyledProps,
} from '@mui/base/ButtonUnstyled';
import { InputUnstyled, InputUnstyledProps } from '@mui/base';

const Button = React.forwardRef(function Button(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return <InputUnstyled />;
});

export default Button;
