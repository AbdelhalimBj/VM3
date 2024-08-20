import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Box, Text, Button, Input } from '@chakra-ui/react';

const VehiclePriceCalculator = () => {
  const [vehiclePrice, setVehiclePrice] = useState(0);
  const [customsDuty, setCustomsDuty] = useState(0);
  const [vat, setVat] = useState(0);
  const [otherTaxes, setOtherTaxes] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    const customsDutyAmount = vehiclePrice * 0.15;
    const vatAmount = vehiclePrice * 0.19;
    const otherTaxesAmount = vehiclePrice * 0.05;
    const totalPriceAmount = vehiclePrice + customsDutyAmount + vatAmount + otherTaxesAmount;

    setCustomsDuty(customsDutyAmount);
    setVat(vatAmount);
    setOtherTaxes(otherTaxesAmount);
    setTotalPrice(totalPriceAmount);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehiclePrice(Number(e.target.value));
  };

  return (
    <Box maxW="md" mx="auto" p="4" bg="white" rounded="lg" shadow="md">
      <Text fontSize="lg" fontWeight="bold" mb="4">Vehicle Price Calculator</Text>
      <Box mb="4">
        <Text mb="2" color="gray.600">Vehicle Price (DA)</Text>
        <Input
          type="number"
          value={vehiclePrice}
          onChange={handlePriceChange}
          placeholder="Enter vehicle price"
          pl="10"
          textColor="gray.700"
          rounded="lg"
          focusBorderColor="blue.500"
        />
      </Box>
      <Button onClick={calculatePrice} colorScheme="blue" fontWeight="bold" py="2" px="4" rounded="lg">
        Calculate Price
      </Button>
      <Box mt="4">
        <Text mb="2" color="gray.600">Customs Duty: {customsDuty.toFixed(2)} DA</Text>
        <Text mb="2" color="gray.600">VAT: {vat.toFixed(2)} DA</Text>
        <Text mb="2" color="gray.600">Other Taxes: {otherTaxes.toFixed(2)} DA</Text>
        <Text fontWeight="bold" color="gray.600" mb="2">Total Price: {totalPrice.toFixed(2)} DA</Text>
      </Box>
      <Calculator color="blue" size={48} className="mx-auto mt-4" />
    </Box>
  );
};

export default VehiclePriceCalculator;
