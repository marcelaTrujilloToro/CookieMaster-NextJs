import { useEffect, useState } from 'react';
import '@/styles/globals.css'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import type { AppContext, AppProps } from 'next/app'
import { darkTheme, lightTheme, customTheme } from '../themes'
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string
}

export default function App({ Component, pageProps, theme = 'dark' }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {

    const cookieTheme = Cookies.get('theme') || 'light'

    const selectedtheme = cookieTheme === 'light'
      ? lightTheme
      : cookieTheme === 'dark'
        ? darkTheme
        : customTheme

    setCurrentTheme(selectedtheme)
  }, [])


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// hace que todas las paginas sean del lado del server, ya uqe esta en la parte mas alta de la aplicacion 
// App.getInitialProps = async (appContext: AppContext) => {

//   const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' }

//   const validThemes = ['light', 'dark', 'custom'];

//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark',
//   }
// }
