function ItemDetail({ item }) {
    return 
    <>
        <Title>{item.title}</Title>
        <Image>{item.image}</Image>
        <Description>{item.description}</Description>
        <Price>{item.price}</Price>
    </>;
}