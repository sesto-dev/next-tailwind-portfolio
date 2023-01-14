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
            <div className="mt-8 p-12 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F4840%2F1*_eltQNfCM1xfi3MXK2rMJg.png&f=1&nofb=1&ipt=22209d08cb442adb015524f81b5f61e580ca9afcfa58cc21b568b48cddf5d7e3&ipo=images"
                    className="mb-8 rounded-md"
                    alt="Blog Post Cover"
                    style={{ maxHeight: 400, objectFit: 'cover' }}
                    width="1080"
                    height="100"
                />
                <h2 className="text-2xl mb-6">Introduction to Tornado Cash</h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                    Tornado Cash is a decentralized and non-custodial smart
                    contract-based mixer built on the Ethereum blockchain. It
                    utilizes zero-knowledge proofs to enable users to mix their
                    Ethereum and ERC-20 tokens in a completely private and
                    anonymous manner. In this blog post, we will explore the
                    concept of zero-knowledge proofs, the history of privacy on
                    the blockchain, and how Tornado Cash works, as well as
                    controversy around it.
                </p>
                <h2 className="text-2xl my-4">
                    Introduction to Zero Knowledge Proofs
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                    Zero-knowledge proofs, also known as zk-SNARKs
                    (zero-knowledge succinct non-interactive arguments of
                    knowledge), is a technology that allows one party (the
                    prover) to prove to another party (the verifier) that a
                    statement is true, without revealing any additional
                    information. In other words, it enables one party to prove
                    possession of a certain information, without revealing the
                    information itself. Zero-knowledge proofs were first
                    introduced in the 1980s by researchers Shafi Goldwasser,
                    Silvio Micali, and Charles Rackoff, but it wasn't until the
                    emergence of blockchain technology and the need for privacy
                    on the blockchain that it gained significant attention.
                    Tornado Cash makes use of zero-knowledge proofs to enable
                    users to mix their Ethereum and ERC-20 tokens in a
                    completely private and anonymous manner. The process works
                    by allowing users to deposit their tokens into the Tornado
                    Cash smart contract, and in return, they receive a unique
                    "note" that is a proof of ownership of the deposited tokens.
                    These notes can then be traded or exchanged for other
                    tokens, without revealing the identity of the original
                    owner. The Tornado Cash smart contract is completely
                    open-source and decentralized, which means that it is not
                    controlled by any single entity and is available for anyone
                    to use. This also means that it is not subject to censorship
                    or shutdown by any government or organization. Despite its
                    many benefits, Tornado Cash has also been the subject of
                    controversy. Critics argue that it may be used for illegal
                    activities such as money laundering or funding terrorism.
                    Furthermore, the smart contract is not regulated and anyone
                    can use it anonymously, which could lead to illegal
                    activities. Additionally, the lack of KYC (Know Your
                    Customer) and AML (Anti-Money Laundering) regulations, can
                    make it an attractive option for those looking to avoid
                    detection by the authorities. In conclusion, Tornado Cash is
                    a decentralized and non-custodial smart contract-based mixer
                    built on the Ethereum blockchain that utilizes
                    zero-knowledge proofs to enable users to mix their Ethereum
                    and ERC-20 tokens in a completely private and anonymous
                    manner. The technology of zero-knowledge proof is an
                    important advancement in the field of blockchain and
                    cryptography, which has the potential to revolutionize the
                    way we think about privacy and security. However, it also
                    raises important legal and ethical questions and it is
                    important to be aware of its potential for misuse.
                </p>
            </div>
        </Container>
    )
}
