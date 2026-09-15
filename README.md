# Document Library App

An intelligent document sorting and management application that automatically organizes documents into appropriate folders based on type, date, and content metadata.

## Features

- 📁 **Automatic Sorting**: Intelligently categorizes documents by type, date, and custom rules
- 🌐 **Web Interface**: User-friendly dashboard to manage and organize documents
- 📊 **File Type Detection**: Supports PDFs, Word docs, spreadsheets, images, and more
- 🏷️ **Smart Tagging**: Automatically tags documents for easy retrieval
- 📅 **Date-Based Organization**: Organizes documents by creation/modification dates
- 🔍 **Search & Filter**: Find documents quickly with advanced search capabilities
- 📦 **Batch Operations**: Process multiple documents at once
- 💾 **Folder Structure**: Creates intuitive folder hierarchies (Category > Date > Type)

## Installation

```bash
git clone https://github.com/timothyhychow/document-library-app.git
cd document-library-app
npm install
```

## Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Configure your settings in `.env`

## Usage

### Start Web Server
```bash
npm start
```

Open http://localhost:3000 in your browser

### CLI Organization
```bash
npm run organize -- --path ./my-documents --strategy category-date
```

## Project Structure

```
src/
├── app.js                 # Express app entry point
├── cli.js                 # Command-line interface
├── config/
│   └── settings.js       # Configuration settings
├── services/
│   ├── fileAnalyzer.js   # File type & metadata analysis
│   ├── docClassifier.js  # Document classification logic
│   └── organizer.js      # Main organization engine
├── controllers/
│   └── documentController.js  # Route handlers
├── routes/
│   └── documents.js       # API routes
├── utils/
│   ├── logger.js         # Logging utility
│   ├── validators.js     # Input validation
│   └── helpers.js        # Helper functions
└── public/
    ├── index.html        # Web UI
    └── style.css         # Styling
```

## Sorting Strategies

### Category-Based
```
document-library/
├── Financial/
├── Medical/
├── Legal/
└── Personal/
```

### Date-Based
```
document-library/
├── 2024/
│   ├── January/
│   ├── February/
│   └── ...
```

### Category + Date
```
document-library/
├── Financial/
│   ├── 2024/
│   └── 2023/
└── Medical/
```

## Configuration

Edit `src/config/settings.js` to customize:
- Supported file types
- Folder naming conventions
- Classification rules
- Organization strategies

## API Endpoints

- `GET /api/documents` - List all documents
- `POST /api/documents/upload` - Upload documents
- `POST /api/documents/organize` - Organize documents
- `GET /api/documents/structure` - Get folder structure
- `DELETE /api/documents/:id` - Delete document

## Contributing

Contributions welcome! Please fork the repository and submit pull requests.

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open a GitHub issue.
