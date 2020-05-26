import React, { useCallback } from 'react';
import styled from 'styled-components';
import { gray200, white } from '../../../../core/Colors';
import { body2 } from '../../../../core/TextStyles';
import padNumber from '../../../../utils/padNumber';

interface Props {
  value: Date;
  onChange?: (value: Date) => void;
}

const TimeSelectorInput: React.FC<Props> = props => {
  const { value, onChange } = props;

  const handleChange = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      const newValue = new Date(value);
      if (event.target instanceof HTMLInputElement) {
        switch (event.target.name) {
          case 'hours':
            newValue.setHours(Number(event.target.value));
            break;
          case 'minutes':
            newValue.setMinutes(Number(event.target.value));
            break;
          case 'seconds':
            newValue.setSeconds(Number(event.target.value));
        }
      }
      onChange?.(newValue);
    },
    [onChange, value]
  );

  return (
    <Container onChange={handleChange}>
      <TimeInput min={0} max={23} name="hours" value={padNumber(value.getHours(), 2)} />
      <TimeDivider />
      <TimeInput min={0} max={59} name="minutes" value={padNumber(value.getMinutes(), 2)} />
      <TimeDivider />
      <TimeInput min={0} max={59} name="seconds" value={padNumber(value.getSeconds(), 2)} />
    </Container>
  );
};

export default React.memo(TimeSelectorInput);

const Container = styled.form`
  padding: 8px 16px;
  background: ${white};
  border: 1px solid ${gray200};
  border-radius: 3px;
`;

const TimeInput = styled.input.attrs({
  placeholder: '00',
  type: 'number',
})`
  ${body2};
  width: 18px;
  height: 20px;
  border: 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline-width: 0;
  }

  -moz-appearance: textfield;
`;

const TimeDivider = styled.span`
  ${body2};
  margin: 0 10px;
  color: ${gray200};
  &:before {
    content: ':';
    text-align: center;
  }
`;
