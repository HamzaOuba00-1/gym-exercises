# 🏋️ 7zz Gym

**7zz Gym** is an interactive web platform designed to help users explore, understand, and perform gym exercises effectively. The site combines descriptive data and tutorial videos using two powerful APIs to deliver a complete fitness guidance experience.

## 🏃 Project Overview

7zz Gym provides users with access to a comprehensive list of gym exercises, categorized by target muscles and equipment. For each exercise, users can view detailed information, watch tutorial videos, and discover similar workouts based on the same muscle group or equipment.

## 🧩 Core Features

### 💪 Exercise Explorer

Users can discover exercises through intuitive browsing or search functionality:

* **Target Muscle Info**: Learn which muscles each exercise primarily and secondarily works.
* **Equipment Type**: See what equipment is needed for each movement.
* **GIF Previews**: Visual demo of the exercise from the API.
* **Similar Exercises**: Recommendations by muscle or equipment.
* **Search Filters**: Browse exercises by name, target, or equipment.

### 🎥 Video Integration

Each exercise page includes related tutorial videos pulled in via YouTube API:

* **Search-Based Video Display**: Videos are matched to exercise names.
* **Embedded Playback**: Videos are displayed directly in the UI.
* **Multiple Results**: Users can watch different tutorial styles.

## 🔧 Technologies Used


* **APIs**:

  * [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) for exercise data
  * [YouTube Search and Download API](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download) for video content

## 🔐 Security & API Handling

* All API requests are made securely using headers with RapidAPI keys.
* Environment variables are used to protect API credentials on the frontend.
* Input sanitization for search functionality to prevent misuse.

