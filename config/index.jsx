import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { base } from 'wagmi/chains';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'Bob Swap',
  description: 'Bob Swap',
  url: '',
  icons: [
    'https://static.wixstatic.com/media/57783e_70322182a2f7419280ea7695fdef79de~mv2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pfp8080Blue.png',
  ],
};

// Create wagmiConfig
const chains = [base];
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  auth: {
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'apple'],
    showWallets: true,
    walletFeatures: true,
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
