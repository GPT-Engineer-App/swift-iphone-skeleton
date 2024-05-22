import React from "react";
import { Container, VStack, Text, Box, IconButton, Image } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box boxSize="100px">
          <Image src="https://images.unsplash.com/photo-1599950753725-ea5d8aba0d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTYzNzMyNzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="iPhone App Development" />
        </Box>
        <Text fontSize="2xl">iPhone App Skeleton</Text>
        <Text>Follow the steps below to create a basic iPhone app skeleton in Swift:</Text>
        <VStack align="start" spacing={2}>
          <Text>1. Open Xcode and create a new project.</Text>
          <Text>2. Select "App" under the iOS section and click "Next".</Text>
          <Text>3. Enter your project name and other details, then click "Next".</Text>
          <Text>4. Choose a location to save your project and click "Create".</Text>
          <Text>
            5. In the project navigator, open the <code>AppDelegate.swift</code> file.
          </Text>
          <Text>6. Replace the content with the following code:</Text>
          <Box bg="gray.100" p={4} borderRadius="md" width="100%">
            <Text as="pre" fontSize="sm">
              {`import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        window = UIWindow(frame: UIScreen.main.bounds)
        window?.rootViewController = UIViewController()
        window?.makeKeyAndVisible()
        return true
    }
}`}
            </Text>
          </Box>
          <Text>7. Build and run your project to see the blank app screen.</Text>
        </VStack>
        <IconButton aria-label="Apple" icon={<FaApple />} size="lg" />
      </VStack>
    </Container>
  );
};

export default Index;
