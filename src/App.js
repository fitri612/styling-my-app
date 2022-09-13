import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./components/Navbar";
import BasicExample from "./components/FirstNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* header */}
      <div className="header">
        {/* navbar */}
        <BasicExample />
        <NavScrollExample />
      </div>

      {/* body */}
      <div className="body ms-5">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluit py-5">
            <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create any layout you want.
            </p>
            <button
              className="btn btn-primary btn-lg "
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              click here to show modal box
            </button>
          </div>
        </div>
      </div>


      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">This is my first modal box</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
