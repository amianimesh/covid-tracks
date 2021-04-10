import React, { Component } from 'react';
import BarChart from '../chart/Chart';
import { connect } from 'react-redux';
import  CaseContainer  from './CaseData'


class Dashboard extends Component {
    getDaysInMonth = () => {
        var currentDate = new Date();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var daysInMonth = new Date(year, month, 0).getDate();
        return daysInMonth;
    }


    MonthToDateActiveCases = () => {
        let currentDate = new Date();
        let experiment = this.props.datas.cases.filter((element) => {return element.dateAnnounced.getMonth() === currentDate.getMonth()}).length
        return experiment;
    }

    LastMonthActiveCases = () => {
        let currentDate = new Date();
        let lastmonthcases = this.props.datas.cases.filter((element) => {return element.dateAnnounced.getMonth() === currentDate.getMonth() - 1}).length
        return lastmonthcases;
    }

    estimatedMonthEndCases = () => {
        let x = this.MonthToDateActiveCases();
        let y = this.getDaysInMonth();
        let currentDate = new Date();
        let dateNumber = currentDate.getDate();
        let estimatedPatient = (x/dateNumber) * y;
        return estimatedPatient;
        
    }


    render(){
        return(
            <div>
                <div className='row'>
                    <div class='col s12 l12'>
                        <div className='card' style={{height: "100px"}}>
                            <div className='card-content'>
                            
                                <label className='left' style={{marginRight: '25px', marginTop: '10px'}}>Filter:</label>
                                <select class="browser-default col s12 m3 " style={{width: "120px", height: "35px", marginRight:'20px'}} >
                                <option value="" disabled selected>Location</option>
                                <option value="1">example 1</option>
                                <option value="2" >example 2</option>
                                <option value="3" >example 3</option>
                                </select>
                                <select class="browser-default col s12 m3 "  style={{width: "120px", height: "35px", marginRight:'20px'}}>
                                <option value="" disabled selected>Gender</option>
                                <option value="1">example 1</option>
                                <option value="2" >example 2</option>
                                <option value="3" >example 3</option>
                                </select>
                                <select class="browser-default col s12 m3 "  style={{width: "120px", height: "35px", marginRight:'20px'}}>
                                <option value="" disabled selected>Age</option>
                                <option value="1">example 1</option>
                                <option value="2" >example 2</option>
                                <option value="3" >example 3</option>
                                </select>
                                <select class="browser-default col s12 m3 "  style={{width: "120px", height: "35px"}}>
                                <option value="" disabled selected>Status</option>
                                <option value="1">example 1</option>
                                <option value="2" >example 2</option>
                                <option value="3" >example 3</option>
                                </select>
                                <form className='right col s12 m3' style={{width: "230px", height: "50px"}}>
                                <label>To</label>
                                        <input type='text' className='datepicker'></input>
                                </form>

                                <form className='right col s12 m3' style={{width: "230px", height: "50px"}}>
                                        <label>Form</label>
                                        <input type='text' className='datepicker'></input>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div class='col s12 l4'>
                        <div className='card'>
                            <div className='card-content black-text'>
                                <span className='card-title indigo-text'  style={{fontWeight: "bold"}}>Month To Date Active Cases</span>
                                <p>{this.MonthToDateActiveCases()}</p>
                            </div>
                        </div>
                    </div>
                    <div class='col s12 l4'>
                        <div className='card'>
                            <div className='card-content black-text'>
                                <span className='card-title indigo-text' style={{fontWeight: "bold"}}>Last Month Active Cases</span>
                                <p>{this.LastMonthActiveCases()}</p>
                            </div>
                        </div>
                    </div>
                    <div class='col s12 l4'>
                        <div className='card'>
                            <div className='card-content black-text'>
                                <span className='card-title indigo-text' style={{fontWeight: "bold"}}>Estimated Month End Active Cases</span>
                                <p>{this.estimatedMonthEndCases()}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col s12 l12'>
                        <div className='card'>
                            <BarChart/>
                        </div>
                    </div>
                    <div className='col s12 l12'>
                        <div className='card'>
                         <CaseContainer/>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        datas: state.data
    }
}



export default connect(mapStateToProps)(Dashboard)