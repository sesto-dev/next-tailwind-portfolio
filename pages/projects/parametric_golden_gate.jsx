import Image from 'next/image'
import Container from '../../components/Container'

export default function Page() {
    return (
        <Container
            title="Parametric Golden-Gate Bridge"
            canonical="https://iqoror.com/projects/parametric_golden_gate"
            description="Personal Portfolio of Homayoun Barooji"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F4840%2F1*_eltQNfCM1xfi3MXK2rMJg.png&f=1&nofb=1&ipt=22209d08cb442adb015524f81b5f61e580ca9afcfa58cc21b568b48cddf5d7e3&ipo=images"
        >
            <div className="mt-8 p-12 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                <h2 className="text-2xl mb-6">Introduction to Grasshopper</h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                    Grasshopper is a graphical algorithm editor tightly
                    integrated with Rhino’s 3-D modeling tools. The program was
                    created by David Rutten at Robert McNeel & Associates.
                    Programs are created by dragging components onto a canvas.
                    The outputs to these components are then connected to the
                    inputs of subsequent components, allowing designers to build
                    form generators from the simple to the awe-inspiring.
                </p>

                <Image
                    alt="Blog Post Cover"
                    src="https://i.imgur.com/FWdfcmV.png"
                    className="rounded-md my-4"
                    style={{
                        objectFit: 'cover',
                    }}
                    height="300"
                    width="1000"
                />
                <Image
                    alt="Blog Post Cover"
                    src="https://i.imgur.com/2LoQw9M.png"
                    className="rounded-md my-4"
                    style={{
                        objectFit: 'cover',
                    }}
                    height="300"
                    width="1000"
                />
            </div>
        </Container>
    )
}
