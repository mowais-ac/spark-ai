import {
  Box,
  Container,
  VStack,
  Text,
  Button,
  SimpleGrid,
  Icon,
  Heading,
  HStack,
  Flex,
  ChakraProvider,
  Stack,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Link,
  Avatar,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  useToast,
  IconButton,
  Image,
} from '@chakra-ui/react';
import {
  FaPlayCircle,
  FaClock,
  FaHeadset,
  FaGraduationCap,
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaLock,
  FaCertificate,
  FaUserTie,
  FaHandsHelping,
  FaLightbulb,
  FaChevronUp,
  FaChevronDown,
  FaQuoteLeft,
  FaArrowRight,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarker,
  FaBars,
} from 'react-icons/fa';
import theme from './theme';

function App() {
  const originalPrice = 15000;
  const discountedPrice = 7500;
  const savings = originalPrice - discountedPrice;
  const toast = useToast();
  
  const handleCTAClick = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
    
    toast({
      title: "Great choice!",
      description: "Please fill out the form below to secure your spot.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <ChakraProvider theme={theme}>
      {/* Header */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg="black"
        zIndex={1000}
        borderBottom="1px"
        borderColor="whiteAlpha.200"
      >
        <Container maxW="container.xl">
          <Flex
            h={16}
            align="center"
            justify="space-between"
          >
            {/* Logo */}
            <Link href="#" _hover={{ textDecoration: 'none' }}>
              <Image
                src="/spark-ai-logo.svg"
                alt="Spark AI"
                height="32px"
                width="auto"
                objectFit="contain"
                _hover={{ transform: 'scale(1.05)' }}
                transition="transform 0.2s ease"
              />
            </Link>

            {/* Navigation */}
            <HStack
              spacing={8}
              display={{ base: 'none', md: 'flex' }}
              color="gray.300"
            >
              {[
                { name: "Home", href: "#" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact-form" }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  px={2}
                  py={1}
                  rounded="md"
                  _hover={{
                    textDecoration: 'none',
                    color: 'white',
                    bg: 'whiteAlpha.100'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>

            {/* CTA Button */}
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              size="sm"
              bgGradient="linear(to-r, blue.400, purple.500)"
              color="white"
              _hover={{
                bgGradient: "linear(to-r, blue.500, purple.600)",
                transform: 'translateY(-1px)'
              }}
              onClick={handleCTAClick}
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.300"
              variant="ghost"
              icon={<FaBars />}
              _hover={{
                color: 'white',
                bg: 'whiteAlpha.100'
              }}
            />
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box
        minH="100vh"
        w="100%"
        pt={16} // Add padding to account for fixed header
        overflowY="auto"
        overflowX="hidden"
        position="relative"
        className="gradient-bg"
      >
        {/* Background Elements */}
        <Box
          position="fixed"
          top="5%"
          right="-5%"
          width="600px"
          height="600px"
          bgGradient="radial(circle at center, purple.200, transparent 70%)"
          filter="blur(80px)"
          opacity="0.1"
          zIndex={0}
          transform="rotate(-30deg)"
          pointerEvents="none"
        />
        <Box
          position="fixed"
          bottom="-5%"
          left="-5%"
          width="700px"
          height="700px"
          bgGradient="radial(circle at center, blue.100, transparent 70%)"
          filter="blur(80px)"
          opacity="0.1"
          zIndex={0}
          transform="rotate(30deg)"
          pointerEvents="none"
        />

        {/* Main Content */}
        <VStack spacing={0} position="relative" zIndex={1} align="stretch">
          {/* Hero Section */}
          <Box 
            w="full" 
            pt={{ base: 16, md: 20 }}
            pb={{ base: 12, md: 16 }}
            position="relative"
            overflow="hidden"
            bg="white"
          >
            {/* Background Effects */}
            <Box
              position="absolute"
              top="-10%"
              right="-10%"
              width="60%"
              height="80%"
              bgGradient="linear(to-br, purple.50, pink.50)"
              filter="blur(100px)"
              transform="rotate(-12deg)"
              opacity={0.8}
            />
            <Box
              position="absolute"
              bottom="-20%"
              left="-20%"
              width="70%"
              height="70%"
              bgGradient="linear(to-tr, blue.50, purple.50)"
              filter="blur(100px)"
              transform="rotate(12deg)"
              opacity={0.8}
            />

            <Container maxW="container.xl" position="relative">
              <Stack
                direction={{ base: 'column', lg: 'row' }}
                spacing={{ base: 6, lg: 12 }}
                align="center"
                justify="space-between"
              >
                {/* Left Content */}
                <VStack 
                  flex="1" 
                  align="flex-start" 
                  spacing={4}
                  maxW={{ base: "100%", lg: "60%" }}
                >
                  {/* Offer Badge */}
                  <HStack
                    bg="purple.50"
                    p={2}
                    px={3}
                    borderRadius="full"
                    border="1px dashed"
                    borderColor="purple.200"
                    spacing={2}
                  >
                    <Box
                      bg="purple.100"
                      p={1.5}
                      borderRadius="full"
                    >
                      <Icon as={FaClock} color="purple.600" boxSize={3} />
                    </Box>
                    <Text
                      variant="gradient-special"
                      fontWeight="bold"
                      fontSize="sm"
                    >
                      50% OFF - Limited Time Only
                    </Text>
                  </HStack>

                  {/* Main Heading */}
                  <VStack align="flex-start" spacing={3}>
                    <Heading
                      as="h1"
                      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                      lineHeight="shorter"
                      fontWeight="bold"
                      variant="gradient-special"
                      className="gradient-text-animate"
                      maxW="xl"
                    >
                      Transform Your Business with AI in Just 4 Weeks
                    </Heading>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      color="gray.600"
                      maxW="xl"
                    >
                      Join Dubai's Premier AI Mastery Program Designed Specifically for SMEs
                    </Text>
                  </VStack>

                  {/* Video Preview */}
                  <Box
                    w="full"
                    maxW="3xl"
                    h={{ base: "240px", md: "360px", lg: "420px" }}
                    position="relative"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    mt={4}
                    onClick={handleCTAClick}
                    _hover={{
                      transform: 'scale(1.02)',
                      boxShadow: '0 25px 50px rgba(124, 58, 237, 0.2)',
                      cursor: 'pointer'
                    }}
                    transition="all 0.4s ease"
                    role="button"
                    aria-label="Watch video and contact us"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      bg: 'black',
                      opacity: 0.5,
                      zIndex: 1
                    }}
                  >
                    {/* Background Image */}
                    <Box
                      position="absolute"
                      inset={0}
                      bgImage="url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=2000')"
                      bgSize="cover"
                      bgPosition="center"
                      filter="brightness(0.9)"
                      transform="scale(1.1)"
                      transition="transform 0.6s ease"
                      _groupHover={{
                        transform: "scale(1.2)"
                      }}
                    />

                    {/* Play Button and Text */}
                    <VStack
                      position="absolute"
                      inset={0}
                      justify="center"
                      align="center"
                      spacing={6}
                      zIndex={2}
                      role="group"
                      cursor="pointer"
                      transition="all 0.3s"
                      _hover={{
                        '& > .play-button': {
                          transform: 'scale(1.1)',
                          bg: 'purple.500'
                        }
                      }}
                    >
                      <Box
                        className="play-button"
                        p={6}
                        borderRadius="full"
                        bg="purple.600"
                        color="white"
                        transition="all 0.3s"
                        boxShadow="0 4px 20px rgba(0,0,0,0.4)"
                      >
                        <Icon 
                          as={FaPlayCircle} 
                          boxSize={12}
                          filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                        />
                      </Box>
                      <VStack spacing={2}>
                        <Text
                          color="white"
                          fontSize={{ base: "xl", md: "2xl" }}
                          fontWeight="bold"
                          textShadow="0 2px 4px rgba(0,0,0,0.3)"
                        >
                          Watch Success Stories
                        </Text>
                        <Text
                          color="gray.200"
                          fontSize={{ base: "sm", md: "md" }}
                          textShadow="0 1px 2px rgba(0,0,0,0.3)"
                        >
                          3-Minute Video
                        </Text>
                      </VStack>
                    </VStack>

                    {/* Gradient Overlay */}
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      h="60%"
                      bgGradient="linear(to-t, rgba(0,0,0,0.8), transparent)"
                      zIndex={1}
                    />
                  </Box>
                </VStack>

                {/* Right Price Card */}
                <Box
                  w={{ base: "full", lg: "40%" }}
                  maxW="md"
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="xl"
                  border="1px solid"
                  borderColor="purple.100"
                  position="relative"
                >
                  {/* Top Banner */}
                  <Box
                    bg="purple.50"
                    p={2}
                    borderBottom="1px solid"
                    borderColor="purple.100"
                  >
                    <HStack spacing={2} justify="center">
                      <Icon as={FaClock} color="purple.500" boxSize={3.5} />
                      <Text
                        variant="gradient-special"
                        fontSize="sm"
                        fontWeight="bold"
                      >
                        Limited Time Offer
                      </Text>
                    </HStack>
                  </Box>

                  {/* Price Content */}
                  <VStack spacing={3} p={5}>
                    {/* Original Price */}
                    <VStack spacing={0}>
                      <Text color="gray.500" fontSize="xs">Regular Price</Text>
                      <Text
                        fontSize="2xl"
                        textDecoration="line-through"
                        color="gray.400"
                        fontWeight="bold"
                      >
                        AED {originalPrice.toLocaleString()}
                      </Text>
                    </VStack>

                    {/* Discounted Price */}
                    <VStack spacing={0}>
                      <Text 
                        variant="gradient-special"
                        fontSize="sm"
                        fontWeight="bold"
                      >
                        Exclusive Offer
                      </Text>
                      <Text
                        fontSize="4xl"
                        fontWeight="extrabold"
                        variant="gradient-special"
                        className="gradient-text-animate"
                      >
                        AED {discountedPrice.toLocaleString()}
                      </Text>
                    </VStack>

                    {/* Savings Badge */}
                    <Box
                      bg="green.50"
                      p={3}
                      borderRadius="lg"
                      w="full"
                      textAlign="center"
                      border="1px dashed"
                      borderColor="green.200"
                    >
                      <Text
                        variant="gradient-special"
                        fontSize="md"
                        fontWeight="bold"
                      >
                        Save AED {savings.toLocaleString()} Today!
                      </Text>
                    </Box>

                    {/* Feature Points */}
                    <VStack 
                      spacing={3} 
                      align="stretch" 
                      w="full" 
                      pt={1}
                    >
                      <Text
                        fontSize="md"
                        fontWeight="bold"
                        color="gray.700"
                      >
                        What's Included:
                      </Text>
                      {[
                        {
                          icon: FaGraduationCap,
                          title: "4-Week Intensive Bootcamp",
                          details: "Comprehensive training with hands-on workshops",
                          gradient: "linear(to-r, purple.400, purple.600)"
                        },
                        {
                          icon: FaRobot,
                          title: "AI-Driven Sales & Marketing Tools",
                          details: "Access to premium AI tools worth AED 25,000+",
                          gradient: "linear(to-r, purple.500, pink.500)"
                        },
                        {
                          icon: FaChartLine,
                          title: "Enhanced Data Analytics",
                          details: "Advanced analytics and reporting dashboard",
                          gradient: "linear(to-r, blue.500, purple.500)"
                        },
                        {
                          icon: FaHeadset,
                          title: "Priority Support",
                          details: "24/7 dedicated technical assistance",
                          gradient: "linear(to-r, purple.600, pink.600)"
                        }
                      ].map((feature, index) => (
                        <HStack
                          key={index}
                          spacing={3}
                          p={2}
                          borderRadius="lg"
                          bg="purple.50"
                          _hover={{
                            bg: "purple.100",
                            transform: "translateX(8px)"
                          }}
                          transition="all 0.2s"
                        >
                          <Box
                            p={1.5}
                            borderRadius="md"
                            bgGradient={feature.gradient}
                            color="white"
                          >
                            <Icon as={feature.icon} boxSize={3} />
                          </Box>
                          <VStack spacing={0} align="start">
                            <Text
                              fontSize="sm"
                              fontWeight="bold"
                              color="gray.700"
                            >
                              {feature.title}
                            </Text>
                            <Text
                              fontSize="xs"
                              color="gray.600"
                            >
                              {feature.details}
                            </Text>
                          </VStack>
                        </HStack>
                      ))}
                    </VStack>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      w="full"
                      h={14}
                      fontSize="lg"
                      position="relative"
                      overflow="hidden"
                      bgGradient="linear(to-r, purple.500, pink.500)"
                      color="white"
                      onClick={handleCTAClick}
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '200%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        animation: 'shimmer 2s infinite'
                      }}
                      _hover={{
                        bgGradient: "linear(to-r, purple.600, pink.600)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 20px 40px rgba(159, 122, 234, 0.3)"
                      }}
                      _active={{
                        transform: "translateY(0)",
                      }}
                      rightIcon={
                        <Icon 
                          as={FaArrowRight} 
                          className="arrow-icon"
                          transition="transform 0.3s ease"
                          _groupHover={{ transform: 'translateX(4px)' }}
                        />
                      }
                      role="group"
                    >
                      <HStack spacing={2}>
                        <Text>Secure Your Spot Now</Text>
                        <Box
                          bg="white"
                          color="purple.500"
                          px={2}
                          py={0.5}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight="bold"
                          animation="pulse 2s infinite"
                        >
                          50% OFF
                        </Box>
                      </HStack>
                    </Button>

                    {/* Trust Badges */}
                    <SimpleGrid columns={3} spacing={3} w="full" pt={2}>
                      {[
                        { icon: FaShieldAlt, text: "Money-back Guarantee" },
                        { icon: FaLock, text: "Secure Payment" },
                        { icon: FaCertificate, text: "Certificate Included" }
                      ].map((badge, index) => (
                        <VStack key={index} spacing={1}>
                          <Icon as={badge.icon} color="purple.500" boxSize={4} />
                          <Text 
                            fontSize="2xs" 
                            color="gray.600"
                            textAlign="center"
                            fontWeight="medium"
                          >
                            {badge.text}
                          </Text>
                        </VStack>
                      ))}
                    </SimpleGrid>
                  </VStack>
                </Box>
              </Stack>
            </Container>
          </Box>

          {/* Stats Section */}
          <Box 
            w="full" 
            py={{ base: 16, md: 20 }} 
            position="relative"
            overflow="hidden"
            bg="white"
            borderTop="1px"
            borderBottom="1px"
            borderColor="purple.100"
          >
            {/* Background Decoration */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              opacity={0.05}
              bgImage="radial-gradient(circle at 20px 20px, purple.400 2px, transparent 0)"
              backgroundSize="40px 40px"
              pointerEvents="none"
            />
            
            <Container maxW="container.xl">
              <VStack spacing={12}>
                <Heading
                  textAlign="center"
                  variant="gradient-special"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  maxW="2xl"
                >
                  Proven Results That Speak For Themselves
                </Heading>
                
                <SimpleGrid 
                  columns={{ base: 2, md: 4 }} 
                  spacing={{ base: 8, md: 10 }}
                  px={{ base: 4, md: 8 }}
                >
                  {[
                    { 
                      number: "200+", 
                      label: "UAE Businesses Transformed",
                      gradient: "linear(to-r, purple.400, purple.600)"
                    },
                    { 
                      number: "85%", 
                      label: "Average Cost Reduction",
                      gradient: "linear(to-r, purple.500, pink.500)"
                    },
                    { 
                      number: "3x", 
                      label: "Revenue Growth",
                      gradient: "linear(to-r, purple.600, pink.600)"
                    },
                    { 
                      number: "95%", 
                      label: "Client Satisfaction",
                      gradient: "linear(to-r, pink.500, purple.500)"
                    }
                  ].map((stat, index) => (
                    <Box
                      key={index}
                      bg="white"
                      p={6}
                      borderRadius="xl"
                      position="relative"
                      overflow="hidden"
                      border="1px solid"
                      borderColor="purple.100"
                      _hover={{
                        transform: 'translateY(-4px)',
                        boxShadow: 'xl',
                        borderColor: 'purple.200'
                      }}
                      transition="all 0.3s ease"
                    >
                      {/* Background Gradient */}
                      <Box
                        position="absolute"
                        top="-20%"
                        left="-20%"
                        width="140%"
                        height="140%"
                        bgGradient={stat.gradient}
                        opacity={0.05}
                        transform="rotate(-5deg)"
                        transition="all 0.3s ease"
                        _groupHover={{
                          opacity: 0.1,
                          transform: 'rotate(0deg)'
                        }}
                      />
                      
                      <VStack 
                        spacing={3} 
                        position="relative"
                        align="center"
                      >
                        <Text
                          fontSize={{ base: "3xl", md: "4xl" }}
                          fontWeight="bold"
                          variant="gradient-special"
                          className="gradient-text-animate"
                          textAlign="center"
                          letterSpacing="tight"
                        >
                          {stat.number}
                        </Text>
                        <Text
                          fontSize={{ base: "sm", md: "md" }}
                          color="gray.600"
                          textAlign="center"
                          fontWeight="medium"
                          lineHeight="tight"
                        >
                          {stat.label}
                        </Text>
                      </VStack>
                    </Box>
                  ))}
                </SimpleGrid>

                {/* Bottom CTA Button in Stats Section */}
                <Button
                  size="lg"
                  px={8}
                  py={7}
                  fontSize="lg"
                  position="relative"
                  overflow="hidden"
                  bgGradient="linear(to-r, purple.500, pink.500)"
                  color="white"
                  onClick={handleCTAClick}
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '200%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'shimmer 2s infinite'
                  }}
                  _hover={{
                    bgGradient: "linear(to-r, purple.600, pink.600)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 20px 40px rgba(159, 122, 234, 0.3)"
                  }}
                  _active={{
                    transform: "translateY(0)"
                  }}
                  rightIcon={
                    <Icon 
                      as={FaArrowRight} 
                      className="arrow-icon"
                      transition="transform 0.3s ease"
                      _groupHover={{ transform: 'translateX(4px)' }}
                    />
                  }
                  role="group"
                >
                  <HStack spacing={2}>
                    <Text>Start Your AI Journey Today</Text>
                    <Box
                      bg="white"
                      color="purple.500"
                      px={2}
                      py={0.5}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="bold"
                      animation="pulse 2s infinite"
                    >
                      Limited Spots
                    </Box>
                  </HStack>
                </Button>
              </VStack>
            </Container>
          </Box>

          {/* Why Choose Section */}
          <Box 
            w="full" 
            py={20} 
            position="relative"
            overflow="hidden"
            bgGradient={theme.gradients.hero}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              bgGradient: theme.gradients.glow,
              filter: 'blur(80px)',
              transform: 'translateY(50%)',
              zIndex: 0
            }}
          >
            {/* Background Decorative Elements */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              height="100%"
              overflow="hidden"
              pointerEvents="none"
            >
              {/* Tech Grid Pattern */}
              <Box
                position="absolute"
                top="-5%"
                left="-5%"
                width="110%"
                height="110%"
                opacity={0.03}
                backgroundImage={`
                  linear-gradient(to right, purple.200 1px, transparent 1px),
                  linear-gradient(to bottom, purple.200 1px, transparent 1px)
                `}
                backgroundSize="40px 40px"
                transform="rotate(-5deg)"
              />
              
              {/* Floating Circles */}
              {[...Array(3)].map((_, i) => (
                <Box
                  key={i}
                  position="absolute"
                  width={["100px", "150px", "200px"]}
                  height={["100px", "150px", "200px"]}
                  borderRadius="full"
                  bgGradient={`linear(to-r, ${i % 2 === 0 ? 'purple.400, blue.400' : 'blue.400, purple.400'})`}
                  filter="blur(80px)"
                  opacity={0.07}
                  top={`${15 + i * 30}%`}
                  left={i % 2 === 0 ? "-5%" : "85%"}
                  transform="rotate(-15deg)"
                  animation={`float ${3 + i}s ease-in-out infinite`}
                />
              ))}
            </Box>

            <Container maxW="container.xl" position="relative">
              <VStack spacing={16} align="stretch">
                {/* Section Header */}
                <VStack spacing={6} align="center" textAlign="center">
                  <Badge
                    px={4}
                    py={2}
                    bg="purple.50"
                    color="purple.600"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    border="1px solid"
                    borderColor="purple.100"
                    mb={2}
                  >
                    Why Choose Us
                  </Badge>
                  <Heading
                    as="h2"
                    variant="gradient-special"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    maxW="3xl"
                    className="gradient-text"
                  >
                    Why Choose Our AI Mastery Program?
                  </Heading>
                  <Text 
                    fontSize="lg" 
                    color="gray.600" 
                    maxW="2xl"
                    textAlign="center"
                    lineHeight="tall"
                  >
                    Join Dubai's most comprehensive AI training program designed specifically for business leaders and entrepreneurs. Transform your business with cutting-edge AI technology.
                  </Text>
                </VStack>

                {/* Stats Section */}
                <SimpleGrid 
                  columns={{ base: 2, md: 4 }} 
                  spacing={8} 
                  px={{ base: 4, md: 8 }}
                  py={8}
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="xl"
                  border="1px solid"
                  borderColor="purple.100"
                >
                  {[
                    { number: "95%", label: "Success Rate", color: "purple" },
                    { number: "500+", label: "Graduates", color: "blue" },
                    { number: "50+", label: "Industry Partners", color: "pink" },
                    { number: "4.9/5", label: "Student Rating", color: "green" }
                  ].map((stat, index) => (
                    <VStack key={index} spacing={2} p={4}>
                      <Text
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="bold"
                        bgGradient={`linear(to-r, ${stat.color}.500, ${stat.color}.600)`}
                        bgClip="text"
                        className="stat-number"
                      >
                        {stat.number}
                      </Text>
                      <Text color="gray.500" fontSize="sm" textAlign="center">
                        {stat.label}
                      </Text>
                    </VStack>
                  ))}
                </SimpleGrid>

                {/* Limited Spots Notice - Moved to top */}
                <Box
                  mb={4}
                  py={2}
                  px={3}
                  bg="purple.50"
                  borderRadius="md"
                  border="1px dashed"
                  borderColor="purple.200"
                  textAlign="center"
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '200%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.1), transparent)',
                    animation: 'shimmer 2s infinite'
                  }}
                >
                  <HStack
                    spacing={2}
                    justify="center"
                  >
                    <Icon as={FaClock} color="purple.500" boxSize={3.5} />
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      bgGradient="linear(to-r, purple.500, pink.500)"
                      bgClip="text"
                    >
                      Limited spots available for the next cohort
                    </Text>
                  </HStack>
                </Box>

                {/* Features Grid */}
                <SimpleGrid 
                  columns={{ base: 1, md: 2, lg: 3 }} 
                  spacing={{ base: 3, md: 4 }}
                  pt={0}
                  pb={4}
                >
                  {[
                    {
                      icon: FaRobot,
                      title: "Cutting-Edge AI Tools",
                      description: "Access the latest AI technologies and learn how to implement them in your business operations.",
                      gradient: "linear(to-br, purple.400, pink.500)",
                      iconBg: "linear(to-br, purple.100, pink.100)",
                      delay: 0
                    },
                    {
                      icon: FaChartLine,
                      title: "Data-Driven Strategy",
                      description: "Transform your decision-making process with AI-powered analytics and insights.",
                      gradient: "linear(to-br, blue.400, purple.500)",
                      iconBg: "linear(to-br, blue.100, purple.100)",
                      delay: 0.1
                    },
                    {
                      icon: FaUserTie,
                      title: "Industry Experts",
                      description: "Learn from seasoned professionals with real-world AI implementation experience.",
                      gradient: "linear(to-br, pink.400, purple.500)",
                      iconBg: "linear(to-br, pink.100, purple.100)",
                      delay: 0.2
                    },
                    {
                      icon: FaHandsHelping,
                      title: "Hands-On Support",
                      description: "Get personalized guidance and support throughout your AI transformation journey.",
                      gradient: "linear(to-br, purple.400, blue.500)",
                      iconBg: "linear(to-br, purple.100, blue.100)",
                      delay: 0.3
                    },
                    {
                      icon: FaLightbulb,
                      title: "Practical Applications",
                      description: "Focus on real-world use cases and immediate implementation in your business.",
                      gradient: "linear(to-br, blue.400, pink.500)",
                      iconBg: "linear(to-br, blue.100, pink.100)",
                      delay: 0.4
                    },
                    {
                      icon: FaCertificate,
                      title: "Industry Recognition",
                      description: "Earn a prestigious certification recognized by leading tech companies.",
                      gradient: "linear(to-br, pink.400, blue.500)",
                      iconBg: "linear(to-br, pink.100, blue.100)",
                      delay: 0.5
                    }
                  ].map((feature, index) => (
                    <Box
                      key={index}
                      bg="white"
                      p={4}
                      borderRadius="lg"
                      position="relative"
                      overflow="hidden"
                      role="group"
                      transition="all 0.3s"
                      transform={`translateY(${feature.delay * 20}px)`}
                      opacity={0}
                      animation={`fadeInUp 0.6s ease-out ${feature.delay}s forwards`}
                      boxShadow="sm"
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      sx={{
                        '@keyframes fadeInUp': {
                          '0%': {
                            opacity: 0,
                            transform: 'translateY(20px)',
                          },
                          '100%': {
                            opacity: 1,
                            transform: 'translateY(0)',
                          },
                        },
                      }}
                    >
                      {/* Background Pattern */}
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        opacity={0.03}
                        bgGradient={feature.gradient}
                        transform="rotate(-4deg) scale(1.2)"
                        transition="all 0.3s"
                        _groupHover={{
                          transform: 'rotate(0deg) scale(1.3)',
                          opacity: 0.08
                        }}
                      />

                      {/* Content */}
                      <HStack spacing={3} align="flex-start">
                        {/* Icon */}
                        <Box
                          w="36px"
                          h="36px"
                          borderRadius="md"
                          bgGradient={feature.iconBg}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          transition="all 0.3s"
                          _groupHover={{
                            transform: 'scale(1.1)'
                          }}
                        >
                          <Icon
                            as={feature.icon}
                            boxSize={4}
                            color="purple.600"
                            transition="all 0.3s"
                            _groupHover={{
                              transform: 'scale(1.1)',
                              color: 'purple.500'
                            }}
                          />
                        </Box>

                        <VStack align="start" spacing={1}>
                          <Heading
                            as="h3"
                            fontSize="md"
                            fontWeight="bold"
                            bgGradient={feature.gradient}
                            bgClip="text"
                            transition="all 0.3s"
                            _groupHover={{
                              transform: 'translateX(2px)'
                            }}
                            lineHeight="shorter"
                          >
                            {feature.title}
                          </Heading>
                          <Text
                            color="gray.600"
                            fontSize="sm"
                            lineHeight="short"
                          >
                            {feature.description}
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  ))}
                </SimpleGrid>
              </VStack>
            </Container>
          </Box>

          {/* Success Stories Section */}
          <Box 
            w="full" 
            py={20} 
            position="relative"
            overflow="hidden"
            bgGradient={theme.gradients.subtle}
            _before={{
              content: '""',
              position: 'absolute',
              inset: 0,
              bgImage: "radial-gradient(circle at 1px 1px, purple.200 1px, transparent 0)",
              backgroundSize: "40px 40px",
              backgroundPosition: "center",
              opacity: 0.5,
              transform: "rotate(-2deg) scale(1.2)"
            }}
          >
            <Container maxW="container.xl" position="relative">
              <VStack spacing={16}>
                {/* Section Header */}
                <VStack spacing={4} textAlign="center" maxW="3xl" mx="auto">
                  <Badge
                    px={4}
                    py={2}
                    bg="purple.50"
                    color="purple.600"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                    letterSpacing="wider"
                    textTransform="uppercase"
                  >
                    Success Stories
                  </Badge>
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl" }}
                    variant="gradient-special"
                    mb={4}
                  >
                    Transforming UAE Businesses with AI
                  </Heading>
                  <Text 
                    fontSize="lg" 
                    variant="gradient-special"
                    maxW="2xl"
                  >
                    Join these successful UAE business leaders who have revolutionized their operations through our AI Mastery Program
                  </Text>
                </VStack>

                {/* Featured Success Story */}
                <Box
                  w="full"
                  bg="white"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="xl"
                  position="relative"
                >
                  <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
                    {/* Content Side */}
                    <Box p={10} position="relative">
                      <VStack align="start" spacing={6}>
                        <HStack spacing={4}>
                          <Avatar
                            size="xl"
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                            name="Mohammed Al-Rashid"
                            border="4px solid"
                            borderColor="purple.100"
                          />
                          <Box>
                            <Heading size="lg" color="gray.800" mb={1} variant="gradient-testimonial">
                              Mohammed Al-Rashid
                            </Heading>
                            <Text variant="gradient-role" fontWeight="medium">
                              CEO, Dubai Tech Solutions
                            </Text>
                          </Box>
                        </HStack>

                        <Box position="relative">
                          <Icon
                            as={FaQuoteLeft}
                            position="absolute"
                            top={-4}
                            left={-4}
                            color="purple.100"
                            boxSize={8}
                          />
                          <Text
                            fontSize="lg"
                            variant="gradient-decorative"
                            lineHeight="tall"
                            pl={6}
                          >
                            "The AI Mastery Program transformed our entire business approach. We've automated 70% of our customer service operations and seen a 300% increase in lead conversion. The ROI was evident within the first month. The program's focus on practical implementation and UAE market specifics made it invaluable for our growth."
                          </Text>
                        </Box>

                        <SimpleGrid columns={3} gap={6} w="full" pt={4}>
                          {[
                            { label: "Revenue Growth", value: "300%" },
                            { label: "Cost Reduction", value: "40%" },
                            { label: "ROI Timeline", value: "1 Month" }
                          ].map((stat, index) => (
                            <VStack key={index} align="start" spacing={1}>
                              <Text
                                fontSize="2xl"
                                fontWeight="bold"
                                variant="gradient-metric"
                              >
                                {stat.value}
                              </Text>
                              <Text 
                                fontSize="sm" 
                                variant="gradient-benefit"
                              >
                                {stat.label}
                              </Text>
                            </VStack>
                          ))}
                        </SimpleGrid>
                      </VStack>
                    </Box>

                    {/* Image Side */}
                    <Box position="relative" minH={{ base: "300px", lg: "auto" }}>
                      <Box
                        position="absolute"
                        inset={0}
                        bgImage="url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800')"
                        bgSize="cover"
                        bgPosition="center"
                        filter="brightness(0.9)"
                      >
                        <Box
                          position="absolute"
                          inset={0}
                          bg="purple.900"
                          opacity={0.8}
                        />
                        <VStack
                          position="absolute"
                          inset={0}
                          justify="center"
                          p={10}
                          color="white"
                          textAlign="center"
                          spacing={6}
                        >
                          <Heading size="lg">
                            Ready to Transform Your Business?
                          </Heading>
                          <Text fontSize="lg" maxW="md">
                            Join our next cohort and achieve similar results for your organization
                          </Text>
                          <Button
                            size="lg"
                            colorScheme="purple"
                            variant="solid"
                            _hover={{
                              transform: 'translateY(-2px)',
                              boxShadow: 'lg'
                            }}
                          >
                            Start Your Journey
                          </Button>
                        </VStack>
                      </Box>
                    </Box>
                  </SimpleGrid>
                </Box>

                {/* More Success Stories */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
                  {[
                    {
                      name: "Sara Al-Mansoori",
                      role: "Marketing Director",
                      company: "Innovation Hub",
                      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
                      quote: "Our marketing team now saves 30+ hours per week using AI tools. Campaign performance has improved by 150% with the strategies learned.",
                      achievement: "150% Performance Boost",
                      duration: "2 months",
                      gradient: "linear(to-r, purple.400, pink.500)"
                    },
                    {
                      name: "Ahmed Al-Qasimi",
                      role: "Operations Head",
                      company: "Smart Logistics UAE",
                      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
                      quote: "Implementing AI in our logistics operations reduced costs by 40% and improved delivery accuracy to 99.9%. The program exceeded expectations.",
                      achievement: "99.9% Accuracy",
                      duration: "4 months",
                      gradient: "linear(to-r, blue.400, purple.500)"
                    },
                    {
                      name: "Fatima Al-Hashimi",
                      role: "Business Development Head",
                      company: "Smart Solutions UAE",
                      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
                      quote: "Within weeks of implementing the AI strategies, our sales team's productivity doubled. The program's focus on practical applications made it invaluable.",
                      achievement: "2x Productivity",
                      duration: "3 months",
                      gradient: "linear(to-r, pink.400, purple.500)"
                    }
                  ].map((story, index) => (
                    <Box
                      key={index}
                      bg="white"
                      p={8}
                      borderRadius="xl"
                      boxShadow="lg"
                      position="relative"
                      transition="all 0.3s"
                      _hover={{
                        transform: 'translateY(-5px)',
                        boxShadow: '2xl'
                      }}
                    >
                      {/* Achievement Banner */}
                      <Box
                        position="absolute"
                        top={4}
                        right={4}
                        px={3}
                        py={1}
                        bg="purple.50"
                        color="purple.600"
                        fontSize="xs"
                        fontWeight="bold"
                        borderRadius="full"
                      >
                        {story.duration}
                      </Box>

                      <VStack align="start" spacing={6}>
                        <HStack spacing={4}>
                          <Avatar
                            size="lg"
                            src={story.image}
                            name={story.name}
                            border="3px solid"
                            borderColor="purple.50"
                          />
                          <Box>
                            <Text fontWeight="bold" fontSize="lg" variant="gradient-testimonial">
                              {story.name}
                            </Text>
                            <Text fontSize="sm" variant="gradient-role">
                              {story.role}
                            </Text>
                            <Text fontSize="sm" variant="gradient-company" fontWeight="medium">
                              {story.company}
                            </Text>
                          </Box>
                        </HStack>

                        <Box
                          w="full"
                          p={4}
                          borderRadius="lg"
                          bg="purple.50"
                          position="relative"
                          border="1px solid"
                          borderColor="purple.200"
                          _hover={{
                            bg: "purple.100",
                            borderColor: "purple.300",
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                          }}
                        >
                          <Text variant="gradient-quote" fontSize="md">
                            "{story.quote}"
                          </Text>
                        </Box>

                        <Box
                          w="full"
                          p={5}
                          borderRadius="lg"
                          bg="white"
                          border="2px solid"
                          borderColor="purple.200"
                          boxShadow="lg"
                          position="relative"
                          _before={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: "lg",
                            bgGradient: "linear(to-r, purple.50, pink.50)",
                            opacity: 0.5,
                            zIndex: 0
                          }}
                        >
                          <VStack spacing={1} position="relative" zIndex={1}>
                            <Text
                              fontSize={{ base: "lg", md: "xl" }}
                              fontWeight="extrabold"
                              variant="gradient-special"
                              textAlign="center"
                              letterSpacing="wide"
                              className="gradient-text-animate"
                            >
                              {story.achievement}
                            </Text>
                            <Text
                              fontSize="xs"
                              color="purple.600"
                              fontWeight="medium"
                            >
                              Achieved in {story.duration}
                            </Text>
                          </VStack>
                        </Box>
                      </VStack>
                    </Box>
                  ))}
                </SimpleGrid>

                {/* Bottom CTA */}
                <VStack spacing={4} pt={8}>
                  <Text fontSize="lg" variant="gradient-highlight">
                    Ready to join these success stories?
                  </Text>
                  <Button
                    size="lg"
                    variant="gradient-outline"
                    color="white"
                    borderColor="whiteAlpha.400"
                    position="relative"
                    overflow="hidden"
                    px={8}
                    py={7}
                    fontSize="xl"
                    fontWeight="bold"
                    onClick={handleCTAClick}
                    bgGradient="linear(to-r, purple.500, pink.500)"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '200%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      animation: 'shimmer 3s infinite'
                    }}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 20px 40px rgba(159, 122, 234, 0.4)',
                      bgGradient: 'linear(to-r, pink.500, purple.500)'
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                    sx={{
                      '@keyframes shimmer': {
                        '0%': { left: '-100%' },
                        '100%': { left: '100%' }
                      },
                      '@keyframes float': {
                        '0%': { transform: 'translateY(0) rotate(-15deg)' },
                        '100%': { transform: 'translateY(-20px) rotate(-5deg)' }
                      }
                    }}
                  >
                    <HStack spacing={3} position="relative">
                      <Text>Apply Now</Text>
                      <Box
                        bg="white"
                        color="purple.500"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="extrabold"
                        animation="float 2s ease-in-out infinite"
                      >
                        50% OFF
                      </Box>
                      <Icon 
                        as={FaArrowRight} 
                        transition="transform 0.3s ease"
                        _groupHover={{ transform: 'translateX(4px)' }}
                      />
                    </HStack>
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      borderRadius="lg"
                      border="2px solid transparent"
                      bgGradient="linear(to-r, purple.200, pink.200)"
                      opacity={0.3}
                      style={{ maskImage: 'radial-gradient(circle at center, transparent 65%, black 70%)' }}
                    />
                  </Button>
                </VStack>
              </VStack>
            </Container>
          </Box>

          {/* FAQ Section */}
          <Box 
            w="full" 
            py={12} 
            position="relative"
            bgGradient={theme.gradients.hero}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '30%',
              bgGradient: theme.gradients.glow,
              filter: 'blur(60px)',
              zIndex: 0
            }}
          >
            <Container maxW="container.lg" position="relative">
              <VStack spacing={8} align="stretch">
                {/* Section Header */}
                <VStack spacing={4} align="center" mb={2}>
                  <Badge
                    px={3}
                    py={1}
                    bg="purple.50"
                    color="purple.600"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    FAQ
                  </Badge>
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    textAlign="center"
                    variant="gradient-special"
                  >
                    Frequently Asked Questions
                  </Heading>
                </VStack>

                {/* FAQ Accordion */}
                <Accordion allowMultiple>
                  {[
                    {
                      q: "Who is this program designed for?",
                      a: "This program is tailored for business owners and managers in Dubai who want to leverage AI to automate operations and drive growth. Perfect for both startups and established SMEs."
                    },
                    {
                      q: "Do I need technical experience?",
                      a: "No technical background is required. Our program is designed to be accessible for business professionals of all technical levels, with step-by-step implementation guidance."
                    },
                    {
                      q: "What's included in the program?",
                      a: "You'll receive live training sessions, AI implementation tools worth AED 25,000+, hands-on workshops, personalized support, and lifetime access to course materials."
                    },
                    {
                      q: "What's the time commitment?",
                      a: "4-6 hours per week, including live sessions and implementation time. All sessions are recorded for flexible learning at your own pace."
                    }
                  ].map((faq, index) => (
                    <AccordionItem
                      key={index}
                      border="none"
                      mb={4}
                    >
                      {({ isExpanded }) => (
                        <>
                          <AccordionButton
                            bg={isExpanded ? "purple.50" : "white"}
                            _hover={{ bg: "purple.50" }}
                            borderRadius="lg"
                            p={4}
                            transition="all 0.2s"
                          >
                            <Box flex="1" textAlign="left" fontWeight="medium">
                              <HStack>
                                <Text 
                                  as="span"
                                  fontSize="sm"
                                  variant="gradient-emphasis"
                                  fontWeight="bold"
                                >
                                  {(index + 1).toString().padStart(2, '0')}
                                </Text>
                                <Text variant="gradient-faq">{faq.q}</Text>
                              </HStack>
                            </Box>
                            <Icon
                              as={isExpanded ? FaChevronUp : FaChevronDown}
                              transition="transform 0.2s"
                              transform={isExpanded ? "rotate(-180deg)" : ""}
                              w={4}
                              h={4}
                              color="purple.500"
                            />
                          </AccordionButton>
                          <AccordionPanel pb={4} px={4}>
                            <Text variant="gradient-subtle" pl={7}>
                              {faq.a}
                            </Text>
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Contact Link */}
                <Text
                  fontSize="sm"
                  color="gray.600"
                  textAlign="center"
                  mt={4}
                >
                  Have more questions?{" "}
                  <Link
                    color="purple.500"
                    fontWeight="medium"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Contact our team
                  </Link>
                </Text>
              </VStack>
            </Container>
          </Box>

          {/* Contact Form Section */}
          <Box
            id="contact-form"
            w="full"
            py={16}
            position="relative"
            bg="white"
            borderTop="1px"
            borderColor="purple.100"
            scrollMarginTop="100px"
          >
            <Container maxW="container.md">
              <VStack spacing={8} align="stretch">
                <VStack spacing={4} textAlign="center">
                  <Heading
                    variant="gradient-special"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    textAlign="center"
                  >
                    Ready to Get Started?
                  </Heading>
                  <Text
                    fontSize="lg"
                    color="gray.600"
                    maxW="xl"
                  >
                    Fill out the form below and our team will get back to you within 24 hours
                  </Text>
                </VStack>

                <Box
                  bg="white"
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  boxShadow="xl"
                  border="1px solid"
                  borderColor="purple.100"
                  _hover={{
                    borderColor: "purple.200",
                    transform: "translateY(-2px)",
                    boxShadow: "2xl",
                  }}
                  transition="all 0.3s ease"
                >
                  <VStack spacing={6}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                      <FormControl>
                        <FormLabel
                          fontSize="sm"
                          fontWeight="medium"
                          color="gray.700"
                        >
                          Full Name
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<Icon as={FaUser} color="purple.400" />}
                          />
                          <Input
                            type="text"
                            placeholder="John Doe"
                            bg="gray.50"
                            borderColor="purple.100"
                            _hover={{
                              borderColor: "purple.300",
                            }}
                            _focus={{
                              borderColor: "purple.400",
                              boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)",
                            }}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl>
                        <FormLabel
                          fontSize="sm"
                          fontWeight="medium"
                          color="gray.700"
                        >
                          Phone Number
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<Icon as={FaPhone} color="purple.400" />}
                          />
                          <Input
                            type="tel"
                            placeholder="+971 XX XXX XXXX"
                            bg="gray.50"
                            borderColor="purple.100"
                            _hover={{
                              borderColor: "purple.300",
                            }}
                            _focus={{
                              borderColor: "purple.400",
                              boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)",
                            }}
                          />
                        </InputGroup>
                      </FormControl>
                    </SimpleGrid>

                    <FormControl>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                      >
                        Email Address
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<Icon as={FaEnvelope} color="purple.400" />}
                        />
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          bg="gray.50"
                          borderColor="purple.100"
                          _hover={{
                            borderColor: "purple.300",
                          }}
                          _focus={{
                            borderColor: "purple.400",
                            boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)",
                          }}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.700"
                      >
                        Company Name
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<Icon as={FaBuilding} color="purple.400" />}
                        />
                        <Input
                          type="text"
                          placeholder="Your Company Ltd."
                          bg="gray.50"
                          borderColor="purple.100"
                          _hover={{
                            borderColor: "purple.300",
                          }}
                          _focus={{
                            borderColor: "purple.400",
                            boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)",
                          }}
                        />
                      </InputGroup>
                    </FormControl>

                    <Button
                      size="lg"
                      w="full"
                      h={14}
                      fontSize="lg"
                      position="relative"
                      overflow="hidden"
                      bgGradient="linear(to-r, purple.500, pink.500)"
                      color="white"
                      type="submit"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '200%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        animation: 'shimmer 2s infinite'
                      }}
                      _hover={{
                        bgGradient: "linear(to-r, purple.600, pink.600)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 20px 40px rgba(159, 122, 234, 0.3)"
                      }}
                      _active={{
                        transform: "translateY(0)"
                      }}
                      rightIcon={
                        <Icon 
                          as={FaArrowRight} 
                          className="arrow-icon"
                          transition="transform 0.3s ease"
                          _groupHover={{ transform: 'translateX(4px)' }}
                        />
                      }
                      role="group"
                    >
                      <HStack spacing={2}>
                        <Text>Submit Application</Text>
                        <Box
                          bg="white"
                          color="purple.500"
                          px={2}
                          py={0.5}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight="bold"
                          animation="pulse 2s infinite"
                        >
                          Fast-Track
                        </Box>
                      </HStack>
                    </Button>

                    <Text fontSize="sm" color="gray.500" textAlign="center">
                      By submitting this form, you agree to our{" "}
                      <Link color="purple.500" href="#" textDecoration="underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link color="purple.500" href="#" textDecoration="underline">
                        Privacy Policy
                      </Link>
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </Container>
          </Box>

          {/* CTA Section */}
          <Box 
            w="full" 
            py={16} 
            position="relative"
            bgGradient="linear(to-br, purple.800, blue.900)"
            color="white"
            overflow="hidden"
          >
            {/* Animated Background Elements */}
            <Box
              position="absolute"
              inset={0}
              opacity={0.07}
              bgImage="url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
              backgroundSize="30px 30px"
              transform="rotate(-5deg)"
            />
            
            {/* Glowing Orbs */}
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                position="absolute"
                width={{ base: "150px", md: "300px" }}
                height={{ base: "150px", md: "300px" }}
                borderRadius="full"
                bgGradient={i % 2 === 0 
                  ? "linear(to-r, blue.400, purple.500)" 
                  : "linear(to-r, purple.400, pink.500)"
                }
                filter="blur(80px)"
                opacity={0.2}
                top={`${20 + i * 30}%`}
                left={i % 2 === 0 ? "-5%" : "75%"}
                transform="rotate(-15deg)"
                animation={`float ${3 + i}s ease-in-out infinite alternate`}
                sx={{
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0) rotate(-15deg)' },
                    '100%': { transform: 'translateY(-20px) rotate(-5deg)' }
                  }
                }}
              />
            ))}

            <Container maxW="container.xl" position="relative">
              <VStack 
                spacing={8}
                align="center"
                textAlign="center"
                maxW="3xl"
                mx="auto"
              >
                <Badge
                  px={3}
                  py={1}
                  bg="whiteAlpha.200"
                  color="white"
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  border="1px solid"
                  borderColor="blue.300"
                  bgGradient="linear(to-r, blue.400, purple.400)"
                >
                  Early Bird Offer - Save 50%
                </Badge>
                
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  fontWeight="bold"
                  lineHeight="shorter"
                  bgGradient="linear(to-r, blue.100, purple.100, pink.100)"
                  bgClip="text"
                  className="gradient-text-animate"
                >
                  Accelerate Your Business with AI Mastery
                </Heading>

                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="blue.100"
                  maxW="2xl"
                >
                  Join Dubai's elite program designed to transform your operations through cutting-edge AI implementation and strategy.
                </Text>

                <HStack spacing={4} pt={4}>
                  <Button
                    size="lg"
                    px={8}
                    py={7}
                    fontSize="lg"
                    fontWeight="bold"
                    bgGradient="linear(to-r, blue.400, purple.500)"
                    color="white"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 20px 40px rgba(66, 153, 225, 0.3)',
                      bgGradient: "linear(to-r, blue.500, purple.600)"
                    }}
                    onClick={handleCTAClick}
                    rightIcon={<Icon as={FaArrowRight} />}
                  >
                    Secure Your Spot
                  </Button>

                  <Box
                    bgGradient="linear(to-r, blue.500, purple.500)"
                    px={6}
                    py={2}
                    borderRadius="full"
                    border="1px dashed"
                    borderColor="blue.300"
                  >
                    <HStack spacing={2}>
                      <Icon as={FaClock} color="blue.100" />
                      <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color="white"
                      >
                        Limited Time
                      </Text>
                    </HStack>
                  </Box>
                </HStack>
              </VStack>
            </Container>
          </Box>

          {/* Footer */}
          <Box 
            w="full" 
            bg="black"
            color="gray.300"
            borderTop="1px"
            borderColor="whiteAlpha.200"
          >
            {/* Main Footer Content */}
            <Container maxW="container.xl" py={16}>
              <Stack
                direction={{ base: 'column', lg: 'row' }}
                spacing={{ base: 12, lg: 16 }}
                justify="space-between"
              >
                {/* Brand Column */}
                <VStack align="start" spacing={6} maxW="sm">
                  <Heading
                    fontSize="2xl"
                    bgGradient="linear(to-r, blue.400, purple.400)"
                    bgClip="text"
                    fontWeight="bold"
                  >
                    AI Mastery Program
                  </Heading>
                  <Text fontSize="sm" color="gray.400" lineHeight="tall">
                    Empowering businesses in Dubai with cutting-edge AI solutions. Join our comprehensive program to transform your operations and stay ahead in the digital age.
                  </Text>
                  <HStack spacing={4}>
                    {[
                      { icon: FaLinkedin, link: "#" },
                      { icon: FaTwitter, link: "#" },
                      { icon: FaInstagram, link: "#" },
                      { icon: FaYoutube, link: "#" }
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href={social.link}
                        isExternal
                        _hover={{ transform: 'translateY(-2px)' }}
                      >
                        <Icon
                          as={social.icon}
                          boxSize={5}
                          color="gray.400"
                          transition="all 0.3s"
                          _hover={{
                            color: 'white',
                            transform: 'scale(1.1)'
                          }}
                        />
                      </Link>
                    ))}
                  </HStack>
                </VStack>

                {/* Quick Links */}
                <SimpleGrid
                  columns={{ base: 2, md: 3 }}
                  spacing={{ base: 8, md: 12 }}
                >
                  {/* Program Column */}
                  <VStack align="start" spacing={4}>
                    <Text
                      color="white"
                      fontWeight="semibold"
                      fontSize="sm"
                      textTransform="uppercase"
                      letterSpacing="wider"
                    >
                      Program
                    </Text>
                    {[
                      "Curriculum",
                      "Schedule",
                      "Pricing",
                      "Enterprise Solutions",
                      "Success Stories"
                    ].map((link, index) => (
                      <Link
                        key={index}
                        href="#"
                        fontSize="sm"
                        color="gray.400"
                        _hover={{
                          color: 'white',
                          textDecoration: 'none'
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </VStack>

                  {/* Resources Column */}
                  <VStack align="start" spacing={4}>
                    <Text
                      color="white"
                      fontWeight="semibold"
                      fontSize="sm"
                      textTransform="uppercase"
                      letterSpacing="wider"
                    >
                      Resources
                    </Text>
                    {[
                      "Blog",
                      "Case Studies",
                      "Documentation",
                      "AI Tools",
                      "Support"
                    ].map((link, index) => (
                      <Link
                        key={index}
                        href="#"
                        fontSize="sm"
                        color="gray.400"
                        _hover={{
                          color: 'white',
                          textDecoration: 'none'
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </VStack>

                  {/* Company Column */}
                  <VStack align="start" spacing={4}>
                    <Text
                      color="white"
                      fontWeight="semibold"
                      fontSize="sm"
                      textTransform="uppercase"
                      letterSpacing="wider"
                    >
                      Company
                    </Text>
                    {[
                      "About Us",
                      "Contact",
                      "Careers",
                      "Partners",
                      "News"
                    ].map((link, index) => (
                      <Link
                        key={index}
                        href="#"
                        fontSize="sm"
                        color="gray.400"
                        _hover={{
                          color: 'white',
                          textDecoration: 'none'
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </VStack>
                </SimpleGrid>

                {/* Contact Column */}
                <VStack align="start" spacing={4} minW="xs">
                  <Text
                    color="white"
                    fontWeight="semibold"
                    fontSize="sm"
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    Contact Us
                  </Text>
                  <VStack align="start" spacing={3}>
                    <HStack spacing={3}>
                      <Icon as={FaMapMarker} color="blue.400" boxSize={4} />
                      <Text fontSize="sm" color="gray.400">
                        Dubai Internet City, Dubai, UAE
                      </Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Icon as={FaPhone} color="blue.400" boxSize={4} />
                      <Text fontSize="sm" color="gray.400">
                        +971 4 XXX XXXX
                      </Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Icon as={FaEnvelope} color="blue.400" boxSize={4} />
                      <Text fontSize="sm" color="gray.400">
                        contact@aimastery.ae
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Stack>
            </Container>

            {/* Bottom Bar */}
            <Box
              borderTop="1px"
              borderColor="whiteAlpha.100"
              bg="blackAlpha.400"
            >
              <Container maxW="container.xl" py={6}>
                <Stack
                  direction={{ base: 'column', md: 'row' }}
                  spacing={{ base: 4, md: 0 }}
                  justify="space-between"
                  align="center"
                >
                  <Text fontSize="sm" color="gray.500">
                    © 2024 AI Mastery Program. All rights reserved.
                  </Text>
                  <HStack spacing={6}>
                    {[
                      "Privacy Policy",
                      "Terms of Service",
                      "Cookie Policy"
                    ].map((link, index) => (
                      <Link
                        key={index}
                        href="#"
                        fontSize="sm"
                        color="gray.500"
                        _hover={{
                          color: 'gray.300',
                          textDecoration: 'none'
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </HStack>
                </Stack>
              </Container>
            </Box>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App; 