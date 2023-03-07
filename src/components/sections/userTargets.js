import React from "react";
import { userData } from "../../userData";
import CircularBar from "../circularBar/CircularBar";
import Category from "../snippets/category";
const UserTargets = () => {
  const datasets = () => {
    let data = []
    let backgroundColor = []
    userData.forEach((user) => {
       data.push(user.invested)
       backgroundColor.push(user.background)
    })
    return {data: data, backgroundColor: backgroundColor}
  }
  
    return(
        <div className="targets section">
          
        <div className="block">
          <h3>Your Targets</h3>
          <div className="categories">
            {userData.map((user) => {
              return (
                <Category key={user.id} user={user} />      
              );
            })}
          </div>
        </div>
        <div className="circular-graph">
          <CircularBar
            datasets={[
              {
                data: datasets().data,
                backgroundColor: datasets().backgroundColor,
                borderWidth: 0.3,
              },
            ]}
          />
        </div>
      </div>
    )
}

export default UserTargets