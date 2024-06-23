import './src/App.css'

import App from "./src/App.jsx";
import { createRoot } from "react-dom/client";
import { FiltersProviders } from './src/context/filtersContext.jsx';
const root=createRoot(document.getElementById('app'))
root.render(
<FiltersProviders>
<App/>
</FiltersProviders>

)