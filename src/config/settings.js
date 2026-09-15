/**
 * Configuration Settings for Document Library App
 */

export const documentConfig = {
  // Supported file types and their categories
  fileTypes: {
    document: {
      extensions: ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt'],
      mimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    },
    spreadsheet: {
      extensions: ['.xls', '.xlsx', '.csv', '.ods'],
      mimeTypes: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
    },
    presentation: {
      extensions: ['.ppt', '.pptx', '.odp'],
      mimeTypes: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation']
    },
    image: {
      extensions: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
      mimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/svg+xml']
    },
    archive: {
      extensions: ['.zip', '.rar', '.7z', '.tar', '.gz'],
      mimeTypes: ['application/zip', 'application/x-rar-compressed', 'application/x-7z-compressed']
    },
    video: {
      extensions: ['.mp4', '.avi', '.mov', '.mkv', '.flv'],
      mimeTypes: ['video/mp4', 'video/x-msvideo', 'video/quicktime']
    },
    audio: {
      extensions: ['.mp3', '.wav', '.flac', '.aac', '.ogg'],
      mimeTypes: ['audio/mpeg', 'audio/wav', 'audio/flac', 'audio/aac']
    }
  },

  // Document categories based on keywords
  categories: {
    Financial: ['invoice', 'receipt', 'tax', 'financial', 'expense', 'budget', 'payment', 'statement'],
    Medical: ['medical', 'health', 'doctor', 'prescription', 'hospital', 'appointment', 'diagnosis'],
    Legal: ['legal', 'contract', 'agreement', 'terms', 'policy', 'litigation', 'lawsuit'],
    Personal: ['personal', 'resume', 'cv', 'certificate', 'diploma', 'award'],
    Business: ['business', 'proposal', 'report', 'meeting', 'presentation', 'strategy'],
    Marketing: ['marketing', 'campaign', 'promotion', 'advertisement', 'branding'],
    Technical: ['technical', 'manual', 'specification', 'architecture', 'design', 'code'],
    Other: []
  },

  // Organization strategies
  strategies: {
    'by-type': 'Organize by file type (Document, Spreadsheet, etc.)',
    'by-date': 'Organize by date (Year > Month)',
    'by-category': 'Organize by content category',
    'category-date': 'Organize by category then date (Category > Year > Month)',
    'date-category': 'Organize by date then category (Year > Month > Category)',
    'type-date': 'Organize by type then date (Type > Year > Month)'
  },

  // Default organization strategy
  defaultStrategy: 'category-date',

  // Maximum file size (in MB)
  maxFileSize: 500,

  // Batch processing size
  batchSize: 10,

  // Enable automatic organization on upload
  autoOrganize: true,

  // Date format for folder names
  dateFormat: 'YYYY-MM (MonthName)',

  // Logging level: 'debug', 'info', 'warn', 'error'
  logLevel: process.env.LOG_LEVEL || 'info'
};

export default documentConfig;
