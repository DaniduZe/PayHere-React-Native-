# PayHere React Native Integration

This project demonstrates how to integrate the PayHere payment gateway into a React Native application. It serves as a practical example accompanying the guide on Medium.

## Features

- **PayHere SDK Integration**: Seamlessly integrate PayHere for handling payments.
- **React Native**: Built with React Native for cross-platform compatibility (Android & iOS).
- **Sandbox Environment**: Configured for testing with PayHere's sandbox credentials.

## Resources

- **Medium Guide**: [Integrate PayHere Into Your React Native App (2025 Updated Guide)](https://medium.com/@danidusennath/integrate-payhere-into-your-react-native-app-2025-updated-guide-f479aadb8452) - A comprehensive step-by-step tutorial explaining the code and integration process.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio / Xcode (for iOS)

### Installation

1.  **Clone the repository:**

    ```sh
    git clone <repository-url>
    cd payhere
    ```

2.  **Install dependencies:**

    ```sh
    # Using npm
    npm install

    # OR using Yarn
    yarn install
    ```

3.  **Install iOS dependencies (Mac only):**

    ```sh
    cd ios
    pod install
    cd ..
    ```

### Running the App

**Android:**

```sh
npx react-native run-android
```

**iOS:**

```sh
npx react-native run-ios
```

## Troubleshooting

If you encounter issues, please refer to the [React Native Troubleshooting guide](https://reactnative.dev/docs/troubleshooting) or check the comments in the Medium article for common solutions.
