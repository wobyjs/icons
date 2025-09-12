# Woby Feather Icon Gallery

A beautiful gallery to display all [Woby Feather Icons](https://github.com/feathericons/feather) with search functionality.

## Features

- Display all Feather icons in a responsive grid layout
- Real-time search functionality to filter icons by name
- Built with [Woby](https://github.com/wongchichong/woby), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)
- Responsive design that works on all device sizes

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [pnpm](https://pnpm.io/) (package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/feathericons/feather.git
   ```

2. Navigate to the icon gallery directory:
   ```bash
   cd woby-feather/icon-gallery
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

To start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

To create a production build:

```bash
pnpm build
```

The built files will be in the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
pnpm preview
```

## Usage

1. Browse through the icons in the grid
2. Use the search bar at the top to filter icons by name
3. Each icon displays its name below it

## Technologies Used

- [Woby](https://github.com/wongchichong/woby) - A high-performance framework with fine-grained observable-based reactivity
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

## License

MIT © [Carmelo Pullara](https://github.com/carmelopullara)