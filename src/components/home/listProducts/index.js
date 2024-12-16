import { Container } from "../../../styles/global";
import { StyledSectionProducts, StyledListProducts } from "./styles";
import { CardProduct } from "../../cardProduct";
import { motion } from "framer-motion"

export function ListProducts({ data }) {
    // Função para ordenar os dados pelo uid
    const sortedData = data.sort((a, b) => a.uid - b.uid);

    return (
        <StyledSectionProducts>
            <Container>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.7 }}
                >
                    <StyledListProducts>
                        {sortedData.map((product) => (
                            <div className="product-card" key={product.uid}>
                                <CardProduct
                                    slug={product.data.slug}
                                    image={product.data.imagem_galeria_1.url}
                                    name={product.data.nome_do_produto}
                                />
                            </div>
                        ))}
                    </StyledListProducts>
                    </motion.div>
            </Container>
        </StyledSectionProducts>
    );
}
