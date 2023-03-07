import CircularBar from "../circularBar/CircularBar"
import Sips from "../snippets/sips"
import DetailsTable from "../DetailsTable"


const InvestorsDetails = () => {
    return(
        <div className="investor_details section">
            <div className="section-header">
              <h3 className="heading">Investors Details</h3>
              <div className="search-section">
                <div className="input">
                  <input placeholder="search by username id" />
                </div>
                <button className="primary-btn">Add</button>
                <button className="primary-btn">View All</button>
                <button className="primary-btn">Mutual Funds</button>
              </div>
            </div>
            <div className="investor-details-table">
              <DetailsTable />
            </div>
            <div className="sip-details">
              <div className="left-section">
                <h3 className="section-header">Your Sips</h3>
                <div className="your-sips">
                  <Sips
                    title="Active SIPS"
                    totalAmount="23.1K"
                    totalSips="10"
                    colorName="blue"
                  />
                  <Sips
                    title="Active SIPS"
                    totalAmount="23.1K"
                    totalSips="10"
                    colorName="blue"
                  />
                </div>
              </div>
              <div className="circular-graph">
                <CircularBar
                  datasets={[
                    {
                      data: [35, 55],
                      backgroundColor: ["#27ae60", "#34495e"],
                      borderWidth: 0.3,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
    )
}

export default InvestorsDetails