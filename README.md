# RAG PDF Assistant

[![Python Version](https://img.shields.io/badge/python-3.9%2B-blue)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A high-performance RAG (Retrieval-Augmented Generation) pipeline designed to turn your PDF documents into an interactive knowledge base. This project leverages **LangChain** for orchestration, **Google Gemini** for state-of-the-art embeddings and generation, and **Qdrant** for lightning-fast vector similarity search.

## 🚀 Overview

The RAG PDF Assistant allows users to upload complex PDF documents and query them using natural language. Unlike standard LLMs, this system retrieves specific context from your documents to provide accurate, grounded, and source-backed answers, minimizing hallucinations.

### Key Features
- **Context-Aware Q&A:** Answers questions based specifically on the content of uploaded PDFs.
- **Advanced Embeddings:** Uses Google Gemini embeddings for superior semantic understanding.
- **Vector Search:** Powered by Qdrant for scalable and efficient document retrieval.
- **Persistent Storage:** Vector embeddings are stored and indexed for rapid subsequent queries.

---

## 🛠 Tech Stack

- **Language:** [Python](https://www.python.org/)
- **Orchestration:** [LangChain](https://www.langchain.com/)
- **LLM & Embeddings:** [Google Gemini AI](https://ai.google.dev/)
- **Vector Database:** [Qdrant](https://qdrant.tech/)
- **Document Parsing:** PyPDF

---

## ⚙️ Installation

### Prerequisites
- Python 3.9 or higher
- A Google Cloud API Key (for Gemini)
- Qdrant (Cloud instance or local Docker container)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/rag-pdf-project.git
cd rag-pdf-project
```

### 2. Set Up Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configuration
Create a `.env` file in the root directory and add your credentials:
```env
GOOGLE_API_KEY=your_gemini_api_key_here
QDRANT_URL=your_qdrant_url
QDRANT_API_KEY=your_qdrant_api_key
```

---

## 📖 Usage

### Ingesting Documents
Place your PDF files in the `data/` directory and run the ingestion script to process and index them:
```bash
python ingest.py
```

### Querying the Assistant
Run the main application to start chatting with your documents:
```bash
python main.py --query "What are the key takeaways from the financial report?"
```

*(If you have a UI like Streamlit included)*:
```bash
streamlit run app.py
```

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork** the Project
2. Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## ✉️ Contact

Project Link: [https://github.com/yourusername/rag-pdf-project](https://github.com/yourusername/rag-pdf-project)
