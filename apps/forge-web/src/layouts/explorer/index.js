import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ThemeSwitcher from '../../components/theme_switcher';
import NetworkSwitcher from '../../components/network_switcher';

import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';
import withTracker from '../../components/withTracker';

import Logo from './logo';

import { useNodeInfo } from '../../libs/hooks';

function Layout({ children }) {
  const version = process.env.REACT_APP_VERSION;
  const [nodeInfo] = useNodeInfo();

  return (
    <Container>
      <AppBar position="absolute" className="appBar">
        <Toolbar disableGutters={false} className="toolbar">
          <Logo />
          <div className="switchers">
            <ThemeSwitcher className="switcher" />
            {window.location.pathname === '/' && <NetworkSwitcher className="switcher" />}
          </div>
        </Toolbar>
      </AppBar>
      <main className="main">
        <Content direction="column">{children}</Content>
        <Version key={version}>
          forge v{nodeInfo.version}, explorer v{version}
        </Version>
      </main>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

const Content = styled.div`
  height: ${props => (props.direction === 'row' ? '100%' : 'auto')};
  overflow: ${props => (props.direction === 'row' ? 'hidden' : 'scroll')};
  flex: 1 0 auto;
  display: flex;
  flex-direction: ${props => props.direction};
  box-sizing: border-box;
`;

const Version = styled.div`
  color: ${props => props.theme.typography.color.gray};
  opacity: 0.3;
  position: fixed;
  right: 24px;
  bottom: 24px;
  margin: 0;
  font-size: 12px;
  z-index: 99;
`;

const Container = styled.div`
  display: flex;

  .appBar {
    display: flex;
    justify-content: space-between;
    z-index: ${props => props.theme.zIndex.drawer + 1};
    background: ${props => props.theme.palette.background.default};
    box-shadow: 0 0 0 0 transparent;
  }

  .toolbar {
    background: ${props => props.theme.palette.background.default};
    color: ${props => props.theme.palette.text.primary};
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: ${props => props.theme.spacing.unit}px;
    width: 100%;
    max-width: ${props => props.theme.pageWidth}px;

    .switchers {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .switcher {
      cursor: pointer;
    }
  }

  .main {
    flex-grow: 1;
    padding-top: 80px;
    overflow: auto;
    box-sizing: border-box;
    position: relative;
  }
`;

export default withTracker(withRoot(withI18n(Layout)));
