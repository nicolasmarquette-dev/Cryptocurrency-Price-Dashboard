# Cryptocurrency Price Dashboard

A real-time cryptocurrency price dashboard built with Next.js, displaying prices for Bitcoin, Ethereum, Dogecoin, Cardano, and Solana.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cryptocurrency-price-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design Decisions

### Architecture

- **Next.js App Router**: Leverages the latest Next.js 15 features with the App Router for file-based routing and React Server Components.
- **Server-Side Rendering (SSR)**: The cryptocurrency list is rendered server-side for better SEO and initial load performance. Data is cached with a 60-second revalidation period.
- **Dynamic Routing**: Individual coin detail pages use dynamic routes (`/coins/[id]`) for dedicated views.

### Code Organization

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── common/            # Reusable components (Button, Loading, Error, ThemeSwitch)
│   ├── crypto-card/       # Individual cryptocurrency card
│   ├── crypto-card-list/  # List of cryptocurrency cards
│   └── coin-detail/       # Coin detail page component
├── constants/             # Application constants (crypto metadata, theme)
├── hooks/                 # Custom React hooks (useTheme)
├── lib/                   # API integrations (CoinGecko)
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions (formatting)
```

### Styling

- **CSS Modules**: Component-scoped styles to prevent conflicts and improve maintainability.
- **CSS Variables**: Theme system using CSS custom properties for seamless light/dark mode switching.
- **Responsive Design**: Mobile-first approach with media queries for different screen sizes.

### Theme System

- Light and dark mode support with persistent user preference via localStorage.
- Falls back to system preference (`prefers-color-scheme`) when no preference is stored.
- Theme toggle component accessible from any page.

### Internationalization Ready

- **Labels Pattern**: All user-facing strings are extracted into separate `.labels.ts` files per component, making future internationalization straightforward.

### API Integration

- **CoinGecko API**: Free public API for cryptocurrency data, no API key required.
- **Caching Strategy**: Server-side fetch with Next.js cache revalidation (60 seconds) to reduce API calls and improve performance.
- **Error Handling**: Retry logic with user-friendly error messages and retry button.

## Assumptions

1. **No Authentication**: The dashboard is publicly accessible without user authentication.
2. **USD Currency**: All prices are displayed in US Dollars.
3. **Limited Cryptocurrency Selection**: The dashboard focuses on 5 major cryptocurrencies (BTC, ETH, DOGE, ADA, SOL).
4. **Client-side Theme Persistence**: Theme preference is stored in localStorage, not synced across devices.
5. **CoinGecko Rate Limits**: The application respects CoinGecko's free tier rate limits through caching.

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility classes
- [CSS Modules](https://github.com/css-modules/css-modules) - Component styling
- [CoinGecko API](https://www.coingecko.com/api) - Cryptocurrency data
