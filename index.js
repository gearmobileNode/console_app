import chalk from 'chalk';
import { config } from 'dotenv';

config({ override: true });

if (process.argv.length < 3) {
  console.error(chalk.red('Укажите величину в дюймах!'));
  process.exit(1);
}

const inches = parseFloat(process.argv[2]);
if (!inches) {
  console.error(chalk.red('Укажите дюймы в виде числа!'));
  process.exit(1);
}

const centimetres = inches * 2.54;

if (
  process.env.COLORIZE &&
  process.env.COLORIZE.trim().toLowerCase() === 'no'
) {
  console.log(`${inches}\" >>> ${centimetres} см.`);
} else {
  console.log(`${chalk.yellow(inches)}\" >>> ${chalk.green(centimetres)} см.`);
}
