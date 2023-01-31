import Image from 'next/image'
import Container from '../../components/Container'
import Code from '../../components/Code'
import Github from '../../components/Github'
import InlineCode from '../../components/InlineCode'
import { useRouter } from 'next/router'
import Data from '../../data/data.json'

export default function Page() {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Container
            title="Angra"
            canonical="https://iqoror.com/projects/angra"
            description="Personal Portfolio of Homayoun Barooji"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F4840%2F1*_eltQNfCM1xfi3MXK2rMJg.png&f=1&nofb=1&ipt=22209d08cb442adb015524f81b5f61e580ca9afcfa58cc21b568b48cddf5d7e3&ipo=images"
        >
            <div className="mt-8 p-12 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                <Image
                    src="https://cdn.dribbble.com/users/182336/screenshots/17411058/media/7e83030186c76a1b04b0c1e50800ebfb.png"
                    className="rounded-md"
                    style={{ maxHeight: 400, objectFit: 'cover' }}
                    alt="Blog Post Cover"
                    width="1080"
                    height="100"
                />
                <h2 className="text-2xl my-8">Introduction to Discord Bots</h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                    Introducing Angra - the Javascript NPM library that
                    simplifies the process of composing and sending
                    transactional emails. With Angra, developers can easily send
                    emails such as registration confirmations, verification
                    codes, and order confirmations without having to write any
                    additional code. The library is available for installation
                    via npm or yarn, and once installed, users simply need to
                    provide their SMTP credentials for the library to take care
                    of the rest. This means that developers no longer have to
                    spend time writing and testing email-sending code, and can
                    instead focus on building the core functionality of their
                    application. One of the key features of Angra is its ease of
                    use. With just a few lines of code, developers can send an
                    email with a custom template and variables.
                </p>
                <Github
                    href="https://github.com/iqoror/angra"
                    title="github.com / iqoror / angra"
                    description="Compose and send transactional email templates using Nodemailer."
                />
                <p className="text-neutral-700 dark:text-neutral-300 my-6">
                    The library also supports sending emails in bulk, which is
                    useful for sending out large numbers of emails, such as
                    order confirmations, at once. Another great feature of Angra
                    is its support for dynamic templates. This allows developers
                    to create email templates that can be easily updated and
                    reused, without having to make changes to the codebase. This
                    is particularly useful for businesses that need to send out
                    emails on a regular basis, such as for promotions or
                    updates. In addition to its ease of use and template
                    support, Angra also provides robust error handling. It will
                    automatically handle any errors that may occur during the
                    sending process, such as invalid credentials or a failure to
                    connect to the SMTP server. This ensures that emails are
                    sent successfully and that any issues are quickly identified
                    and resolved. Overall, Angra is a powerful and easy-to-use
                    Javascript NPM library that simplifies the process of
                    composing and sending transactional emails. Whether you're a
                    developer working on a small personal project or a business
                    looking to streamline your email sending process, Angra is
                    an excellent choice.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 my-6">
                    With its easy installation, simple usage, and robust
                    features, Angra is a must-have for any developer looking to
                    send transactional emails in their JavaScript application.
                    So go ahead, give it a try and see the difference it can
                    make in your workflow. In conclusion, Angra is a Javascript
                    NPM library that simplifies the process of composing and
                    sending transactional emails. With Angra, developers can
                    easily send emails such as registration confirmations,
                    verification codes, and order confirmations without having
                    to write any additional code.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 my-6">
                    The library is available for installation via npm or yarn,
                    and once installed, users simply need to provide their SMTP
                    credentials for the library to take care of the rest, and
                    focus on the core functionality of their application.
                    <Code>yarn add angra</Code>
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 my-6">
                    Angra exposes several functions that let you send
                    transctional emails with minimum setup:
                    <Code>
                        await sendVerifyMail() <br />
                        await sendForgotPassword() <br />
                        await sendResetPassword() <br />
                        await sendSubscribe() <br />
                        await sendUnsubscribe()
                    </Code>
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 my-6">
                    You need to provide SMTP credentials obtained from your
                    Email provider in <InlineCode>.env</InlineCode>:
                    <Code>
                        MAIL_SMTP_HOST = <br />
                        MAIL_SMTP_USER = <br />
                        MAIL_SMTP_PASS = <br />
                        MAIL_SMTP_PORT = <br />
                        MAIL_SMTP_SECURE = // Boolean
                        <br />
                        MAIL_SMTP_TLS_REJECT_UNAUTHORIZED = // Boolean
                        <br />
                        MAIL_SMTP_TLS_CIPHER = <br />
                        MAIL_SMTP_SERVICE = <br />
                        MAIL_SMTP_VERBOSE = // Boolean, Nodemailer will log
                        details if true
                    </Code>
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 my-6">
                    Not all of these parameters are required. For example if
                    you're using Gmail you only need these parameters:
                    <Code>
                        MAIL_SMTP_USER = // Your Gmail Address <br />
                        MAIL_SMTP_PASS = // Google App Password <br />
                        MAIL_SMTP_SERVICE = 'Gmail'
                    </Code>
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 my-6">
                    Each of the exposed function require a certain set of
                    parameters passed into the function, For example:
                    <Code>
                        await sendVerifyMail( sender_title, recipient_address,
                        email_verification_code, verify_url, unsubscribe_url )
                    </Code>
                </p>
            </div>
        </Container>
    )
}
