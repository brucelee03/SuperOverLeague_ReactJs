const element = (
  //   Write your code here.
  <div className='bg-container' style={{textAlign: 'center'}}>
    <h1 className='heading'>Super Over League</h1>
    <div>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='img'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
