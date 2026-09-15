import chalk from 'chalk';
import { documentConfig } from '../config/settings.js';

const logLevels = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};

const currentLevel = logLevels[documentConfig.logLevel] || logLevels.info;

export const logger = {
  debug: (message, data = '') => {
    if (currentLevel <= logLevels.debug) {
      console.log(chalk.gray(`[DEBUG] ${message}`), data);
    }
  },

  info: (message, data = '') => {
    if (currentLevel <= logLevels.info) {
      console.log(chalk.blue(`[INFO] ${message}`), data);
    }
  },

  success: (message, data = '') => {
    if (currentLevel <= logLevels.info) {
      console.log(chalk.green(`[SUCCESS] ${message}`), data);
    }
  },

  warn: (message, data = '') => {
    if (currentLevel <= logLevels.warn) {
      console.warn(chalk.yellow(`[WARN] ${message}`), data);
    }
  },

  error: (message, data = '') => {
    if (currentLevel <= logLevels.error) {
      console.error(chalk.red(`[ERROR] ${message}`), data);
    }
  }
};

export default logger;
