import React from 'react';
import './styles/NotFoundPage.css';

/**
 * Element to display when a page is not found.
 * @return {JSX.Element} A 404: Page Not Found! Element
 */
export default function NotFoundPage() {
  return (
    <div className="not-found">
      <p className="not-found-code">404</p>
      <h1 data-testid="not-found-page" className="not-found-title">
        Page not found
      </h1>
      <p className="not-found-text">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <a href="/kevin-website" className="not-found-link">
        Go to the homepage
      </a>
    </div>
  );
}
