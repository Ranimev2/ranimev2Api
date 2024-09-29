<p align="center">
  <a href="https://github.com/ranimev2/ranimev2Api">
<!--     <img src="https://media.tenor.com/3S9l9HzhGVcAAAAC/shake-kaninayuta.gif" alt="Logo" width="200" height="200"> -->
  </a>

  <h3 align="center">Ranimev2 API</h3>

  <p align="center">
    <b>Restful API Komik, Drakor & Anime Subtitle Indonesia</b><br />
    <span>I make this API for learning</span>
    <br />
</p>

<h1> Table of Contents </h1>

- [Installation](#installation)
  - [Local](#local)
- [List Source](#list-source)
  - [Anime](#anime)
    - [Kuramanime](#kuramanime)
    - [Wibudesu](#wibudesu)
  - [Komik](#komik)
    - [Komiku](#komiku)
  - [Drakor](#drakor)
    - [Drakorkita](#drakorkita)

## Crypto

Belum selesai 

## Instalation

### Local

Run this command for install the project

```sh
git clone https://github.com/ranimev2/ranimev2Api.git
cd ranimev2Api
npm install
```

Start your serve with this command

```sh
npm start
```

Server will running on ranimev2-api.vercel.app

## List Source

There is some source at ranimev2 api

## Anime
  - ### Kuramanime
  
    Kuramanime adalah tempat kumpulan anime dan donghua bahasa Indonesia.
    
    - #### Ongoing Popular
  
      Get ongoing popular anime
  
      ```bash
      /kuramanime/ongoing/popular?page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/kuramanime/ongoing/popular

    - #### Finished Popular
  
      Get finished popular anime
  
      ```bash
      /kuramanime/finished/popular?page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/kuramanime/finished/popular
    
    - #### Detail Anime
  
      Get detail anime
  
      ```bash
      /kuramanime/anime/:endpoint
      ```
      example: http://ranimev2-api.vercel.app/kuramanime/anime/one-piece

    - #### Detail Episode
  
      Get detail episode
  
      ```bash
      /kuramanime/anime/:anime/:eps
      ```
      example: http://ranimev2-api.vercel.app/kuramanime/anime/one-piece/1073

    - #### Genre List
  
      Get genre list
  
      ```bash
      /kuramanime/genres
      ```
      example: http://ranimev2-api.vercel.app/kuramanime/genres
    
    - #### Detail Genre
  
      Get detail genre
  
      ```bash
      /kuramanime/genres/:endpoint?page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/kuramanime/genres/action
    
    - #### Search
  
      Search anime
  
      ```bash
      /kuramanime/search?query=keyword&page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/kuramanime/search?query=one

- ### Wibudesu

  Wibudesu adalah tempat kumpulan anime batch & movie bahasa Indonesia.
  
  - #### Get Popular
 
    Get popular anime
    
    ```bash
    /wibudesu/popular?page=1
    ```
    default page is 1
    example: http://ranimev2-api.vercel.app/wibudesu/popular
    
  - #### Get Latest
 
    Get latest anime
    
    ```bash
    /wibudesu/latest?page=1
    ```
    default page is 1
    example: http://ranimev2-api.vercel.app/wibudesu/latest
    
  - #### Detail Anime
 
    Get detail anime
    
    ```bash
    /wibudesu/detail/:endpoint
    ```
    example: http://ranimev2-api.vercel.app/wibudesu/detail/howl-no-ugoku-shiro-sub-indo
    
  - #### Genre List
 
    Get genre list
    
    ```bash
    /wibudesu/genres
    ```
    example: http://ranimev2-api.vercel.app/wibudesu/genres
    
  - #### Detail Genre
 
    Get detail genre
    
    ```bash
    /wibudesu/genres/:endpoint?page=1
    ```
    default page is 1
    example: http://ranimev2-api.vercel.app/wibudesu/genres/action
    
  - #### Search Anime
 
    Search anime
    
    ```bash
    /wibudesu/search?query=keyword&page=1
    ```
    default page is 1
    example: http://ranimev2-api.vercel.app/wibudesu/search?query=mononoke
    
  - #### Studio Ghibli
 
    Get anime form studio ghibli
    
    ```bash
    /wibudesu/ghibli?page=1
    ```
    default page is 1
    example: http://ranimev2-api.vercel.app/wibudesu/ghibli

## Komik
  - ### Komiku
    
    Komiku adalah tempat kumpulan komik terupdate bahasa Indonesia

    - #### Popular Komik

      Get popular komik
  
      ```bash
      /komiku/popular
      ```
      example: http://ranimev2-api.vercel.app/komiku/popular
    
    - #### Updated Komik

      Get updated komik
  
      ```bash
      /komiku/updated
      ```
      example: http://ranimev2-api.vercel.app/komiku/updated
    
    - #### Manhwa Type

      Get manhwa type
  
      ```bash
      /komiku/manhwa?page=1
      ```
      default page is 1
      example: http://localhost:3000/komiku/manhwa
    
    - #### Manhua Type

      Get manhua type
  
      ```bash
      /komiku/manhua?page=1
      ```
      default page is 1
      example: http://localhost:3000/komiku/manhua
    
    - #### Manga Type

      Get manga type
  
      ```bash
      /komiku/manga?page=1
      ```
      default page is 1
      example: http://localhost:3000/komiku/manga
    
    - #### Detail Comic

      Get detail comic
  
      ```bash
      /komiku/comic/:endpoint
      ```
      example: http://localhost:3000/komiku/comic/martial-peak
    
    - #### Detail Chapter

      Get detail chapter
  
      ```bash
      /komiku/chapter/:endpoint
      ```
      example: http://localhost:3000/komiku/chapter/martial-peak-chapter-3539
    
    - #### Genre List

      Get genre list
  
      ```bash
      /komiku/genres
      ```
      example: http://localhost:3000/komiku/genres
    
    - #### Detail Genre

      Get genre list
  
      ```bash
      /komiku/genres/:endpoint?page=1
      ```
      default page is 1
      example: http://localhost:3000/komiku/genres/action
    
    - #### Search Comic

      Search comic
  
      ```bash
      /komiku/search?query=keyword&page=1
      ```
      default page is 1
      example: http://localhost:3000/komiku/search?query=lookism

## Drakor
  - ### Drakorkita

    Drakorkita adalah tempat kumpulan series drakor dengan bahasa indonesia
  
    - #### Series Drakor

      Get series drakor

      ```bash
      /drakorkita/series?page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/drakorkita/series
  
    - #### Movie Film

      Get movie film

      ```bash
      /drakorkita/movie?page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/drakorkita/movie
  
    - #### Movie Newest

      Get movie newest

      ```bash
      /drakorkita/movie/newest
      ```
      example: http://ranimev2-api.vercel.app/drakorkita/movie/newest
  
    - #### Series Ongoing

      Get series ongoing

      ```bash
      /drakorkita/series/ongoing?page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/drakorkita/drakorkita/series/ongoing
      
    - #### Series Updated

      Get series updated

      ```bash
      /drakorkita/series/updated
      ```
      example: http://ranimev2-api.vercel.app/drakorkita/drakorkita/series/updated
      
    - #### Series Completed

      Get series completed

      ```bash
      /drakorkita/series/completed?page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/drakorkita/drakorkita/series/completed
      
    - #### Detail Series/Movie

      Get detail series or movie

      ```bash
      /drakorkita/detail/:endpoint
      ```
      example: http://ranimev2-api.vercel.app/drakorkita/drakorkita/detail/revenant-2023-u9p7
          
    - #### Genre List

      Get genre list
  
      ```bash
      /drakorkita/genres
      ```
      example: http://ranimev2-api.vercel.app/drakorkita/genres
    
    - #### Detail Genre

      Get detail genre
  
      ```bash
      /drakorkita/genres/:endpoint?page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/drakorkita/genres/Action

    - #### Search Series/Movie

      Search series or movie
  
      ```bash
      /drakorkita/search?query=keyword&page=1
      ```
      default page is 1
      example: http://ranimev2-api.vercel.app/drakorkita/search?query=lookism
