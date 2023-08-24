'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig, useAccount } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { ConnectButton, lightTheme, darkTheme } from '@rainbow-me/rainbowkit'
import FileLoader from './FileLoader'

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_ID ?? 'default-key'
const appName = process.env.NEXT_PUBLIC_APP_NAME ?? 'default-app-name'
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? 'default-project-id'

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [alchemyProvider({ apiKey }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName,
  projectId,
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const BodyComp = () => {
  return (
    <main
      className='
      fixed 
      left-0 
      right-0 
      top-0 
      bottom-0 
      flex 
      justify-center 
      items-center 
      bg-slate-100 
      dark:bg-slate-900'
    >
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          modalSize='compact'
          theme={{
            lightMode: lightTheme(),
            darkMode: darkTheme({
              borderRadius: 'medium',
              fontStack: 'system',
              overlayBlur: 'none',
            }),
          }}
        >
          <ConnectButton />
          <LoadFile />
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  )
}

function LoadFile() {
  const { isConnected } = useAccount()
  return isConnected ? <FileLoader /> : null
}

export default BodyComp
