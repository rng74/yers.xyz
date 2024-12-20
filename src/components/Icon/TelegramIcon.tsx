import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const TelegramIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    {/* Using a known Telegram logo path (Font Awesome 'fa-telegram' brand icon) */}
    <g transform="scale(5.35)">
    <path
      d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
      fill="currentColor"
    />
    </g>
  </Icon>
));

export default TelegramIcon;