import React from 'react'

const HomePage = ({ history }) => {
  return (
    // <div>
    //   <div className="ui inverted vertical masthead center aligned segment">
    //     <div className="ui text container">
    //       <h1 className="ui inverted stackable header">

    //         <div className="content">Event Hunt</div>
    //       </h1>
    //       <h2>Do whatever you want to do</h2>
    //       <div onClick={() => history.push('/events')} className="ui huge white inverted button">
    //         Get Started
    //               <i className="right arrow icon" />
    //       </div>
    //     </div>
    //   </div>

    // </div>

    <div className="landing" >
      <div className="dark-overlay landing-inner text-light" >
        <div className="ui text container center aligned">

          <h1 ui center aligned icon header>


            <h1 class="ui orange inverted header">
              <div className="content"> Event Hunt</div></h1>
            <hr />
            <h1 class="ui red inverted header"> Travel  Cultures Party  Drinking  Foods</h1>




            <div onClick={() => history.push('/events')} className="ui huge white inverted button">
              Get Started
                    <i className="right arrow icon" />
            </div>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
