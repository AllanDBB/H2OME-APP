# H2OME App

## Overview

H2OME is a comprehensive mobile application developed for the Reto Marte 2024 challenge by Costa Rica's team "Yaku Mars 2024". The app is designed to help astronauts and settlers monitor and manage their health, daily activities, and communications while living on Mars.

## Features

- **User Authentication**: Secure login and registration system
- **Health Monitoring**: Real-time tracking of vital signs and health metrics
- **Calendar**: Schedule medical appointments and important events
- **Virtual Assistant**: AI-powered chatbot to assist with health-related questions
- **News Feed**: Stay updated with the latest Mars colony announcements
- **User Profile**: Personalized profile with health information and preferences
- **Settings**: Customize app preferences including notifications and display mode

## Technology Stack

- React Native / Expo framework
- TypeScript for type safety
- React Navigation for screen management
- Vector icons for UI components
- Custom styling with StyleSheet API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/H2OME-APP.git
cd H2OME-APP
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Project Structure

```
H2OME-APP/
├── assets/               # Images, fonts, and other static resources
├── src/                  # Source code
│   ├── navigation/       # Navigation configuration 
│   └── pages/            # Screen components
│       ├── Home/         # Home screen
│       ├── loading/      # Loading screen
│       ├── Main/         # Welcome screen
│       ├── Menu/         # Various feature screens
│       └── Register/     # Authentication screens
├── App.tsx              # Main application component
└── package.json         # Project dependencies
```

## Mars-Specific Features

The H2OME app includes specialized features for Mars habitation:

- **Health Parameters**: Modified to account for Mars' different environment and gravity
- **Mars-themed UI**: Color scheme inspired by the Martian landscape
- **Resource Management**: Tools to monitor water and oxygen consumption
- **Emergency Protocols**: Quick access to critical information during emergencies

## Development Team

- Team Yaku Mars 2024
- Reto Marte 2024 Challenge Participants

## License

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

## Future Enhancements

- Integration with wearable health devices
- Extended offline functionality for communication outages
- Advanced resource prediction algorithms
- Community features for Mars settlers
