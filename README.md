# OrgXplor
This is a multi-platform app aimed at helping students seamlessly connect with events, clubs, and study groups that suit their interests. 

# OrgXPlor

## Overview
**ORgXPlor** is a multi-platform app designed to enhance student engagement on university campuses. By using machine learning, the app helps students discover clubs, events, and study groups tailored to their interests and schedules, making campus life more vibrant and accessible. It also provides clubs and organizations with a platform to easily market their events and connect with students who are most likely to engage.

“UTD is really what you make of it” This is certainly true and holds for our campus and other universities. Sometimes event announcements miss our radars and we miss out on really important networking opportunities or even fun sports games with new people. Often college students are discouraged from pursuing events later in the year and have a hard time getting in touch with club marketing and leadership. Fear no longer! Let's make UTD social again. 
Purpose: Our application will reduce the resistance between students and promote social activity to create a more vibrant and comfortable campus. By customizing the feed of students and creating tailored recommendations for study groups, clubs and events by specific attributes. 

## Features
- **Personalized Recommendations:** Leveraging machine learning models to match students with campus opportunities based on their interests, past activities, and schedules.
- **Event and Club Listings:** Events and clubs are integrated from the university’s calendar and updated by club leaders to ensure accuracy.
- **Study Group Matching:** Find study partners who share your interests and class schedules.
- **Real-Time Communication:** Includes chat features and notifications to stay updated on upcoming events.
  
## Technologies
- **Front-End:**
  - Flutter (for multi-platform compatibility)
  - React Native (alternative for cross-platform development)
  
- **Back-End:**
  - Node.js with Express.js (or Python with Flask/Django for integrating machine learning)
  - PostgreSQL (for relational data) or MongoDB (for NoSQL)
  - Firebase Cloud Store (for real-time database needs)

- **Machine Learning:**
  - **Python Libraries:** TensorFlow, PyTorch, or scikit-learn for training and deploying recommendation models.
  - **Algorithms:**
    - Collaborative and content-based filtering for personalized recommendations.
    - NLP for processing event and club descriptions.
    - Clustering for dynamic user profiling.
    - Reinforcement learning to improve recommendations over time.
  
- **Cloud Services:**
  - Google Cloud Platform (GCP) or Amazon Web Services (AWS) for hosting.
  - GCP’s AI Platform or AWS SageMaker for ML model deployment.
  
- **DevOps:**
  - **Version Control:** GitHub
  - **CI/CD:** Azure DevOps for continuous integration, testing, and deployment.

## Machine Learning Approach
Campus Connect employs a hybrid recommendation system:
- **Collaborative Filtering:** Analyzes similar students' behavior to recommend relevant events and clubs.
- **Content-Based Filtering:** Uses natural language processing (NLP) to analyze event descriptions and match them to student profiles.
- **Clustering and Adaptive Profiling:** Students are grouped into evolving clusters based on interaction history, making recommendations smarter over time.

## Development Methodology
- **Agile Scrum Process**
  - **Bi-Weekly 1:1 Meetings**
  - **Weekly Standups**
  - **Sprints:**
    - Planning Phase: 2 Weeks (Sprint 1)
    - Design Phase: 1 Sprint (Sprint 2)
    - Development & Testing: 9 Sprints (Sprint 3-11)
    - Deployment: 3 Sprints (Sprint 12-14)

## Future Features
- **Explainable AI:** Explain the reasoning behind recommendations for user trust.
- **Time-Series Forecasting:** Predict future event interests based on past behavior.
  
## Getting Started
### Prerequisites
- **Flutter SDK**
- **Python 3.x** (for machine learning models)
- **Node.js & npm** (for backend development)
- **PostgreSQL** or **MongoDB** (depending on the database choice)
  
### Installation
1. Clone the repository:
   ```bash
   git clone

### Special Thanks

Thank you to AIS@UTD and to my awesome developers for all of their hard work!
