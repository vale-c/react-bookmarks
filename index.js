import React, {Fragment, useState} from 'react';
import ReactDom from 'react-dom';
import './main.css';

// Create the app
const App = () => {
  const [cardData, setCardData] = useState([{ linkName: 'my link', linkHref: 'https://github.com'}]);
  const [newCard, setNewCard] = useState({linkName: '', linkHref: ''});

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
              <form onSubmit={e => e.preventDefault()}>
                <h2 className="formTitle">Add a bookmark</h2>
                <div>
                  <label 
                    htmlFor="linkTitle"
                    className="formLabel">Enter a bookmark name</label>
                  <input 
                    value={newCard.linkName}
                    onChange={e => setNewCard({...newCard, linkName: e.currentTarget.value})}
                    type="text" 
                    name="linkTitle"
                    minLength="1"
                    maxLength="25"
                    placeholder="25 characters max"
                  />
                </div>
                <div>
                  <label
                    htmlFor="linkHref3"
                    className="formLabel">Enter a bookmark name</label>
                    <input
                      value={newCard.linkHref}
                      onChange={e => setNewCard({...newCard, linkHref: e.currentTarget.value})}
                      type="text" 
                      name="linkHref3"
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
