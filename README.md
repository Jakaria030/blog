# Blog
This is a very simple NextJS project develope for understand basic file structure, components, Kinde authentication and deploye system.

## See Live Site: [https://blog-three-zeta-29.vercel.app](https://blog-three-zeta-29.vercel.app)

# ✨ Features
- **View All Posts:** Displays a list of all blog post titles.
- **View Post Details:** View detailed information about a specific post.
- **Static Routes:** Predefined routes for static pages.
- **Dynamic Routes:** Routes generated dynamically based on blog data.
- **Protected Routes:** Secure access to certain routes.
- **Kinde Authentication:**
  - Google-based authentication.
  - Email + code-based authentication.


# 🛠️ Tech Stack
- **Framework:** NextJS
- **Authentication:** Kinde
- **Styling:** Tailwind CSS
- **Deployement:** Vercel


# 📦 Installation and Setup
Follow the steps below to set up and run this project on your local machine:

**1. Clone the repository**
```bash
git clone https://github.com/Jakaria030/blog.git
```
**2. Navigate to the project directory**
```bash
cd blog
```
**3. Install development dependancies**
```bash
npm install
```
**4. Set up environment veriables**
```bash
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_DOMAIN=your_kinde_domain
```
Replace your_kinde_client_id, your_kinde_client_secret, and your_kinde_domain with the credentials from your Kinde account.

**4. Run the development server**
```bash
npm run dev
```