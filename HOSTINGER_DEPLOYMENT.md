# Hostinger Next.js 14 Deployment Guide

Next.js apps can be tricky to host on shared hosting / cPanel environments like Hostinger. Since you are using a Node.js App container, follow these steps exactly to deploy accurately.

## 1. Prepare Your Local Files
1. Run `npm run build` locally on your machine.
2. Next.js will generate a folder called `.next/standalone`.
3. Open the `.next/standalone` folder. This folder actually contains a mini-version of your entire application!
4. **Important**: Copy the `public` folder and the `.next/static` folder from your *main* project directory, and paste them *inside* `.next/standalone/.next` (you will need to create the `.next` folder inside `standalone` if it doesn't exist, and put `static` inside it. Put `public` directly inside `standalone`).
5. Now, ZIP the entire contents of the `.next/standalone` folder.

## 2. Hostinger Setup
1. Log into Hostinger hPanel and go to **Websites** -> **Manage**.
2. Go to **Advanced** -> **Node.js**.
3. Create a new Node.js application. 
   * **Node Version:** Choose `20.x` or `18.x`.
   * **Application Mode:** `Production`.
   * **Application URL:** Select your domain.
   * **Application startup file:** `server.js`.
4. Click **Create** or **Save**.

## 3. Upload Your Files
1. Go to **Files** -> **File Manager**.
2. Navigate to your application's root directory (e.g. `domain.com/public_html` or wherever you pointed the Node App).
3. Upload the ZIP file you created in Step 1.
4. Extract the ZIP file directly into the folder.
5. Make sure the `server.js` file is directly inside the root folder, alongside `.next`, `package.json`, etc. (I have already created this specifically for you!).

## 4. Install Dependencies & Start
1. Go back to the **Node.js** panel in hPanel.
2. Click **Stop App** if it's running.
3. Click **NPM Install** (this installs the minimal production dependencies from your standalone package.json).
4. Click **Start App**.
5. Wait 1-2 minutes and visit your domain. It should be live!

### Troubleshooting
* **503 Service Unavailable:** Ensure that `server.js` is set as the startup file and that `npm install` actually finished. Check the App Logs in the Node.js panel.
* **404 Image Missing:** You forgot to copy the `.next/static` folder into the `.next/standalone/.next` structure before zipping!
* **Port Errors:** Hostinger strictly requires Node apps to listen on `process.env.PORT` or specific Unix socket files (which passenger automatically handles via the `http` module in the `server.js` provided).
