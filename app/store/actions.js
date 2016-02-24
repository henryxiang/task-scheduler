
//// Dispatch Action Types ////
export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const FETCH_SCHEDULE = 'FETCH_SCHEDULE';
export const SAVE_SCHEDULE = 'SAVE_SCHEDULE';


//// Action Creator Functions	////
export function addEntry(scheduleEntry) {
	return {
		type: ADD_ENTRY,
		data: scheduleEntry
	}
}

export function updateEntry(key, scheduleEntry) {
	return {
		type: UPDATE_ENTRY,
		key: key,
		data: scheduleEntry
	}
}

export function deleteEntry(key) {
	return {
		type: DELETE_ENTRY,
		key: key
	}
}

export function fetchSchedule(key, scheduleList) {
	return {
		type: FETCH_SCHEDULE,
		key: key,
		data: scheduleList
	}
}

export function saveSchedule(key, schedule) {
	return {
		type: SAVE_SCHEDULE,
		key: key,
		data: schedule 
	}
}