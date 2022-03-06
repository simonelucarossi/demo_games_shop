import React, { useState } from "react";
import Navbar from "../../../components/navbar/navbar";
import {
  InputLeftElement,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import {
  Previous,
  Paginator,
  PageGroup,
  Next,
  Container,
  usePaginator,
} from 'chakra-paginator';
import { AiOutlineTag } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { MdTitle } from 'react-icons/md';
import { IoChevronBackOutline } from 'react-icons/io5';
import { categoriesName } from "../../../utils/categoriesMapping";
import { useNavigate } from "react-router-dom";

const NewEditProduct = ({ isEditing }) => {
  const history = useNavigate();
  const idProduct = (window.location.href).split('/')[(window.location.href).split('/').length - 1];
  const items = [
    {
      title: '1',
      img: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_DuckGame_image1600w.jpg',
      price: 2.99,
      category: 0,
      tags: ['Upcoming', 'Raccomended', 'Top 10'],
    },
    {
      title: '2',
      img: 'https://wallpaperaccess.com/full/7445.jpg',
      price: 2.99,
      category: 0,
      tags: [ 'Raccomended', 'Top 10'],
    },
    {
      title: 'Mass Effect',
      img: 'https://wallpapercave.com/wp/wp2294733.jpg',
      price: 2.99,
      category: 0,
      tags: [],
    },
    {
      title: '4',
      img: 'data:image/jpeg;base64,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',
      price: 2.99,
      category: 0,
      tags: [],
    },
    {
      title: undefined,
      img: 'https://wallpapers.com/images/high/hd-cool-robot-gaming-cover-zhrvdlxab529nys8.jpg',
      price: 2.99,
      category: 0,
      tags: ['Raccomended'],
    },
    {
      title: 'Skyrim',
      img: 'data:image/jpeg;base64,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',
      price: 2.99,
      category: 0,
      tags: ['Upcoming'],
    },
    {
      title: 'Endless Legend',
      img: 'data:image/jpeg;base64,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',
      price: 2.99,
      category: 0,
      tags: ['Top 10'],
      description: `Endless Legend è un gioco fantasy di strategia 4X a turni realizzato dai creatori di Endless Space e Dungeon of the Endless. Domina ogni aspetto della tua civiltà mentre lotti per salvare il tuo mondo d'origine: Auriga. Crea la tua leggenda!`,
    },
    {
      title: '8',
      img: 'https://wallpapercave.com/wp/wp2294732.jpg',
      price: 2.99,
      category: 0,
      tags: [],
    },
    {
      title: '9',
      img: 'https://wallpapercave.com/wp/wp2294701.jpg',
      price: 2.99,
      category: 0,
      tags: ['Upcoming', 'Raccomended', 'Top 10'],
    },
    {
      title: '10',
      img: 'https://wallpapercave.com/wp/wp2294719.jpg',
      price: 2.99,
      category: 0,
      tags: ['Upcoming', 'Raccomended'],
    },
    {
      title: '11',
      img: 'https://wallpapercave.com/wp/wp2294725.jpg',
      price: 2.99,
      category: 0,
      tags: ['Upcoming', 'Raccomended', 'Top 10'],
    },
    {
      title: '12',
      img: 'https://wallpapercave.com/wp/wc1801040.jpg',
      price: 2.99,
      category: 0,
      tags: ['Upcoming', 'Top 10'],
    },
  ];

  const [product, setProduct] = useState(items[idProduct - 1]);

  return (
    <>
      <Navbar/>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        direction='row'
        color="white"
        h={'100%'}
        marginLeft={{ base: '0px', md: '15vw' }}
        marginRight={{ base: '0px', md: '15vw' }}
      >
        {/* HEADER */}
        <Flex mb={10} w={'100%'}>
          <Button 
            leftIcon={<IoChevronBackOutline 
            color='white' 
            fontSize={17}/>} 
            mr={4} 
            h={'60px'} 
            bg={'orange.400'}
            onClick={() => history('/')}
          >
            <Text>
              Back
            </Text>
          </Button>
          <Heading color={'black'} as='h2' size='3xl' isTruncated>
            {product?.title}
          </Heading>  
        </Flex>
        <Grid
          direction={{ base: "column", md: "row" }}
          width={{ base: "full", md: "100%" }}
          alignItems="center"
          mt={{ base: 4, md: 0 }}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        >
                <GridItem rowSpan={1} colSpan={{ base: '3', md: '1' }}>
                  {/* PRODUCT IMAGE */}
                  <Image
                    borderRadius={3}
                    boxSize='250px'
                    src={product?.img}
                    alt={product?.title ?? 'Title not found'}
                    w={'100%'}
                    mb={2}
                    mt={0}
                    border={'1px solid'}
                    borderColor={'gray.200'}
                    p={1}
                  />
                </GridItem>
                <GridItem h={'100%'} rowSpan={1} colSpan={{ base: '3', md: '2' }}>
                  <Flex ml={5} justifyContent={'flex-start'} mt={5} direction={'column'}>
                    {/* PRODUCT TITLE */}
                    <InputGroup mb={3}>
                      <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        children={<MdTitle color='gray.300' />}
                      />
                      <Input 
                        value={product?.title} 
                        placeholder='Enter product title...' 
                        color='black' 
                        onChange={(e) => {
                          const newProduct = { ...product, 'title': e?.target?.value};
                          setProduct(newProduct);
                        }}
                      />
                      <InputRightElement children={<FaCheck color='green' />} />
                    </InputGroup>
                    {/* PRODUCT PRICE */}
                    <InputGroup mb={3}>
                      <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        children='$'
                      />
                      <Input 
                        value={product?.price} 
                        placeholder='Enter amount...' 
                        color='black' 
                        onChange={(e) => {
                          const newProduct = { ...product, 'price': e?.target?.value};
                          setProduct(newProduct);
                        }}
                      />
                      <InputRightElement children={<FaCheck color='green' />} />
                    </InputGroup>
                    {/* PRODUCT IMAGE URL */}
                    <InputGroup mb={3}>
                      <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        children={<BsImages color='gray.300' />}
                      />
                      <Input 
                        value={product?.img} 
                        placeholder='Enter image url...' 
                        color='black' 
                        onChange={(e) => {
                          const newProduct = { ...product, 'img': e?.target?.value};
                          setProduct(newProduct);
                        }}
                      />
                      <InputRightElement children={<FaCheck color='green' />} />
                    </InputGroup>
                    <Flex direction={'row'}>
                    {/* PRODUCT TAGS */}
                      <Button w={'fit-content'} h={45} bg={'gray.300'} color='white'>
                        <AiOutlineTag/>
                        <Text fontSize={12} marginLeft={'4px'}>Tags</Text>
                      </Button>
                    {/* PRODUCT CATEGORY */}
                      <Button ml={3} w={'fit-content'} h={45} bg={'gray.300'} color='white'>
                        <Text fontSize={12} marginLeft={'4px'}>Category</Text>
                      </Button>
                    </Flex>
                  </Flex>
                </GridItem>
                {/* PRODUCT DESCRIPTION */}
                <GridItem rowSpan={1} colSpan={3}>
                  <Flex mt={5} direction={'column'}>
                    {/* ROW TITLE */}
                    <Text 
                      color={'white'}
                      bg={'orange.400'}
                      p={3}
                      mr={5}
                      mb={2}
                      borderRadius={4}
                      w={'fit-content'}
                    >
                      Description
                    </Text>
                   {/* ROW TEXT */}
                    <Textarea 
                      value={product?.description} 
                      color={'gray.500'} 
                      placeholder='Enter product description...' 
                      onChange={(e) => {
                        const newProduct = { ...product, 'description': e?.target?.value};
                        setProduct(newProduct);
                      }}
                    />
                  </Flex> 
                </GridItem>
        </Grid>
      </Flex>
    </>
  )
};

export default NewEditProduct;
