import {useEffect} from 'react';
import profileImage from "../images/rb.jpg";
import {useHistory} from 'react-router-dom';

const Profile = () => {
 const history = useHistory();
  const profilePage = async () => {
    try {
        const res =  await fetch('/profile', {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type" :  "application/json"
          },
          credentials: "include"
        });
        const data = await res.json();

        if(!data.status === 200){
          throw new Error("user not found");
        }
    }catch(err) {
      console.log(err);
      history.push("/login")
    }
  }

  useEffect(() => {
      profilePage();
  }, []);

  return (
    <>
      <div className="container profile mt-5">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={profileImage} alt="pf " />
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>Suraj Jadli</h5>
                <h6>Software Developer</h6>
              </div>

              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    role="tab"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    role="tab"
                    href="#profile"
                  >
                    profile
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btn"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="social-links">
                <p>Social Media</p>
                <a href="www.google.com" target="_blank">
                  Youtube
                </a>
                <br />
                <a href="www.google.com" target="_blank">
                  Facebook
                </a>
                <br />
                <a href="www.google.com" target="_blank">
                  Twitter
                </a>
                <br />
                <a href="ww.google.com" target="_blank">
                  Instagram
                </a>
                <br />
                <a href="www.google.com" target="_blank">
                  Koo
                </a>
                <br />
              </div>
            </div>

            <div className="col-md-8 info">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="userId">User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>35467787345</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="userId">User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>35467787345</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="userId">User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>35467787345</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="userId">User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>35467787345</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade show active"
                  id="profile"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="userId">User Id1</label>
                    </div>
                    <div className="col-md-6">
                      <p>35467787345</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="userId">User Id1</label>
                    </div>
                    <div className="col-md-6">
                      <p>35467787345</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="userId">User Id1</label>
                    </div>
                    <div className="col-md-6">
                      <p>35467787345</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="userId">User Id1</label>
                    </div>
                    <div className="col-md-6">
                      <p>35467787345</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
