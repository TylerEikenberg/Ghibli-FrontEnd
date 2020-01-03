/**
 * Action describes what you're going to do
 */

export function getFilms(data) {
  return {
    type: "GET_FILMS",
    payload: data
  };
}
export function getPeople(data) {
  return {
    type: "GET_PEOPLE",
    payload: data
  };
}
export function getLocations(data) {
  return {
    type: "GET_LOCATIONS",
    payload: data
  };
}
