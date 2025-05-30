import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import "../global.css";

export default function RootLayout() {
  return (
    <Drawer
    screenOptions={{
      headerStyle:{
        backgroundColor:"#030014",
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
      },
      headerTintColor: "#fff",
      drawerStyle:{
         backgroundColor: "#121212",
          width: 260,
      },
        drawerActiveBackgroundColor: "#333",
         drawerInactiveTintColor: "#ccc",
           drawerActiveTintColor: "#fff",
       drawerLabelStyle: {
          fontSize: 17,
          marginLeft: -16,
          padding:10
        },
        drawerItemStyle:{
          marginVertical:4,
          borderRadius:10,
        }
    }}
    
    >
      <Drawer.Screen
      name="home/index"
      options={{
        title:"NeuraChat",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
          ),
        }}
        
      />
      <Drawer.Screen
      name="aboutd"
      options={{
        title:"About",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
        
      />
      <Drawer.Screen
      name="logout"
      
      options={
        {
        headerShown:false,
          title:"Log out",
          drawerIcon:({color,size})=>(
            <Ionicons name="log-out-outline" size={size} color={color}/>
          )
        }
      }
      />

    </Drawer>
  );
}
