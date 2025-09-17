# INGRES AI Chatbot

## Project Overview

The **INGRES AI Chatbot** is a proposed solution to enhance the accessibility and utility of the national groundwater resource data published by the Central Ground Water Board (CGWB). This project aims to transform the static INGRES portal into a dynamic, AI-powered knowledge hub, making critical groundwater information easily accessible to a wide range of users, from government officials to the general public.

## The Problem

The existing INGRES portal, while a valuable data repository, presents several challenges:
- **Poor User Experience:** Navigating vast datasets is complex and time-consuming.
- **Limited Accessibility:** The portal is not easily usable by non-experts or those who are not proficient in English.
- **Lack of Actionable Insights:** The data is presented in a raw format, without context or dynamic analysis.

## The Solution

Our solution is a multi-interface system centered around a conversational AI chatbot. It's built on a **Retrieval-Augmented Generation (RAG)** architecture to ensure accuracy and is tailored to meet the specific needs of different user groups.

### Key Features
- **Intelligent Chatbot:** A natural language interface for querying groundwater data via text and voice.
- **Dynamic Visualizations:** On-demand generation of interactive maps, charts, and graphs.
- **Multilingual Support:** Support for key Indian regional languages to broaden accessibility.
- **User-Specific Dashboards:**
  - **Public Interface:** A simple, intuitive chatbot for quick queries.
  - **Policymakers' Dashboard:** A secure, high-level view of key metrics for informed decision-making.
  - **Researchers' Workbench:** An interface with pre-trained ML models for advanced data analysis and forecasting.
- **Real-time Data Integration:** Direct connection to the INGRES database to provide the latest assessment data.

## Project Architecture

The system follows a modern, microservices-oriented architecture with a monorepo structure for the MVP. It consists of the following key layers:
- **Frontend:** A Next.js application for all user interfaces (chatbot and dashboards).
- **Backend:** A Python FastAPI application that serves as the central API, orchestrating requests to the AI and data services.
- **Data & AI:** A dedicated layer containing the PostgreSQL database (with PostGIS), a vector database for RAG, and hosted LLM and ML models.
- **DevOps:** A CI/CD pipeline built with Docker and GitHub Actions for automated deployment.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.9 or higher)
- Docker
- Git

### Installation
1.  Clone the repository:
    ```bash
    git clone [https://github.com/vermaapurva33/INGRIS_CHATBOT.git](https://github.com/vermaapurva33/INGRIS_CHATBOT.git)
    cd ingres-project
    ```
2.  Set up environment variables (see `.env.example`).

3.  The application will be available at `http://localhost:3000`.
