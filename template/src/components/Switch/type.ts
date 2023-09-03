export interface Props {
  handleOnPress: (val: boolean) => void;
  value: boolean;
  activeTrackColor?: string;
  inActiveTrackColor?: string;
  thumbColor?: string;
  disable?: boolean;
}
