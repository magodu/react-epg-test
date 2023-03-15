import EpgContextProvider from './store/epg-context';
import AppRoutes from './AppRoutes';

import Layout from './components/design/Layout/Layout';

function App() {
    return (
        <EpgContextProvider>
            <Layout>
                <AppRoutes />
            </Layout>
        </EpgContextProvider>
    );
}

export default App;
