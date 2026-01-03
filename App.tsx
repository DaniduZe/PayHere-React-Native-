import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import PayHere from '@payhere/payhere-mobilesdk-reactnative';

const App = () => {

  const handlePay = () => {
    const paymentObject = {
      sandbox: true,
      merchant_id: "YOUR_MERCHANT_ID", // Replace with your Merchant ID
      merchant_secret: "YOUR_MERCHANT_SECRET", // Replace with your Merchant Secret
      notify_url: "http://sample.com/notify",
      order_id: "ItemNo12345",
      items: "Hello PayHere",
      amount: "100.00",
      currency: "LKR",
      first_name: "Saman",
      last_name: "Perera",
      email: "samanp@gmail.com",
      phone: "0771234567",
      address: "No.1, Galle Road",
      city: "Colombo",
      country: "Sri Lanka",
      delivery_address: "No. 46, Galle road, Kalutara South",
      delivery_city: "Kalutara",
      delivery_country: "Sri Lanka",
      custom_1: "",
      custom_2: ""
    };

    PayHere.startPayment(
      paymentObject,
      (paymentId) => {
        console.log("Payment Completed", paymentId);
        Alert.alert("Payment Completed", `Payment ID: ${paymentId}`);
      },
      (errorData) => {
        console.log("Payment Failed", errorData);
        Alert.alert("Payment Failed", `Error: ${errorData}`);
      },
      () => {
        console.log("Payment Dismissed");
        Alert.alert("Payment Dismissed", "");
      }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>PayHere Integration</Text>
        <TouchableOpacity style={styles.button} onPress={handlePay}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
