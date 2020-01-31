import React from 'react';
import { Link, Router, RouteComponentProps } from '@reach/router';
import LastFm from './LastFm';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Music Graph</h1>
      <nav className="flex">
        <Link className="mr-6" to="/">
          Home
        </Link>
        <Link className="mr-6" to="dashboard">
          Dashboard
        </Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
};

const Home: React.FC<RouteComponentProps> = ({ path }: RouteComponentProps) => (
  <div>
    <h2>Welcome</h2>
    <LastFm />
  </div>
);

const Dashboard: React.FC<RouteComponentProps> = ({
  path
}: RouteComponentProps) => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

export default App;
