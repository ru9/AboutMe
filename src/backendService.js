const baseUrl = "https://webpage-backend.firebaseio.com/";

export const getAboutMe = () => {
  return fetch(`${baseUrl}aboutme.json`);
};
