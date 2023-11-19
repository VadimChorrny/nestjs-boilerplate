import * as process from 'process';

/**
 * Метод отримання значень з змінних середовища
 * @key ключ значення
 * @exitIfNull перевірка чи існує змінна
 * */
export const getVariable = (key: string, exitIfNull: boolean = false) => {
  const val = process.env[key];
  if (!val && exitIfNull) {
    console.error(`No ${key}. Set ${key} environment variable.`);
    process.exit(1);
  }
  return val;
};

// Перевірка, який env файл потрібно завантажити
export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_PROD = !IS_DEV && process.env.NODE_ENV === 'production';

const envFileName = IS_PROD
  ? '.env.production'
  : `.env.${process.env.NODE_ENV}`;

console.info(
  `Environment is \"${process.env.NODE_ENV}\" and loading ${envFileName} file`,
);

// if (fs?.existsSync(envFileName)) {
//   dotenv.config({ path: envFileName });
//   console.info(
//     `Loading ${envFileName} file to supply config environment variables`,
//   );
// } else {
//   console.error(`No ${envFileName} file was provided. Exiting...`);
//   process.exit(1);
// }
