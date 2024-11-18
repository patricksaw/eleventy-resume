
# JSON Resume + Tailwind CSS + Eleventy

A resume site built using [JSON Resume](https://jsonresume.org/), [Tailwind CSS](https://tailwindcss.com/), and [Eleventy](https://www.11ty.dev/) hosted on **Cloudflare Pages**.

## Features

- **JSON Resume**: All resume data is stored in a standardized [JSON Resume](https://jsonresume.org/) format for portability and flexibility.
- **Tailwind CSS**: Modern utility-first CSS framework with responsive, mobile-first design.
- **Eleventy (11ty)**: Static site generator with clean, Nunjucks templates for dynamic rendering.
- **Cloudflare Pages**: Serverless deployment for fast and efficient hosting.
- **Modular Components**: Resume sections are broken down into reusable templates for easy customization.
- **Dynamic Images**: Projects section includes images stored under `src/img/project-images` with consistent sizing.

---

## Directory Structure

```
├── src/
│   ├── _data/
│   │   └── resume.json           # JSON Resume file
│   ├── _includes/
│   │   └── components/           # Reusable resume section templates
│   ├── assets/
│   │   └── styles.scss           # Custom SCSS styles
│   ├── img/
│   │   └── project-images/       # Images for the Projects section
│   └── index.njk                 # Main Nunjucks template
└── tailwind.config.js            # Tailwind CSS configuration
└── eleventy.config.js            # Eleventy configuration
```

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build Tailwind CSS:
   Tailwind CSS uses `styles.scss` to generate the necessary CSS. Run the following command:
   ```bash
   npm run build:css
   ```

4. Start the Eleventy server:
   ```bash
   npm run serve
   ```

5. Visit your local development server:
   ```
   http://localhost:8080
   ```

6. Update `./src/_data/resume.json` with your information! 

7. Create a [Free Cloudflare Account](https://www.cloudflare.com/plans/free/)

8. Deploy to Cloudflare Pages using [Wrangler](https://developers.cloudflare.com/workers/wrangler/commands/)

---

## Configuration

### JSON Resume
Update the `resume.json` file under `src/_data/` to reflect your resume details. For information on the JSON Resume schema, visit [JSON Resume Schema](https://jsonresume.org/schema/).

One addition has been made to the jsonresume schema
```  
 "projects": [{
   ...
    "image":"filename.ext",    
    ...
  }]
```  
By default the images will be pulled from /assets/img/project-image as defined in `./src/_includes/components/experience.njk`

### Eleventy configuration 
In `./eleventy.js` there is a variable 
```
const earliestYear = 2011;
```
This can be set in situations, like my own, where there is a lot of experience / shift in focus that you may want to include as "referenceable" and within the resume.json, but don't want to have pages of outdated experience. For me 2011 is the cutoff.

I may change this in the future so that the old experience can be expanded on the site, and is excluded from the print version. 

### Project Images
Add images for the **Projects** section to the `src/img/project-images/` directory. Images should have consistent dimensions to ensure uniform display. See above for the addition to the jsonresume schema to support these images.

### Tailwind CSS
Modify the `tailwind.config.js` file to extend or customize Tailwind classes. SCSS styles can be added or updated in `src/assets/styles.scss`. A mobile-first approach was taken, with the print specific css optimized for a PDF resume output.

### Eleventy Templates
The main resume template is in `src/index.njk` - if you want to disable (or enable) any sections you can comment them out here. 
All reusable templates are located in `src/_includes/components/`. This includes sections for **Address/Contact Info**, **Education**, **Skills**, **Experience**, and **Projects**.

---

## Deployment

1. **Build the Project**:
   Generate the static files using:
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages**:
   - Create a new project on [Cloudflare Pages](https://pages.cloudflare.com/).
   - Install Cloudflare's wrangler command line tool:
   ```
   npm install -g wrangler
   ```
   - Authenticate with cloudflare
   ```
   wrangler login
   ```
   - Run the build and deploy command: - this will build the css, the eleventy site, and then start the cloudflare deploy
   ```
   npm run deploy
   ```
   - Follow the prompts from wrangler - you will need to specify a project name and the project will be created for you

3. **Cloudflare Custom Domain Configuration**:

You will probably want to host your sweet resume/portfolio on a custom domain, see these instructions from cloudflare for details:
[Cloudflare Pages - Custom Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)

---

## Scripts

| Command                 | Description                                             |
|-------------------------|---------------------------------------------------------|
| `npm run build`         | Builds the site for production.                         |
| `npm run build:example` | Builds the example site to keep in the repo             |
| `npm run start`         | Starts the local Eleventy development server.           |
| `npm run build:css`     | Compiles the SCSS styles into Tailwind CSS.             |
| `npm run watch:css`     | Watches for changes in SCSS files and rebuilds CSS.     |

---

## License

This project is licensed under the WTFPL License. You can do whatever the fuck you want.
