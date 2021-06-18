import Navbar from "../../Shared/components/Navbar/Navbar";
import React, { Fragment } from 'react';
import Header from "../../Shared/components/Header/Header";

const Dashboard = () => {
  console.log('inside dashboard')
  return (
    <Fragment>
      <Header isLoggedin={true}/>
      <Navbar />
      <div className="modal fade" id="site__search" tabIndex="-1" role="dialog" aria-labelledby="site_search_label" aria-hidden="true">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span className="icon-close" aria-hidden="true"></span>
        </button>

        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <div className="search-bar-list">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-secondary" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="setting">
        <h3>Setting</h3>
        <div className="setting_items">
          <div className="setting_items-subitem sts">
            <span><i className="fas fa-user-plus"></i></span>
            <p>Students</p>
          </div>
          <div className="setting_items-subitem classes">
            <span><i className="fas fa-users"></i></span>
            <p>classNamees</p>
          </div>
          <div className="setting_items-subitem teacher">
            <span><i className="fas fa-user-plus"></i></span>
            <p>Teachers</p>
          </div>
          <div className="setting_items-subitem manage_events">
            <span><i className="far fa-calendar"></i></span>
            <p>Manage Events</p>
          </div>
          <div className="setting_items-subitem exam">
            <span><i className="fas fa-briefcase"></i></span>
            <p>Exam</p>
          </div>
          <div className="setting_items-subitem subject">
            <span><i className="fas fa-book"></i></span>
            <p>Subject</p>
          </div>
          <div className="setting_items-subitem enquiry">
            <span><i className="fas fa-search"></i></span>
            <p>Enquiry</p>
          </div>

        </div>
      </div>
    </Fragment>


  );
}

export default Dashboard;