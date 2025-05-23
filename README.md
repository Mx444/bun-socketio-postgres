# Bun-SocketIO-Postgres


<p align="center">
  <img src="https://bun.sh/logo.svg" alt="Bun Logo" width="100" height="100" style="display: block; margin: 0 auto;">
</p>


A real-time chat application built with Bun, Socket.IO, and PostgreSQL. This project serves as an exercise to test Socket.IO functionality and real-time communication.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/) - A fast JavaScript runtime and toolkit
- [PostgreSQL](https://www.postgresql.org/)

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/bun-socketio-postgres.git
    ```
2. Navigate to the project directory:
    ```bash
    cd bun-socketio-postgres
    ```
3. Install dependencies:
    ```bash
    bun install
    ```

## ⚙️ Configuration

1. Create a `.env` file in the project root and add your PostgreSQL connection string:
    ```env
    POSTGRES_URL_NO_SSL=your_postgres_connection_string
    ```

2. Make sure your PostgreSQL database has a `messages` table with the following structure:
   - `id`: Primary key
   - `username`: Text
   - `content`: Text
   - `created_at`: Timestamp with default value of current time

## 🚀 Running the Application

Start the server:
```bash
bun run src/index.ts
```

Open your browser and navigate to `http://localhost:3000` to use the chat application.

## 🧪 Testing Socket.IO

This project was specifically created as an exercise to test Socket.IO functionality. Key features include:

- Real-time message broadcasting to all connected clients
- Persistent message storage in PostgreSQL
- Retrieval of message history for new connections
- User identification with custom usernames

## 📂 Project Structure

```
bun-socketio-postgres/
├── public/                  # Static files
│   └── index.html           # Chat client interface
├── src/
│   ├── config/              # Configuration files
│   │   ├── database.ts      # PostgreSQL connection setup
│   │   ├── express.ts       # Express server configuration
│   │   └── socket.ts        # Socket.IO setup
│   ├── controllers/         # Application controllers
│   │   └── messages.ts      # Message handling logic
│   ├── routes/              # API routes
│   │   └── messages.ts      # Message endpoints
│   ├── utils/               # Utility functions
│   │   └── handleError.ts   # Error handling
│   └── index.ts             # Application entry point
└── package.json             # Project dependencies
```

## 🛠️ Technology Stack

- **Bun**: Fast JavaScript runtime and toolkit
- **Socket.IO**: Real-time bidirectional event-based communication
- **PostgreSQL**: Relational database for message storage
- **Express**: Web application framework
- **TypeScript**: Type-safe JavaScript

## 💡 How It Works

1. The server initializes Express and Socket.IO
2. When a user connects, they receive all previous messages from the database
3. Users can send messages with their username
4. New messages are stored in the database and broadcast to all connected clients
5. The UI displays messages with timestamps in a clean, modern interface

## 🔍 API Endpoints

- `GET /messages`: Retrieve all messages
- `POST /messages`: Create a new message

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.