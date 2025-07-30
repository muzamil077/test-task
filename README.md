# Mover CRM - Modular Next.js Components

A fully responsive CRM application built with Next.js, TypeScript, and Tailwind CSS. All components are modular, reusable, and mobile-first.

## 🚀 Features

### ✅ **Fully Responsive Design**
- **Mobile-first approach** - Optimized for all screen sizes
- **Touch-friendly interfaces** - Large touch targets and proper spacing
- **Adaptive layouts** - Components adjust seamlessly across devices
- **Accessibility compliant** - ARIA labels, keyboard navigation, screen reader support

### ✅ **Modular Component Architecture**
- **Reusable UI components** - Button, Input, Card with consistent styling
- **Separated concerns** - Each component has a single responsibility
- **Type-safe** - Full TypeScript support with proper interfaces
- **Maintainable** - Easy to modify and extend

## 📱 Responsive Features

### **Mobile Optimizations**
- **Collapsible sidebar** - Hamburger menu on mobile devices
- **Touch-friendly buttons** - Minimum 44px touch targets
- **Responsive typography** - Text scales appropriately
- **Flexible layouts** - Components stack on mobile, side-by-side on desktop
- **Optimized spacing** - Reduced padding/margins on small screens

### **Desktop Enhancements**
- **Persistent sidebar** - Always visible on desktop
- **Hover effects** - Enhanced interactivity
- **Larger click areas** - More generous spacing
- **Multi-column layouts** - Better use of screen real estate

### **Tablet Adaptations**
- **Hybrid layouts** - Combines mobile and desktop features
- **Medium touch targets** - Balanced between mobile and desktop
- **Responsive grids** - Adapts to medium screen sizes

## 🏗️ Component Structure

```
components/
├── ui/                    # Reusable UI components
│   ├── Button.tsx        # Multi-variant button component
│   ├── Input.tsx         # Input with icon and error support
│   └── Card.tsx          # Flexible card container
├── layout/               # Layout components
│   ├── Header.tsx        # Responsive header with search
│   └── Sidebar.tsx       # Collapsible navigation sidebar
├── orders/               # Order-related components
│   ├── ClientCard.tsx    # Individual client display
│   ├── ClientSelection.tsx # Client search and selection
│   └── StepNavigation.tsx # Multi-step form navigation
├── calendar/             # Calendar components
│   ├── CalendarHeader.tsx # Calendar page header
│   ├── ViewSelector.tsx  # Calendar view toggles
│   └── DateNavigation.tsx # Date navigation controls
└── CRMLayout.tsx         # Main layout wrapper
```

## 🎯 Component Features

### **UI Components**
- **Button**: Primary, secondary, outline variants with responsive sizing
- **Input**: Icon support, error handling, accessible labels
- **Card**: Flexible padding options, responsive borders

### **Layout Components**
- **Header**: Mobile hamburger menu, responsive search, notification icons
- **Sidebar**: Mobile overlay, desktop persistent, active state highlighting

### **Order Components**
- **ClientCard**: Responsive client display with favorite indicators
- **ClientSelection**: Search functionality with responsive filtering
- **StepNavigation**: Horizontal scrolling on mobile, clickable steps

### **Calendar Components**
- **CalendarHeader**: Responsive title and subtitle display
- **ViewSelector**: Horizontal scrolling tabs on mobile
- **DateNavigation**: Compact mobile layout, accessible navigation

## 📱 Responsive Breakpoints

### **Mobile (< 640px)**
- Collapsible sidebar with overlay
- Stacked layouts
- Reduced padding and margins
- Touch-optimized buttons
- Horizontal scrolling for navigation

### **Tablet (640px - 1024px)**
- Hybrid sidebar behavior
- Medium-sized touch targets
- Balanced spacing
- Responsive grids

### **Desktop (> 1024px)**
- Persistent sidebar
- Multi-column layouts
- Hover effects
- Larger click areas

## ♿ Accessibility Features

### **Keyboard Navigation**
- All interactive elements are keyboard accessible
- Proper focus management
- Tab order follows visual layout

### **Screen Reader Support**
- ARIA labels on all buttons and controls
- Semantic HTML structure
- Descriptive alt text for icons

### **Visual Accessibility**
- High contrast ratios
- Clear focus indicators
- Consistent color usage

## 🛠️ Technical Implementation

### **Responsive Design Patterns**
```css
/* Mobile-first approach */
.component {
  /* Mobile styles */
  padding: 1rem;
  
  /* Tablet and up */
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
  
  /* Desktop and up */
  @media (min-width: 1024px) {
    padding: 2rem;
  }
}
```

### **Component Responsiveness**
- **Flexible layouts** using CSS Grid and Flexbox
- **Responsive typography** with clamp() functions
- **Touch-friendly sizing** with minimum 44px targets
- **Progressive enhancement** from mobile to desktop

### **Performance Optimizations**
- **Lazy loading** for non-critical components
- **Optimized images** with responsive srcsets
- **Minimal JavaScript** for mobile devices
- **Efficient CSS** with utility classes

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Desktop: http://localhost:3000
   - Mobile: Use browser dev tools to simulate mobile devices

## 📱 Testing Responsiveness

### **Manual Testing**
- Resize browser window to test breakpoints
- Use browser dev tools device simulation
- Test on actual mobile devices
- Verify touch interactions work properly

### **Automated Testing** 
- Component unit tests for responsive behavior
- Visual regression testing
- Accessibility testing with axe-core
- Performance testing with Lighthouse

## 🎨 Design System

### **Color Palette**
- Primary: Blue shades for main actions
- Secondary: Gray shades for secondary elements
- Success: Green for positive actions
- Error: Red for errors and warnings

### **Typography**
- Mobile: 14px base font size
- Tablet: 16px base font size
- Desktop: 18px base font size
- Responsive line heights and spacing

### **Spacing**
- Mobile: 4px, 8px, 16px increments
- Tablet: 8px, 16px, 24px increments
- Desktop: 16px, 24px, 32px increments

## 🔧 Customization

### **Adding New Components**
1. Create component in appropriate directory
2. Add TypeScript interfaces
3. Include responsive classes
4. Add accessibility attributes
5. Test across all breakpoints

### **Modifying Existing Components**
1. Update responsive classes
2. Test on all screen sizes
3. Verify accessibility
4. Update documentation

## 📈 Performance Metrics

### **Mobile Performance**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

### **Desktop Performance**
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2s
- Cumulative Layout Shift: < 0.05
- First Input Delay: < 50ms

## 🤝 Contributing

1. Follow mobile-first approach
2. Test on multiple devices
3. Ensure accessibility compliance
4. Maintain responsive design principles
5. Update documentation

## 📄 License

MIT License - see LICENSE file for details 