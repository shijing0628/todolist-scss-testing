import React, { useState } from 'react';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import { ProjectsProvider, SelectedProjectsProvider } from './context';
import PropTypes from 'prop-types';


function App({ darkModeDefault = false }) {
  const [darkMode, setDarkMode] = useState(darkModeDefault)
  return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <main data-testid="application" className={darkMode ? 'darkmode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>

    </SelectedProjectsProvider>

  );
}
App.propTypes = {
  darkModeDefault: PropTypes.bool,
};
export default App;
