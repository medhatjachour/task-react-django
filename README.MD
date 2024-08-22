# TASK FOR APPLYING JUNIOR SOFTWARE ENGINEER WITH  REACT AND DJANGO
SIMPLE NOTE APP THAT USE TO WRITE AND DELETE NOTE FOR SEVERAL USERS 

## Overview
A full-stack note-taking application built with Django and React. The backend is powered by Django, providing authentication with JWT tokens, and the frontend is built with React, Axios, and React Router DOM.
![alt text](https://github.com/medhatjachour/task-react-django/blob/main/sample/1.png?raw=true)

## Features
- **Register**: Create a new user .
- **Login**: Create a jwt tokens one for access and the other for refresh  .
- **Logout**: Delete the tokens and return to the login page.
- **CREATE_NOTES**: Create a new note.
- **DELETE_NOTES**: Delete the note .
- **Delete user**: Deletes all related notes.

## Installation
- Backend
To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/medhatjachour/task-react-django.git
    cd task-react-django
    ```

2. **Create a virtual environment**:
    ```bash
    cd backend
    python -m venv venv
    venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
4. **Run the Django server  **:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```

-Frontend
1. **Navigate to the frontend directory with new terminal**:
    ```bash
    cd frontend
    ```
2. **Install the dependencies**:
    ```bash
    npm install
    ```
3. **Start the React development server**:
    ```bash
    npm run dev
    ```

## Usage
- **Register a new user.**: Create a new user to start ur journey
- **Login with your credentials.**: start new journey 
- **Create, read, update, and delete notes.**: Create notes as much as you want
## API Endpoints
1. Authentication
- POST /api/user/register/ - Register a new user
- POST /api/user/login/ - Login and obtain JWT token
- POST /api/user/logout/ - Logout user
2. Notes
- GET /api/notes/ - Get all notes
- POST /api/notes/ - Create a new note
- DELETE /api/notes/:id/ - Delete a specific note
## Contributing
We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Acknowledgements
Django
React
Axios
React Router DOM

## Contact
For any questions or suggestions, please contact us at medhatjachour@gmail.com.

---

Feel free to customize this README to better fit your project's specifics. Let me know if you need any more details or assistance! 😊
