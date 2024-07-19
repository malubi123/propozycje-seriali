import requests

# Funkcja do wyszukiwania seriali telewizyjnych z TVMaze
def search_shows(query):
    url = f'http://api.tvmaze.com/search/shows?q={query}'
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        shows = [show['show'] for show in data]
        recommendations = []
        
        for show in shows:
            title = show['name']
            summary = show['summary']
            recommendations.append(f"{title}: {summary}")
        
        return recommendations
    else:
        return ["Nie udało się znaleźć żadnych rekomendacji."]

# Funkcja do wyszukiwania anime z Jikan
def search_anime(query):
    url = f'https://api.jikan.moe/v4/anime?q={query}'
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        anime_list = data['data']
        recommendations = []
        
        for anime in anime_list:
            title = anime['title']
            synopsis = anime['synopsis']
            recommendations.append(f"{title}: {synopsis}")
        
        return recommendations
    else:
        return ["Nie udało się znaleźć żadnych rekomendacji."]

# Funkcja główna do wyboru typu i wyszukiwania
def main():
    print("Witaj! Co chcesz oglądać dzisiaj?")
    print("1. Seriale telewizyjne")
    print("2. Anime")
    
    choice = input("Wybierz opcję (1/2): ")
    
    if choice == '1':
        query = input("Wprowadź tytuł serialu do wyszukania: ")
        recommendations = search_shows(query)
    elif choice == '2':
        query = input("Wprowadź tytuł anime do wyszukania: ")
        recommendations = search_anime(query)
    else:
        print("Niepoprawny wybór!")
        return
    
    print("\nOto kilka rekomendacji:")
    for rec in recommendations:
        print(rec)

if __name__ == '__main__':
    main()
