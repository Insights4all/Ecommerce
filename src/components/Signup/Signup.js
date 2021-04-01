import React from "react";

function Signup() {
  return (
    <div className="border">
      <h1>Signup Page</h1>
      <form action="/action_page.php">
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control w-50" id="email" />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control w-50" id="pwd" />
        </div>
        <div class="form-group">
          <label for="pwd">Confirm Password:</label>
          <input type="password" class="form-control w-50" id="pwd" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
