// Brand Widget PLP — the "noon App GitFlow" (noon-app-skill, @noon/flow-kit) HOME, built standalone and mounted
// into #nkHome on every iteration's Home view: frameless, toasts off, only the Home flow registered. Its search bar
// is intercepted by the page (app.js) and opens the prototype's own Search page.
import { createRoot } from 'react-dom/client';
import { setWasmUrl } from '@lottiefiles/dotlottie-react';
import { NoonPrototype } from '@kit/kit/NoonPrototype';
import { homeFlow } from '@kit/flows/home';
import '@kit/motion/custom';

setWasmUrl(new URL('./node_modules/@lottiefiles/dotlottie-web/dist/dotlottie-player.wasm', import.meta.url).href);

const el = document.getElementById('nkHome');
if (el) createRoot(el).render(<NoonPrototype flows={[homeFlow]} frame={false} toasts={false} initialRoute="home/home" />);
