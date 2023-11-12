import { Box, Text, Image, HStack, Button, Heading, Stack, ScrollView, Seg, Center } from "native-base";
import { Hi_profile } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { VStack } from 'native-base';
import { AspectRatio } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import datas from "../datas";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
    <Center>
      <Hi_profile title={"Hallo Belinda Agni"} />
    </Center>
      <Stack flexDirection="row-reverse">
        <ScrollView horizontal={true} mt={5} >
          <Box p={5} ml={5} bg={"info.100"} w={"150"} borderRadius={"30"}>
            <Text fontSize={"15"} w={"300"} mx={"auto"} pt={"3"} textAlign={"center"}></Text>
            <Image
              source={{ uri: "https://i.pinimg.com/564x/e8/67/b2/e867b2b120fc2f3b198b4a1e3ba1d913.jpg" }}
              w={"full"}
              h={20}
              borderRadius={10}
              alt="image"
            />
          </Box>
          <Box p={4} mx={5} bg={"info.100"} w={"150"} borderRadius={"30"}>
            <Image
              source={{ uri: "https://schoolofparenting.id/wp-content/uploads/2018/01/feature-img-10.jpg" }}
              w={"full"}
              h={20}
              borderRadius={10}
              alt="image"
            />
            <Text fontSize={"15"} w={"300"} mx={"auto"} pt={"3"} textAlign={"center"}>

            </Text>
          </Box>
          <Box p={4} mr={5} bg={"info.100"} w={"150"} borderRadius={20}>
            <Image
              source={{ uri: "https://i.pinimg.com/564x/b3/59/51/b35951a77b771dd35061f2ec1415e46d.jpg" }}
              w={"full"}
              h={20}
              borderRadius={10}
              alt="image"
            />
            <Text fontSize={"15"} w={"300"} mx={"auto"} pt={"3"} textAlign={"center"}>

            </Text>
          </Box>
        </ScrollView>
      </Stack>
      <ScrollView>
        <Text bold fontSize={15} w={"300"} pt={"3"} textAlign={"start"} ml={5}>Komunikasi Dengan Cara Pilihanmu</Text>
        <Text textAlign="start" mb={5} ml={5}> Konseling yang efektif dari rasa nyaman.</Text>
        <Box w={300} h={90} mx={"auto"} borderRadius={10} borderWidth={2} mt={3} backgroundColor={"info.100"}>
          <Box mx={"auto"} my={"auto"}>
            <Image source={{ uri: "https://i.pinimg.com/564x/71/fc/b7/71fcb73be6d0b9dcab3855c1a5c41a36.jpg" }}
              w={"50"}
              h={12}
              ml={-140}
              mt={20}
              borderRadius={"full"}
              alt="image" />
          </Box>
          <Text bold fontSize={15} w={"300"} pt={"3"} textAlign={"center"} ml={5} mb={9} >Pilih Psikolog</Text>
          <Text textAlign="center" ml={"10"} mt={-10} mb={1}> Bantuan Konseling</Text>
          <Box alignSelf="center" ml={"64"} mt={"-10"} mb={8}>
            <Ionicons name="chevron-forward-outline" size={30}></Ionicons>
          </Box>
        </Box>

        <TouchableOpacity onPress={() => {navigation.navigate('Hospital');}}> 
          <Box w={300} h={90} mx={"auto"} borderRadius={10} borderWidth={2} mt={3} backgroundColor={"info.100"}>
            <Box mx={"auto"} my={"auto"}>
              <Image source={{ uri: "https://i.pinimg.com/564x/36/a7/54/36a754bb0683784d982d3c23c3cde7a2.jpg" }}
                w={"50"}
                h={12}
                ml={-140}
                mt={20}
                borderRadius={"full"}
                alt="image" />
            </Box>
            <Text bold fontSize={15} w={"300"} pt={"3"} textAlign={"center"} ml={5} mb={9} >Pilih Rumah Sakit</Text>
            <Text textAlign="center" ml={"10"} mt={-10} mb={1}> Penanganan lebih</Text>
            <Box alignSelf="center" ml={"64"} mt={"-10"} mb={8}>
              <Ionicons name="chevron-forward-outline" size={30}></Ionicons>
            </Box>
          </Box>
        </TouchableOpacity>


        <Text bold fontSize={15} w={"300"} pt={"3"} textAlign={"start"} mt ml={1}>Berbagi Cerita Yuk</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} mt={10}  >
          {datas.slice(14).map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() =>
                
                  navigation.navigate("News Detail", { item: item })
                }
              >
                <Box 
                w={"48"} 
                h="64" 
                mr={"4"}  
                ml={index == 0 ? "4" : "0"}   
                borderRadius={30} 
                borderColor="coolGray.100" 
                borderWidth={4} 
                mb={30}>
  
                  <Image
                  borderRadius={20}
                    source={{ uri: item.image }}
                    w="full"
                    h="4/6"
                    alt="Image Data"
                    
                   
                  />
                  <Text fontSize="md" color="grey" ml={2}   >
                    {item.emoji}
                  </Text>
                  <Heading
                    fontSize={"md"}
                    lineHeight={"xs"}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    color="grey"
                    borderRadius={20}
                    ml={2}
                    mb={1}
                    
                  >
                    {item.name}
                    
                  </Heading>
                  <Box ml={2}>
                  <Ionicons name="location" color="#28AA9B" size={14} />
                  </Box>
                </Box>
              </TouchableOpacity>             
            );           
          })}        
          </ScrollView>
      </ScrollView>

    </>
  );
};

export default Home;