# 🚀 Progetto Bun-SocketIO-Postgres

Benvenuto nel progetto **Bun-SocketIO-Postgres**! Questo progetto utilizza Bun, Socket.IO e PostgreSQL per creare una semplice applicazione di chat in tempo reale.

## 📋 Prerequisiti

Assicurati di avere installato i seguenti strumenti:

- Node.js
- Bun
- PostgreSQL

## 📦 Installazione

1. Clona il repository:
    ```bash
    git clone https://github.com/tuo-username/bun-socketio-postgres.git
    ```
2. Entra nella directory del progetto:
    ```bash
    cd bun-socketio-postgres
    ```
3. Installa le dipendenze:
    ```bash
    bun install
    ```

## ⚙️ Configurazione

1. Crea un file `.env` nella radice del progetto e aggiungi la tua stringa di connessione PostgreSQL:
    ```env
    POSTGRES_URL_NO_SSL=la_tua_stringa_di_connessione
    ```

## 🚀 Avvio del Server

1. Avvia il server:
    ```bash
    bun run src/index.ts
    ```
2. Apri il tuo browser e vai a `http://localhost:3000` per vedere l'applicazione in azione.

## 📂 Struttura del Progetto

- `public/`: Contiene i file statici e l'HTML.
- `src/config/`: Configurazioni per il database e Socket.IO.
- `src/controllers/`: Contiene i controller per la gestione dei messaggi.
- `src/routes/`: Definisce le rotte API.
- `src/utils/`: Contiene utility come la gestione degli errori.

## 🛠️ Tecnologie Utilizzate

- **Bun**: Un runtime JavaScript veloce.
- **Socket.IO**: Libreria per applicazioni in tempo reale.
- **PostgreSQL**: Database relazionale.

## 🤝 Contribuire

Se vuoi contribuire, per favore apri una pull request o segnala un problema.

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.
