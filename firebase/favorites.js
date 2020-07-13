import Firebase from "firebase";
import init from "./config";

const authMethods = {
  add: async (userID, recipe) => {
    let userRef = Firebase.database().ref("user/" + userID);
    var favoritesRef = userRef.child("favorites");
    var newFavorite = favoritesRef.push();

    newFavorite.set({
      title: recipe.label,
      source: recipe.source,
      img: recipe.image,
      url: recipe.url,
    });

    let trendingRef = Firebase.database().ref("trending/").child(recipe.label);
    let favoritesCountRef = trendingRef.child("favoriteCount");

    favoritesCountRef.transaction(
      (favoritesCount) => (favoritesCount || 0) + 1
    );
  }, //dis broken as heck lel
  remove: async (userID, recipeID, title) => {
    let trendingRef = Firebase.database().ref("trending/").child(title);
    let favoritesCountRef = trendingRef.child("favoriteCount");

    favoritesCountRef.transaction((favoriteCount) => favoriteCount - 1);

    let db = Firebase.database();
    let userRef = db.ref("user/" + userID);
    var favoritesRef = userRef.child("favorites");
    const res = await favoritesRef.child(recipeID).remove();
    return res;
  },
  fetchFavorites: async (userID) => {
    let favoritesRef = Firebase.database().ref("user/" + userID + "/favorites");
    return favoritesRef.once("value").then((snapshot) => snapshot.val());
  },
  fetchTrending: async () => {
    let trendingRef = Firebase.database().ref("trending/");

    return trendingRef.once("value").then((snapshot) => snapshot.val());
  },
};

export default authMethods;
