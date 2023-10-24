import React from 'react';
import './FORMPLANNER.css';

const BackgroundLayer = () => (
    <main className="bg">
        <div className="bg-child" />
        <div className="bg-item" />
        <div className="bg-inner" />
        <div className="ellipse-div" />
        <div className="bg-child1" />
        <img className="group-icon" alt="" src="/group-287.svg" />
        <div className="bg-child2" />
        <div className="bg-child3" />
    </main>
);

const InputGroup = ({ label, type = 'text', placeholder, name, value, onChange, error }) => (
  <div className="input-group">
      <label>{label}</label>
      <input 
          type={type} 
          placeholder={placeholder} 
          name={name} 
          value={value}
          onChange={onChange}
      />
      {error && <div className="error-message">{error}</div>}
  </div>
);



const Logo = () => (
    <div className="logo">
        <img alt="" src="/cogentlogo-white-1.svg"/>
    </div>
);
const LoaderModal = () => (
  <div className="loader-modal-overlay">
      <div className="loader-modal">
      <h4> 
          <span className='blue-text'>Biz Strategy </span> 
          <span className='orange-text'>Planner</span>
      </h4>
          <p>Loading strategies from the GTP Model...</p>
      </div>
  </div>
);


const StrategyComponent = ({ strategies, resetStrategies }) => (
  <div className="strategy-list">
      {strategies.map((strategy, index) => (
          <div key={index} className="strategy-item">
              <div className="header-wrapper">
                  <h5 className='blue-text strategy-title'>{strategy.title}</h5>
                  <span className="rating">⭐ 5.0</span>
              </div>
              <p className='strategy-desc'>{strategy.strategyDescription}</p>
          </div>
      ))}
      <div>
          <button onClick={resetStrategies}>Try again!</button>
      </div>
  </div>
);


const FormHeader = ({ titlePart1, titlePart2, description }) => (
  <div className="header">
      <h4> 
          <span className='blue-text'>{titlePart1}</span> 
          <span className='orange-text'>{titlePart2}</span>
      </h4>
      <p>{description}</p>
  </div>
);


class FormPlanner extends React.Component {
  state = {
      titlePart1: "Welcome to ",
      titlePart2: "Biz Strategy Planner",
      description: "Dive into the Biz Strategy Planner and navigate your business's future with clarity and confidence",
      department: "IT",
      companySize: "15",
      sector: "software",
      particularNeed: "general strategies",
      errors:{},
      strategies:[],
      loading:false,
  };
  
  validateForm = () => {
    const { department, companySize, sector, particularNeed } = this.state;
    let errors = {};
    let formIsValid = true;

    if (!department.trim()) {
        errors["department"] = "Department cannot be empty!";
        formIsValid = false;
    }
    if (!companySize.trim()) {
        errors["companySize"] = "Company Size cannot be empty!";
        formIsValid = false;
    }
    if (!sector.trim()) {
        errors["sector"] = "Sector cannot be empty!";
        formIsValid = false;
    }
    if (!particularNeed.trim()) {
        errors["particularNeed"] = "Please provide a particular need!";
        formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  };

  handleSubmit = async (event) => {
      event.preventDefault();
      
      if (this.validateForm()) {
        this.setState({ loading: true }); 
        console.log("Form is valid. Do the submission logic here.");
        console.log("Form Values:");
        console.log("Department:", this.state.department);
        console.log("Company Size:", this.state.companySize);
        console.log("Sector:", this.state.sector);
        console.log("Particular Need:", this.state.particularNeed);

        this.setState({
            titlePart1: "Biz Strategy ",
            titlePart2: "Planner",
            description: "Consider implementing these strategies:"
        });

        const promptText = `
            For a company of ${this.state.companySize} employees in the ${this.state.sector} sector, 
            generate business and department strategies for the ${this.state.department} department,
            especially ${this.state.particularNeed} . Respond with the strategies with the following json structure only:
            """{"strategies":[{"title":"","strategyDescription":""}],"extraRemarks":""}"""
            Important: Do not respond in any other format or add any other text except for the json response,
            since the response will be used to call a function programatically
        `;

        try {
            const response = await this.callGPT4API(promptText);
            const responseData = JSON.parse(response); // Assuming response contains data in a data field
            this.handleStrategyResponse(responseData);
        } catch (error) {
            console.error("Error calling GPT-4 API:", error);
        } finally {
          this.setState({ loading: false });  // Set loading to false after API call
        }        
    } else {
        console.log("Form has errors. Fix them before submitting.");
    }
  };

  callGPT4API = async (prompt) => {
    const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions'; // Update to chat/completions endpoint
    const API_KEY = 'your API KEY here'; // Replace with your API key

    const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
    };

    // For chat models, the body typically consists of a series of messages
    // You start with a system message (optional but recommended), then alternate between user and assistant messages.
    const body = {
        'model': 'gpt-3.5-turbo',
        'messages': [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        'temperature': 0.1,
        'max_tokens': 1200 // Adjust as necessary
    };

    const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    });

    const jsonResponse = await response.json();

    // The model's reply can be extracted from the assistant's message in the response
    if (jsonResponse && jsonResponse.choices && jsonResponse.choices.length > 0) {
        return jsonResponse.choices[0].message.content;
    } else {
        throw new Error("Invalid response from OpenAI API");
    }
  };


 
  handleStrategyResponse = (data) => {
      // Process the received strategy and handle as required.
      console.log(data);
      let strategies=data.strategies;
      this.setState({
        strategies
      });
      this.setState({ loading: false }); 
      // Here, you can save the data to the state or call other functions, as needed.
  };

  resetStrategies = () => {
    this.setState({ strategies: [] });
    this.setState({
        titlePart1: "Welcome to ",
        titlePart2: "Biz Strategy Planner",
        description: "Dive into the Biz Strategy Planner and navigate your business's future with clarity and confidence"
    });
  }


  handleInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });
  };

  render() {
      const { strategies,loading } = this.state;
      return (
          <div className="app-container">
              <BackgroundLayer />
              {loading && <LoaderModal />}   {/* Display the loader when loading state is true */}
              <div className="form-container">
                  <Logo />
                  <form className='form-border' onSubmit={this.handleSubmit} >
                      <FormHeader 
                          titlePart1={this.state.titlePart1} 
                          titlePart2={this.state.titlePart2} 
                          description={this.state.description} 
                      />

                    {strategies.length > 0 ? (
                      // Render the StrategyComponent when strategies is not empty

                      <StrategyComponent strategies={this.state.strategies} resetStrategies={this.resetStrategies} />

                    ) : (

                      <div className='form-input'>
                          <InputGroup 
                              label="Department" 
                              placeholder="Enter your department" 
                              name="department" 
                              value={this.state.department}
                              onChange={this.handleInputChange}
                              error={this.state.errors["department"]}
                          />
                          <InputGroup 
                              label="Company Size" 
                              placeholder="Enter your number of employees" 
                              name="companySize" 
                              value={this.state.companySize}
                              onChange={this.handleInputChange}
                              error={this.state.errors["companySize"]}
                          />
                          <InputGroup 
                              label="Sector" 
                              placeholder="Enter your sector" 
                              name="sector"
                              value={this.state.sector}
                              onChange={this.handleInputChange}
                              error={this.state.errors["sector"]}
                          />
                          <div className="input-group">
                              <label>Particular Need?</label>
                              <textarea 
                                  name="particularNeed" 
                                  placeholder="Share your idea here!" 
                                  value={this.state.particularNeed}
                                  onChange={this.handleInputChange}
                                  error={this.state.errors["particularNeed"]}
                              ></textarea>
                          </div>
                          <div className="submit-btn">
                              <button type="submit">Generate</button>
                          </div>
                      </div>
                    )}
                  </form>
              </div>
          </div>
      );
  }
}


export default FormPlanner;
