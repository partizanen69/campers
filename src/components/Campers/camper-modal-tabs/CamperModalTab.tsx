import { FC } from 'react';

export const CamperModalTab: FC<{
  children?: React.ReactNode;
  selected: boolean;
  setSelected: () => void;
}> = ({ children, selected, setSelected }) => {
  return (
    <div
      className={`tab ${selected ? 'underline' : ''}`}
      onClick={() => {
        setSelected();
      }}
    >
      {children}
    </div>
  );
};
