# Bhanu Sharma Portfolio - Multi-Theme System

A modern, responsive portfolio website with a comprehensive multi-theme system featuring 6 beautiful color themes.

## 🎨 Theme System Features

### Available Themes
1. **Default** - Classic blue to teal gradient
2. **Ocean** - Cyan to blue ocean-inspired colors
3. **Sunset** - Warm orange to red sunset palette
4. **Forest** - Natural green to emerald tones
5. **Lavender** - Purple to indigo elegant theme
6. **Midnight** - Sophisticated slate to gray colors

### Theme Features
- **6 Beautiful Color Themes** - Each with unique primary, secondary, and accent colors
- **Dark/Light Mode Support** - Automatic theme adaptation for both modes
- **Smooth Transitions** - Elegant animations when switching themes
- **Persistent Preferences** - Theme choices are saved in localStorage
- **Responsive Design** - Themes work perfectly on all device sizes

### How to Use Themes
1. **Theme Selector** - Click the palette icon in the header to open theme options
2. **Theme Gallery** - Visit the "Theme Gallery" section to see all themes in action
3. **Dark Mode Toggle** - Use the sun/moon icon to switch between light and dark modes
4. **Automatic Persistence** - Your theme choice is automatically saved

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd project

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production
```bash
npm run build
```

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **Custom Theme System** - Advanced theming with CSS-in-JS

## 📱 Features

### Core Features
- **Responsive Design** - Works on all devices
- **Smooth Animations** - CSS animations and transitions
- **Interactive Components** - Modal dialogs, photo gallery, theme selector
- **SEO Optimized** - Meta tags and semantic HTML
- **Performance Optimized** - Lazy loading and efficient rendering

### Portfolio Sections
- **Hero Section** - Animated introduction with theme-aware styling
- **About Me** - Personal information and background
- **Internship Experience** - AWS Developer role details
- **Projects** - AI and IoT project showcase
- **Skills** - Technical skills and expertise
- **Certifications** - Professional certifications
- **Career Objective** - Future goals and aspirations
- **Photo Gallery** - Visual journey through achievements
- **Contact Information** - Multiple ways to get in touch
- **Theme Gallery** - Interactive theme showcase

## 🎯 Customization

### Adding New Themes
To add a new theme, update the `themes` object in `src/App.tsx`:

```typescript
export const themes = {
  // ... existing themes
  newTheme: {
    name: 'New Theme',
    primary: 'from-red-500 to-pink-500',
    secondary: 'from-purple-500 to-indigo-500',
    accent: 'from-yellow-400 to-orange-500',
    background: 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-black-900 dark:to-red-900',
    card: 'bg-white/80 dark:bg-black-800/80 backdrop-blur-sm',
    text: 'text-black-900 dark:text-white',
    textSecondary: 'text-black-600 dark:text-black-300',
    border: 'border-red-200 dark:border-red-700',
    hover: 'hover:bg-red-50 dark:hover:bg-red-900/50',
    button: 'bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
    icon: 'text-red-600 dark:text-red-400'
  }
};
```

### Theme Properties
Each theme object contains:
- `name` - Display name for the theme
- `primary` - Main gradient colors for primary elements
- `secondary` - Secondary gradient colors
- `accent` - Accent gradient colors
- `background` - Background styling classes
- `card` - Card component styling
- `text` - Primary text color classes
- `textSecondary` - Secondary text color classes
- `border` - Border color classes
- `hover` - Hover state styling
- `button` - Button styling classes
- `icon` - Icon color classes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Bhanu Sharma**
- BCA Student specializing in AI & IoT
- AWS Developer Intern at Linux World
- Passionate about AI, Machine Learning, and IoT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS* 