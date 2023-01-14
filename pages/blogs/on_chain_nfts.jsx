import Image from 'next/image'
import Container from '../../components/Container'

export default function Page() {
    return (
        <Container
            title="Accretence"
            canonical="https://accretence.com"
            description="Personal Portfolio of Amirhossein Mohammadi"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F4840%2F1*_eltQNfCM1xfi3MXK2rMJg.png&f=1&nofb=1&ipt=22209d08cb442adb015524f81b5f61e580ca9afcfa58cc21b568b48cddf5d7e3&ipo=images"
        >
            <div className="mt-8 p-12 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">
                <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F041%2F316%2F8675309.jpg&f=1&nofb=1&ipt=d8dbe6753bece8cfb84fc589842d97a45d67fa4a3acabd38d3a820a714692671&ipo=images"
                    alt="Blog Post Cover"
                    className="mb-8 rounded-md"
                    style={{ maxHeight: 400, objectFit: 'cover' }}
                    width="1080"
                    height="100"
                />
                <h2 className="text-2xl my-4"> On-chain Non-Fungible Tokens</h2>
                <p>
                    also known as "on-chain NFTs" or simply "NFTs," are a new
                    type of digital asset that is quickly gaining popularity in
                    the world of cryptocurrency and blockchain technology. NFTs
                    are unique digital assets that are stored on a blockchain,
                    making them different from regular NFTs, which are typically
                    stored on a centralized server. In this blog post, we will
                    explore the differences between on-chain NFTs and regular
                    NFTs, why they are important, and how to create one.
                </p>
                <h2 className="text-2xl my-4">What's the difference?</h2>

                <p>
                    The biggest difference between on-chain NFTs and regular
                    NFTs is the way they are stored. Regular NFTs are stored on
                    a centralized server, which means that they are controlled
                    by a single entity. On the other hand, on-chain NFTs are
                    stored on a decentralized blockchain, which means that they
                    are controlled by a network of computers rather than a
                    single entity. This gives on-chain NFTs several advantages
                    over regular NFTs, including increased security,
                    transparency, and immutability. Another key difference
                    between on-chain NFTs and regular NFTs is the way they are
                    created. Regular NFTs can be created by anyone with access
                    to the server where they are stored. On the other hand,
                    on-chain NFTs are created using smart contracts, which are
                    self-executing contracts that are stored on the blockchain.
                    This means that on-chain NFTs are created in a transparent
                    and decentralized way, which helps to ensure their
                    authenticity and uniqueness. One of the most important
                    benefits of on-chain NFTs is that they are truly unique and
                    cannot be replicated. This is because they are stored on a
                    blockchain, which is an immutable and transparent ledger.
                    This means that once an NFT is created, its ownership and
                    provenance cannot be altered, and this information is easily
                    verifiable by anyone on the network. On-chain NFTs also have
                    the potential to revolutionize the way we think about
                    digital ownership. For example, an artist could create an
                    NFT of a digital painting, and then sell it to a collector.
                    The collector would then own the digital painting and have
                    the ability to resell it or even display it in a virtual
                    museum. This is a significant shift from the current model
                    where digital assets are easily replicated and lack true
                    ownership.
                </p>
                <Image
                    src="https://i.redd.it/39t72w1i8wn61.jpg"
                    className="my-10 rounded-md"
                    alt="Blog Post Cover"
                    style={{ maxHeight: 400, objectFit: 'cover' }}
                    width="1080"
                    height="100"
                />
                <h2 className="text-2xl my-4">How to create one?</h2>

                <p>
                    Creating an on-chain NFT is a relatively simple process, but
                    it does require some technical knowledge. The first step is
                    to choose a blockchain that supports the creation of NFTs,
                    such as Ethereum or Flow. Once you have chosen a blockchain,
                    you will need to create a smart contract that defines the
                    NFT's properties, such as its name, symbol, and total
                    supply. After you have created the smart contract, you will
                    need to deploy it to the blockchain using a tool like
                    Truffle or Remix. Once the contract is deployed, you can use
                    it to mint new NFTs and assign them to specific addresses.
                    In conclusion, on-chain NFTs are a new type of digital asset
                    that is stored on a blockchain and created using smart
                    contracts. They are unique and cannot be replicated, making
                    them a revolutionary way to think about digital ownership.
                    With their potential to revolutionize the way we think about
                    digital ownership and their increasing popularity, it's
                    important to understand how they work and how to create one.
                    As we move into the future, we are likely to see more and
                    more use cases for on-chain NFTs, from virtual real estate
                    and digital art to collectibles and gaming items. These
                    digital assets are changing the way we think about digital
                    ownership and creating new opportunities for creators,
                    collectors, and enthusiasts. One of the most significant
                    advantages of on-chain NFTs is the ability to create
                    scarcity and value for digital assets. For example, an
                    artist can create a limited edition of NFTs for their
                    digital artwork, making them more valuable and exclusive.
                    This can help to increase the value of digital art and
                    create new revenue streams for artists. Another advantage of
                    on-chain NFTs is the ability to create and monetize unique
                    digital experiences. This can include virtual reality,
                    augmented reality, and other immersive technologies. For
                    example, an NFT could represent an exclusive virtual concert
                    experience, giving fans access to an unforgettable digital
                    experience that they can own and share. On-chain NFTs are
                    also being used to create new gaming experiences. For
                    example, players can own and trade unique digital assets
                    such as weapons, armor, and other in-game items. This can
                    create new revenue streams for game developers and increase
                    player engagement. In conclusion, on-chain NFTs are a
                    powerful new technology that is changing the way we think
                    about digital ownership and creating new opportunities for
                    creators, collectors, and enthusiasts. They offer several
                    advantages over regular NFTs, including increased security,
                    transparency, and immutability. With their ability to create
                    scarcity and value for digital assets, on-chain NFTs are
                    opening up new possibilities for monetizing unique digital
                    experiences and creating new revenue streams for creators.
                    As the technology continues to evolve and more use cases are
                    discovered, we can expect to see even more innovation in the
                    world of on-chain NFTs.
                </p>
            </div>
        </Container>
    )
}
