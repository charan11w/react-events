function Events() {

  function showOutput(any) {
    console.log(any.target.value)
  }

  function show(event){
    console.log('hello')
  }


  return (
    <div className="total">
      <div className="forms">
        <div className="info">
          Open Console to View Output
        </div>
        <label for="user" className="user">Enter Your User Name:</label>
        <input type="text" id="user" onChange={showOutput} />
        <label for="pass" className="pass">Enter Your Email:</label>
        <input type="email" id="pass" />
        <button type="submit" className="s" onClick={show}>Submit</button>
      </div>
    </div>
  );
}

export default Events;