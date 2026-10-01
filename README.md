# ☁️ AWS Sign-In Console Clone

A pixel-perfect, fully responsive clone of the official **Amazon Web Services (AWS) Management Console Sign-In** page built with **Next.js** and **React**.

---

## 📌 Features

- **Exact Replica Design**: Matches the authentic AWS IAM User Sign-in page with precision.
- **Official Assets & Icons**:
  - Centered AWS logo with the iconic curved smile arrow.
  - Official Amazon Lightsail promotional banner featuring high-speed light trails and the mascot robot.
  - Authentic 3D isometric orange cube favicon matching the AWS Management Console browser tab.
- **Interactive Form Elements**:
  - Controlled inputs for Account ID/alias, IAM username, and Password.
  - Toggle **Show / Hide Password** functionality.
  - Focus glow rings and hover states adhering to AWS design specifications.
  - "Remember this account" checkbox.
  - Primary button (`Sign in`), secondary button (`Sign in using root user email`), and `Create a new AWS account` link.
- **Dynamic Background Graphics**: Floating subtle 3D isometric cubes on the sides.
- **Fully Responsive**: Adapts seamlessly to desktop, tablet, and mobile screens.
- **Fast & Lightweight**: Built with Next.js App Router for optimal performance.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Styling**: Vanilla CSS (modular design tokens and responsive breakpoints)
- **Language**: JavaScript (ES6+)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version **18.17.0** or higher recommended)
- **npm** (comes with Node.js) or **yarn** / **pnpm** / **bun**
- [Git](https://git-scm.com/) (for cloning the repository)

You can check your Node and npm versions by running:
```bash
node -v
npm -v
```

---

## 🚀 Step-by-Step Installation & Setup

### Method 1: Clone via Git (Recommended)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mvisruth/aws-clone.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd aws-clone
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

### Method 2: Download as ZIP

1. Go to the GitHub repository: [https://github.com/Mvisruth/aws-clone](https://github.com/Mvisruth/aws-clone)
2. Click the green **Code** button and select **Download ZIP**.
3. Extract the downloaded `.zip` file onto your computer.
4. Open your terminal / command prompt and navigate to the extracted folder:
   ```bash
   cd path/to/aws-clone
   ```
5. Install packages:
   ```bash
   npm install
   ```
6. Run the project:
   ```bash
   npm run dev
   ```
7. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📂 Project Structure

```text
aws-clone/
├── app/
│   ├── globals.css         # Complete styling, layout, typography, and responsive rules
│   ├── layout.jsx          # Root layout, Open Sans Google Font, metadata, and favicon links
│   └── page.jsx            # Main page assembling header, cards, background, and footer
├── components/
│   ├── AwsLogo.jsx         # Scalable vector AWS logo
│   ├── BackgroundCubes.jsx # Floating 3D isometric cubes graphic
│   ├── Header.jsx          # Top utility navigation & centered AWS logo
│   ├── LightsailCard.jsx   # Amazon Lightsail banner card
│   ├── LightsailRobot.jsx  # Line-art Lightsail mascot robot SVG
│   └── SignInCard.jsx      # IAM User Sign-in interactive form card
├── public/
│   ├── aws-logo.png        # Official AWS logo
│   ├── favicon.ico         # AWS 3D isometric orange cube favicon
│   ├── favicon.svg         # Vector SVG favicon for high-DPI displays
│   ├── favicon-32x32.png   # 32x32 favicon
│   ├── icon-64x64.png      # 64x64 icon
│   └── lightsail-promo.png # Official Amazon Lightsail banner image
├── jsconfig.json           # Path aliases configuration (@/*)
├── package.json            # Project scripts and dependencies
└── README.md               # Project documentation
```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode on [http://localhost:3000](http://localhost:3000) with hot-reloading |
| `npm run build` | Builds the optimized production bundle |
| `npm run start` | Runs the production build locally |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Mvisruth/aws-clone/issues).

---

## 📄 License

This project is created for educational and portfolio demonstration purposes. All AWS trademarks, logos, and brand assets belong to Amazon Web Services, Inc. or its affiliates.
