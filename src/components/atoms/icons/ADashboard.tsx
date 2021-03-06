import { FC } from "react";

export interface IIconProps {
  stroke?: string;
  width?: string;
  height?: string;
}
export const ADashboard: FC<IIconProps> = ({
  stroke = "#37B04C",
  width = "18",
  height = "18",
}) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.927 16.927">
      <g transform="translate(-27.657 -137.232)">
        <path
          fill={stroke}
          className="a"
          d="M32.488,7.935a1.48,1.48,0,0,0,1.03-.418l1.468.734a1.457,1.457,0,0,0-.018.18,1.488,1.488,0,1,0,2.975,0,1.47,1.47,0,0,0-.149-.637L39.785,5.8a1.47,1.47,0,0,0,.637.149A1.489,1.489,0,0,0,41.91,4.463a1.465,1.465,0,0,0-.074-.441l1.73-1.3A1.487,1.487,0,1,0,42.9,1.488a1.465,1.465,0,0,0,.074.441l-1.73,1.3A1.481,1.481,0,0,0,39.084,5.1L37.092,7.092a1.462,1.462,0,0,0-1.667.269l-1.468-.734a1.458,1.458,0,0,0,.018-.18,1.488,1.488,0,1,0-1.488,1.488Zm0,0"
          transform="translate(-2.318 137.232)"
        />
        <path
          fill={stroke}
          className="a"
          d="M16.431,160.976H15.9V150.5a.5.5,0,0,0-.5-.5H13.423a.5.5,0,0,0-.5.5v10.48h-.992v-7.5a.5.5,0,0,0-.5-.5H9.455a.5.5,0,0,0-.5.5v7.5H7.968v-3.538a.5.5,0,0,0-.5-.5H5.488a.5.5,0,0,0-.5.5v3.538H4v-5.521a.5.5,0,0,0-.5-.5H1.521a.5.5,0,0,0-.5.5v5.521H.5a.5.5,0,1,0,0,.992H16.431a.5.5,0,1,0,0-.992Zm0,0"
          transform="translate(27.657 -7.809)"
        />
      </g>
    </svg>
  );
};
