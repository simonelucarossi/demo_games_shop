import React from "react";
import {
  Flex,
  Text,
  Button,
  MenuButton,
  Menu,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { AiOutlineTag } from 'react-icons/ai';
import { categoriesName } from "../../../../utils/categoriesMapping";

const ProductCategoryTags = ({product, setProduct, ...props}) => {
  let defaultTags = [
    {
      name: 'Upcoming',
      value: 'Upcoming',
      checked: product?.tags ? product?.tags?.includes('Upcoming') : false,
    },
    {
      name: 'Raccomended',
      value: 'Raccomended',
      checked: product?.tags ? product?.tags?.includes('Raccomended') : false,
    },
    {
      name: 'Top 10',
      value: 'Top 10',
      checked: product?.tags ? product?.tags?.includes('Top 10') : false,
    }
  ];

  return (
    <Flex direction={'row'} {...props}>
      {/* PRODUCT TAGS */}
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} w={'fit-content'} h={45} bg={'gray.300'} color='white'>
          <Flex>
            <AiOutlineTag/>
            <Text fontSize={12} marginLeft={'4px'}>Tags</Text>
          </Flex>
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup color={'black'} title='Tags' type='checkbox'>
            {
              defaultTags?.map((tag) => {
                return (
                  <MenuItemOption 
                    onClick={ () => { 
                      tag['checked'] = !tag['checked']; 
                      const tagsOfTheProduct = defaultTags.filter((e) => e.checked)?.map((tag) => {
                        return tag?.name
                      })
                      setProduct({...product, tags: tagsOfTheProduct }) 
                    }}
                    isChecked={ tag?.checked}
                    color={'black'} 
                    value={tag?.value}
                  >
                    {tag?.name}
                  </MenuItemOption>
                )
              })
            }
          </MenuOptionGroup>
        </MenuList>
      </Menu>

      {/* PRODUCT CATEGORY */}
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} ml={3} w={'fit-content'} h={45} bg={'gray.300'} color='white'>
          <Text fontSize={12} marginLeft={'4px'}>{categoriesName[product?.category] ?? categoriesName[0]}</Text>
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup 
            value={product?.category ?? 0} 
            color={'black'} 
            title='Category' 
            type='radio'
          >
            {
              categoriesName?.map((category, index) => {
                return (
                  <MenuItemOption 
                    color={'black'} 
                    value={index}
                    onClick={() => {
                      const newObject = { ...product, category: index}
                      setProduct(newObject);
                    }} 
                  >
                    {category}
                  </MenuItemOption>
                )
              })
            }
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default ProductCategoryTags;