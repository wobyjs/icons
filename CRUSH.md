# Codebase Conventions

## Commands
- **Build**: `npm run build` (uses TypeScript compiler)
- **Lint**: `npx eslint src/` (uses AirBnB config)
- **Format**: `npx prettier-eslint --write src/`
- **Test**: No tests currently specified

## Code Style
- **Language**: TypeScript with React JSX
- **Imports**: 
  - Use ES6 import/export syntax
  - Import React if using JSX
  - Import icons as named imports from 'react-feather'
- **Formatting**: 
  - Prettier with single quotes, trailing commas, bracket spacing
  - 2 space indentation
- **Types**: 
  - Use TypeScript for all components
  - Define props interfaces
  - Use React.FC<Props> for functional components
- **Naming**:
  - PascalCase for components and icon files
  - camelCase for props and variables
  - All icon components should end with 'Icon'
- **Error Handling**:
  - Use TypeScript for compile-time error checking
  - No specific runtime error handling patterns defined

## File Structure
- `src/icons/`: Individual feather icon components
- `src/radix/`: Radix UI icon components
- `src/index.tsx`: Main export file