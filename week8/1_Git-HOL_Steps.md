# Week8 - 1. Git-HOL Lab Steps

## Objectives
- Get familiar with Git commands: `git init`, `git status`, `git add`, `git commit`, `git push`, `git pull`.
- Configure Git and set Notepad++ as the default editor.
- Add a file to a source code repository.

---

## Step 1: Setup Git Configuration
1. **Check if Git is installed:**
   ```sh
   git --version
   ```
2. **Configure your user name and email:**
   ```sh
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```
3. **Verify configuration:**
   ```sh
   git config --list
   ```

---

## Step 2: Integrate Notepad++ as Default Editor
1. **Check if Notepad++ is in PATH:**
   ```sh
   notepad++
   ```
   If not recognized, add Notepad++ path to your system environment variables.
2. **Set Notepad++ as default Git editor:**
   ```sh
   git config --global core.editor "notepad++ -multiInst -notabbar -nosession -noPlugin"
   ```
3. **Verify default editor:**
   ```sh
   git config --global -e
   ```

---

## Step 3: Add a File to Source Code Repository
1. **Create a new project folder and initialize Git:**
   ```sh
   mkdir GitDemo
   cd GitDemo
   git init
   ```
2. **Create a file and add content:**
   ```sh
   echo Welcome to Git Demo! > welcome.txt
   ```
3. **Check file status:**
   ```sh
   git status
   ```
4. **Add file to staging area:**
   ```sh
   git add welcome.txt
   ```
5. **Commit the file:**
   ```sh
   git commit -m "Add welcome.txt"
   ```
6. **Create a remote repository (on GitHub or GitLab) named `GitDemo` and link it:**
   ```sh
   git remote add origin <your-remote-repo-url>
   ```
7. **Pull remote (if needed):**
   ```sh
   git pull origin master
   ```
8. **Push local commits to remote:**
   ```sh
   git push origin master
   ```

---

> **Note:** Replace `<your-remote-repo-url>` with your actual repository URL.

---

Follow these steps in your week8 folder or as a new project as required by your assignment.
