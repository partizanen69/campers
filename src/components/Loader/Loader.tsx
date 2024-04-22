import { Oval } from 'react-loader-spinner';
import { WrapStyled } from './Loader.styled';
import { FC } from 'react';

export const Loader: FC<{
  width?: string | number;
  height?: string | number;
}> = ({ width: _width, height: _height }) => {
  const width = _width ?? 80;
  const height = _height ?? 80;

  return (
    <Oval
      visible={true}
      height={height}
      width={width}
      color="#585ec2"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export const FullContainerLoader: FC<{
  paddingTop?: number;
  paddingBottom?: number;
}> = ({ paddingTop, paddingBottom }) => {
  return (
    <WrapStyled $paddingBottom={paddingBottom} $paddingTop={paddingTop}>
      <Loader />
    </WrapStyled>
  );
};
