import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/event-actions';


const CreateEventView = ({ name, nameChanged, buttonClicked }) => (
    <div>
        <form>
            <div className="form-group">
                <input onChange={nameChanged} value={name} />
            </div>
            <div className="button-group">
                <button className="button" onClick={buttonClicked}>
                    Create event
                </button>
            </div>
        </form>
    </div>
);

CreateEventView.propTypes = {
    name: PropTypes.string,
    nameChanged: PropTypes.func,
    buttonClicked: PropTypes.func,
};

export default connect(
    state => ({ name: state.event.name }),
    dispatch => ({
        nameChanged: e => dispatch(actions.setName(e.target.value)),
        buttonClicked: () => { },
    })
)(CreateEventView);
