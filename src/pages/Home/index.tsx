import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

import CartButton from "../../components/Cart";
import { coffees } from "../../service/coffees";
import InfoItem from "./InfoItem";
import {
  CoffeeCard,
  CoffeeCardFooter,
  CoffeeCardPrice,
  CoffeeCardTags,
  CoffeeList,
  CoffeeListGrid,
  Heading,
  Hero,
  HeroContent,
  Info,
} from "./styles";
import QuantityInput from "../../components/QuantityInput";
import { useState } from "react";

interface CoffeeProps {
  id: string;
  name: string;
  price: number;
  description: string;
  tags: string[];
  // quantity: number;
  img: string;
}

const Home = () => {
  const theme = useTheme();
  const [cartItems, setCartItems] = useState<CoffeeProps[]>([]);

  const handleAddToCart = (coffee: CoffeeProps, quantity: number) => {
    // quantity deve ser passada para o cart como uma nova propriedade
    setCartItems((prev) => [...prev, { ...coffee, quantity: 1 }]);
  };

  console.log(cartItems);

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <InfoItem
                icon={ShoppingCart}
                text="Compra simples e segura"
                backgroundColor={theme.colors.yellowDark}
              />

              <InfoItem
                icon={Package}
                text="Embalagem mantém o café intacto"
                backgroundColor={theme.colors.baseText}
              />

              <InfoItem
                icon={Timer}
                text="Entrega rápida e rastreada"
                backgroundColor={theme.colors.yellow}
              />

              <InfoItem
                icon={Coffee}
                text="O café chega fresquinho até você"
                backgroundColor={theme.colors.purple}
              />
            </Info>
          </div>

          <img
            src="./src/assets/hero-coffee.svg"
            alt="Café do Coffee Delivery"
          />
        </HeroContent>
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <CoffeeListGrid>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id}>
              <img src={coffee.img} alt={coffee.name} />

              <CoffeeCardTags>
                {coffee.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </CoffeeCardTags>

              <h4>{coffee.name}</h4>

              <p id="description">{coffee.description}</p>

              <CoffeeCardFooter>
                <CoffeeCardPrice>
                  <span>R$</span>
                  <p>{coffee.price.toFixed(2)}</p>
                </CoffeeCardPrice>

                <div>
                  <QuantityInput />

                  <CartButton
                    onClick={() => handleAddToCart(coffee)}
                    color={theme.colors.white}
                    backgroundColor={theme.colors.purpleDark}
                  />
                </div>
              </CoffeeCardFooter>
            </CoffeeCard>
          ))}
        </CoffeeListGrid>
      </CoffeeList>
    </div>
  );
};

export default Home;
