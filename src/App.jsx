import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import VisitorApproval from './components/VisitorApproval';
import ManageEvent from './components/ManageEvent';
import ManageWinner from './components/ManageWinner';
import CandidateApproval from './components/CandidateApproval';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="ml-1/4 w-3/4 p-6">
          <Routes>
            <Route path="/" element={<VisitorApproval />} />
            <Route path="/candidate-approval" element={< CandidateApproval />} />
            <Route path="/manage-event" element={<ManageEvent />} />
            <Route path="/manage-winner" element={< ManageWinner />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
