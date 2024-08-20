# VM3 (Véhicule Moins 3ans)

**VM3** is a React Native mobile application developed by NaxaTech. It helps users calculate the total cost of importing vehicles that are less than three years old. The app factors in customs duties, VAT, and other applicable taxes to provide an accurate total price. With an intuitive interface, VM3 ensures quick and easy vehicle price calculations on mobile devices.

## Features

- **Vehicle Price Input**: Users can input the base price of the vehicle in DA (Algerian Dinar).
- **Customs Duty Calculation**: Automatically calculates customs duties based on the vehicle's price.
- **VAT Calculation**: Includes VAT in the total price calculation.
- **Other Taxes**: Calculates and adds any additional taxes to the final amount.
- **Total Cost Calculation**: Provides a comprehensive total price, including all taxes and duties, optimized for mobile devices.

## Technologies Used

- **React Native**: A framework for building native mobile apps using React.
- **Chakra UI (React Native)**: A simple, modular, and accessible component library for React Native.
- **Lucide Icons**: A modern icon library used to enhance the mobile app's UI.
- **Expo**: A platform that makes React Native development easier and faster, with tools and services built around the project.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/AbdelhalimBj/VM3.git
   ```

2. Navigate to the project directory:
   ```bash
   cd VM3
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

You can run the app in several environments using the following commands:

1. **Start the app with Expo**:
   ```bash
   npx expo start
   ```

   In the output, you'll find options to open the app in:
   - A [development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - An [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - An [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

2. **Run the app on an Android or iOS emulator/device**:
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```

## Usage

1. Open the app on your mobile device.
2. Enter the base price of the vehicle in the input field.
3. Tap the "Calculate Price" button.
4. The app will display a detailed breakdown of the customs duty, VAT, other taxes, and the total cost.

## Development

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction/).

### Get a Fresh Project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn More

To learn more about developing your project with Expo, explore the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or dive into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial to create a project that runs on Android, iOS, and the web.

## Join the Community

Join our community of developers creating universal apps:

- [Expo on GitHub](https://github.com/expo/expo): View our open-source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## About NaxaTech

NaxaTech is a technology consulting and software development company specializing in innovative solutions that meet the needs of businesses and individuals. We are committed to delivering high-quality software that enhances user experiences and drives business growth.

For more information, visit our [website](https://nexatech.dz).

## Contact

If you have any questions or suggestions, feel free to reach out via GitHub Issues or email at contact@naxatech.dz.
