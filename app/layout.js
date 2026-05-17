import './globals.css'

export const metadata = {
  title: 'Beyond The Skill - Olympic Gymnastics Refinement',
  description: 'Precision refinement for advanced athlete development. Train with Indonesia\'s first Olympic gymnast, Rifda Irfanaluthfi.',
  keywords: 'gymnastics, olympic training, athlete refinement, Rifda Irfanaluthfi, gymnastics coaching, precision training',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
