import path from 'path';
import { documentConfig } from '../config/settings.js';

/**
 * Get file extension
 */
export const getFileExtension = (filename) => {
  return path.extname(filename).toLowerCase();
};

/**
 * Get file type based on extension
 */
export const getFileType = (filename) => {
  const ext = getFileExtension(filename);
  
  for (const [type, config] of Object.entries(documentConfig.fileTypes)) {
    if (config.extensions.includes(ext)) {
      return type;
    }
  }
  
  return 'other';
};

/**
 * Format date for folder naming
 */
export const formatDateFolder = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = monthNames[d.getMonth()];
  
  return `${year}-${month} (${monthName})`;
};

/**
 * Sanitize folder name
 */
export const sanitizeFolderName = (name) => {
  return name
    .replace(/[<>:"|?*\\//]/g, '')
    .replace(/^\s+|\s+$/g, '')
    .replace(/\s+/g, ' ')
    .substring(0, 255);
};

/**
 * Extract keywords from filename
 */
export const extractKeywords = (filename) => {
  return filename
    .toLowerCase()
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .split(' ')
    .filter(word => word.length > 2);
};

/**
 * Calculate file size in readable format
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

export default {
  getFileExtension,
  getFileType,
  formatDateFolder,
  sanitizeFolderName,
  extractKeywords,
  formatFileSize
};
