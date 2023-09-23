# UFC Roster App

This project is a basic version of a MMA Roster App, designed to test the connection to the Sportradar API and fetch and display UFC data. The app is built using Django for the backend.

![App Screenshot](https://github.com/jkrbec/ufcz-testapp/blob/master/Screenshot%20from%202023-09-23%2014-50-17.png?raw=true) <!-- Replace with the path to your screenshot -->

## Setup and Installation

### 1. Clone the Repository
```sh
   git clone https://github.com/username/repository.git
   cd repository
```
### 2. Install Poetry
   We are using `poetry` for dependency management. If you don't have it installed, you can install it by running:
   ```sh
   curl -sSL https://install.python-poetry.org | python -
   ```
### 3. Install Dependencies
   Navigate to the project directory and run:
   ```sh
   poetry install
   ```
### 4. Create a `.env` File
   Create a `.env` file in the project root and add your Sportradar API key:
   ```env
   MY_API_KEY=your_api_key_here
   ```
### 5. Run the Development Server
   Activate the virtual environment and run the development server:
   ```sh
   poetry shell
   python manage.py runserver
   ```

Navigate to [http://127.0.0.1:8000/api-data-test/](http://127.0.0.1:8000/api-data-test/) in your web browser to view the app.



