import './App.css';
import Soul from './Soul';

function App() {

    function goToMeeting() {
        window.location.replace("https://holopod-orig-dev-7eb584320244.herokuapp.com/teams-integration.html");
      }

  return (
    <div className="App">
            <div data-sm-content="teamsLink">
              <button
                className="kbc-style-button"
                id="join-meeting-button"
                type="button"
                onClick="{() => goToMeeting()}"
              >
                Call a human
              </button>
             </div>
       <Soul></Soul>
    </div>
  );
}

export default App;
