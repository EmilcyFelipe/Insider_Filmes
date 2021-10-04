import AsyncStorage from "@react-native-async-storage/async-storage";

//buscar os items salvos
export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave =  JSON.parse(myMovies) || [];

    return moviesSave;
}

//salvar o novo filme
export async function saveMovie(key,newMovie){
    let moviesStored = await getMoviesSave(key);
    const hasMovie = moviesStored.some( item => item.id === newMovie.id)

    if(hasMovie){
        console.log("esse filme já existe na sua lista")
        return;
    }
    moviesStored.push(newMovie);
    await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
    console.log("filme salvo com sucesso")

}

//deletar algum filme

export async function deleteMovie(id){
    let moviesStored = await getMoviesSave('@primereact');
    let myMovies = moviesStored.filter(item => {
        return( item.id !== id);
    })

    await AsyncStorage.setItem('@primereact',JSON.stringify(myMovies));
    console.log('filme deletado com sucesso')
    return myMovies;
}

export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@primereact');

    const hasMovie = moviesStored.find( item => item.id === movie.id)

    if(hasMovie){
        return true;
    }
    return false;
}