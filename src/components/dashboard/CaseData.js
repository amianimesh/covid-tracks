import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../store/action/DataAction';

function CaseContainer({datas, fetchData}) {
    useEffect(() => {
        fetchData()
    }, [])
    return datas.loading ? (
        <h2>Loading</h2>
    ): datas.error ? (
        <h2>{datas.error}</h2>
    ): (
        <div>
            <h2>User List</h2>
            <div>
                {/*datas && datas.cases && datas.cases.map(item => <p>{item.dateAnnounced}</p>)*/}
            </div>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        datas: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CaseContainer)