# Blog Website

## Table of Contents

- [Blog Website](#blog-website)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This project is a blog website where users can log in, view published blogs, and add new blogs. 

## Features

- User Authentication: Users can log in to access the blog features.
- View Blogs: Users can view all published blogs.
- Add Blog: Logged-in users can add new blogs.
- Validation: Input data is validated using Zod.

## Tech Stack

- **Frontend:** JavaScript, TypeScript
- **Backend:** Node.js, TypeScript, Hono (for Cloudflare Workers)
- **Database:** Aiven for PostgreSQL
- **ORM:** Prisma for connection pooling
- **Validation:** Zod

## Project Structure

The project is organized into three main folders:

- **backend:** Contains the server-side code.
- **frontend:** Contains the client-side code.
- **common:** Contains shared utilities and validation schemas using Zod.



## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Kartikhub/BlogHub.git
    cd BlogHub
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up the database:**

    Ensure you have Aiven for PostgreSQL set up and update the connection string in the environment variables.

4. **Run migrations:**

    ```sh
    npx prisma migrate dev --name init_schema
    npx prisma generate --no-engine
    npm install @prisma/extension-accelerate
    ```

## Usage

1. **Start the backend server in development mode:**

    ```sh
    cd backend
    npm run dev
    ```

2. **Start development mode for frontend:**

    ```sh
    cd frontend
    npm run dev
    ```


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


