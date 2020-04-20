import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import './main.css';

// Create the app
const App = () => {

  const linkImageStyle = {
    backgroundImage: 'url(\'https://image.flaticon.com/icons/svg/1160/1160462.svg\')'
  }

  return (
    <Fragment>
        <nav className="navigation">
          <a><img height="40px" src="https://image.flaticon.com/icons/svg/1160/1160462.svg" alt=""/></a>
          <ul>
            <li>Home</li>
          </ul>
          </nav>
          <main>
            <div className="leftContent">
              <img src="https://image.flaticon.com/icons/svg/1160/1160462.svg" alt=""/>
              <form>
                <h2 className="formTitle">Add a bookmark</h2>
                <div>
                  <label htmlFor="linkTitle" className="formLabel">Enter a bookmark name</label>
                  <input 
                    type="text" 
                    name="linkTitle"
                    minLength="1"
                    maxLength="25"
                    placeholder="25 characters max"
                  />
                </div>
                <div>
                  <label htmlFor="linkHref" className="formLabel">Enter a bookmark name</label>
                    <input 
                      type="text" 
                      name="linkHref"
                      minLength="7"
                      maxLength="25"
                      placeholder="https://example.com"
                    />
                </div>
                <button>Add</button>
              </form>
            </div>
            <div className="rightContent">
              <div className="linkCard">
                <div className="linkCardImage" style={linkImageStyle}/>
                <div className="linkCardLink"><h2><a href="#">My Link</a></h2></div>
              </div>
              <div className="linkCard">
                <div className="linkCardImage" style={linkImageStyle}/>
                <div className="linkCardLink"><h2><a href="#">My Link</a></h2></div>
              </div>
              <div className="linkCard">
                <div className="linkCardImage" style={linkImageStyle}/>
                <div className="linkCardLink"><h2><a href="#">My Link</a></h2></div>
              </div>
              <div className="linkCard">
                <div className="linkCardImage" style={linkImageStyle}/>
                <div className="linkCardLink"><h2><a href="#">My Link</a></h2></div>
              </div>
              <div className="linkCard">
                <div className="linkCardImage" style={linkImageStyle}/>
                <div className="linkCardLink"><h2><a href="#">My Link</a></h2></div>
              </div>
              <div className="linkCard">
                <div className="linkCardImage" style={linkImageStyle}/>
                <div className="linkCardLink"><h2><a href="#">My Link</a></h2></div>
              </div>
            </div>
          </main>
    </Fragment>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
