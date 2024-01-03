import React from "react";

Export Default function Search(){
    return(
<form id="search-form">
            <div class="city">
              <input
                type="text"
                id="city-name"
                class="form-control"
                placeholder="Enter a city"
              />
            </div>
            <button type="submit" class="btn btn-primary">Search</button>
          </form>

    );
}
