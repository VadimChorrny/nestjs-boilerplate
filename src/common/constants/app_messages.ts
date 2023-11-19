/* Application */
import { APPLICATION_PORT } from '@/constants/app_settings';

export const SERVER_START_MESSAGE: string = ` 🚀 Server was started on port - ${
  APPLICATION_PORT || 7777
} 🚀`;
