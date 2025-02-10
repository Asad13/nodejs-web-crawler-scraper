# Node.js Web Crawler & Scraper

A web crawler and scraper built with TypeScript (JavaScript).

## Prerequisites

Before setting up the application, ensure that you have the following installed:

- **Git**: Download and install from [Git SCM](https://git-scm.com/download).
- **Node.js**: Install version 22.13.1 or later using either:
  - [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) (**Recommended**)
  - Direct download from the [Node.js website](https://nodejs.org/en)
- **Package Manager**: This project uses `pnpm`. Install it globally by running:

  ```bash
  npm i -g pnpm
  ```

## Installation

### 1. Clone the Repository

You can either download the repository as a ZIP file from GitHub or clone it using Git:

- **SSH:**
  ```bash
  git clone git@github.com:Asad13/nodejs-web-crawler-scraper.git
  ```
- **HTTPS:**
  ```bash
  git clone https://github.com/Asad13/nodejs-web-crawler-scraper.git
  ```

### 2. Configure Environment Variables

Rename the `.env.example` file to `.env` and update any required variables with appropriate values.

### 3. Navigate to the Project Directory

Ensure your terminal is in the project folder before proceeding. Use `cd` (change directory) as follows:

- **Windows:**
  ```bash
  cd C:\Users\YourName\Projects\nodejs-web-crawler-scraper
  ```
- **macOS/Linux:**
  ```bash
  cd /home/yourname/projects/nodejs-web-crawler-scraper
  ```

### 4. Install Dependencies

Run the following command to install all required dependencies:

```bash
pnpm install
```

## Running the Application

### Development Mode

To start the application in development mode, run:

```bash
pnpm dev
```

Visit **[http://localhost:3001](http://localhost:3001)** to view the running application.

### Production Mode

To build the project for production, execute:

```bash
pnpm build
```

This generates optimized JavaScript files in the `dist` directory.

To start the application in production mode, run:

```bash
pnpm start
```

Visit **[http://localhost:3001](http://localhost:3001)** to access the application in production mode.

## License

This project is licensed under the [MIT License](LICENSE).
