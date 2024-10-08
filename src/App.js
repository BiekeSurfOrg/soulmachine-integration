import './App.css';
import Soul from './Soul';

function App() {

    function goToMeeting() {
        call = callAgent.join({ meetingLink: MEETING_LINK }, {});

        call.on('stateChanged', () => {
          callStateElement.innerText = call.state;
        })

        call.feature(Features.Recording).on('isRecordingActiveChanged', () => {
          if (call.feature(Features.Recording).isRecordingActive) {
            recordingStateElement.innerText = "This call is being recorded";
          }
          else {
            recordingStateElement.innerText = "";
          }
        });
        setButtonDisable(false);

        teamsMeetingJoinButton.disabled = true;
      }

  return (
    <div className="App">
            <div data-sm-content="teamsLink">
              {buttonDisable ? <button
                className="kbc-style-button"
                id="join-meeting-button"
                type="button"
                disabled={false} onClick={() => goToMeeting()}
              >
                Call a human
              </button>
              }
             </div>
       <Soul></Soul>
    </div>
  );
}

export default App;
