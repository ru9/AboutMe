const baseUrl = "https://webpage-backend.firebaseio.com/";

export const getAboutMe = () => {
  return fetch(`${baseUrl}aboutme.json`);
};

export const getProjects = () => {
  return fetch(`${baseUrl}projects.json`);
};

export const getMeasurements = () => {
  return fetch(`${baseUrl}measurements.json`);
};
