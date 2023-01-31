import Image from 'next/image'
import Container from '../../components/Container'
import Code from '../../components/Code'
import Github from '../../components/Github'
import { useRouter } from 'next/router'
import Data from '../../data/data.json'

export default function Page() {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Container
            title="Andia"
            canonical="https://iqoror.com/projects/andia"
            description="Personal Portfolio of Homayoun Barooji"
            image="https://i.imgur.com/rqUGy7D.jpg"
        >
            <div className="mt-8 p-12 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                <Image
                    src="https://i.imgur.com/rqUGy7D.jpg"
                    className="rounded-md"
                    style={{ maxHeight: 400, objectFit: 'cover' }}
                    alt="Blog Post Cover"
                    width="1080"
                    height="100"
                />
                <h2 className="text-2xl my-8">
                    {locale == 'fa'
                        ? 'معرفی بات دیسکورد'
                        : 'Introduction to Discord Bots'}
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                    {locale == 'fa'
                        ? 'معرفی Angra - کتابخانه Javascript NPM که فرآیند نوشتن و ارسال ایمیل های تراکنشی را ساده می کند. با Angra، توسعه دهندگان می توانند به راحتی ایمیل هایی مانند تأیید ثبت نام، کدهای تأیید و تأیید سفارش را بدون نیاز به نوشتن کد اضافی ارسال کنند. این کتابخانه برای نصب از طریق npm یا yarn در دسترس است و پس از نصب، کاربران به سادگی باید اعتبار SMTP خود را برای کتابخانه ارائه کنند تا بقیه موارد را به عهده بگیرد. این بدان معنی است که توسعه دهندگان دیگر نیازی به صرف زمان برای نوشتن و آزمایش کد ارسال ایمیل ندارند و در عوض می توانند روی ساختن عملکرد اصلی برنامه خود تمرکز کنند. یکی از ویژگی های کلیدی آنگرا سهولت استفاده از آن است. تنها با چند خط کد، توسعه دهندگان می توانند یک ایمیل با یک قالب و متغیرهای سفارشی ارسال کنند.'
                        : 'Introducing Angra - the Javascript NPM library that simplifies the process of composing and sending transactional emails. With Angra, developers can easily send emails such as registration confirmations, verification codes, and order confirmations without having to write any additional code. The library is available for installation via npm or yarn, and once installed, users simply need to provide their SMTP credentials for the library to take care of the rest. This means that developers no longer have to spend time writing and testing email-sending code, and can instead focus on building the core functionality of their application. One of the key features of Angra is its ease of use. With just a few lines of code, developers can send an email with a custom template and variables.'}
                </p>
                <p className="my-4 text-neutral-700 dark:text-neutral-300">
                    {locale == 'fa'
                        ? 'موارد استفاده نوآورانه برای ربات های Discord به طور مداوم در حال توسعه است و امکانات بی پایان است. برخی از مثال‌ها عبارتند از: ربات‌های زبانی که می‌توانند متن را از یک زبان به زبان دیگر ترجمه کنند. دستیارهای مجازی که می توانند به کاربران در برنامه ریزی قرارها، تنظیم یادآورها و موارد دیگر کمک کنند. ربات‌هایی که می‌توانند به کاربران در زمینه سلامت روان و مراقبت از خود، مانند ارائه تمرین‌های مدیتیشن یا اعلان‌های مجله کمک کنند. ربات هایی که می توانند با ارائه تمرین ها و فلش کارت ها به کاربران در یادگیری زبان های جدید کمک کنند. ربات هایی که می توانند با ارائه ابزارهای بودجه بندی و مشاوره سرمایه گذاری به کاربران در امور مالی خود کمک کنند. در خاتمه، ربات‌های Discord ابزارهای قدرتمندی هستند که می‌توانند تجربه کاربر را در پلتفرم به روش‌های مختلف افزایش دهند، از پخش موسیقی و بازی گرفته تا ارائه اطلاعات و ابزارهای مفید. همانطور که توسعه دهندگان به ایجاد ربات های جدید و خلاقانه ادامه می دهند، امکانات برای نحوه استفاده از آنها بی پایان است. فرقی نمی‌کند مدیر سرور، گیمر یا فقط کسی باشید که به دنبال راهی برای بهبود تجربه Discord خود هستید، احتمالاً یک ربات در آنجا وجود دارد که می‌تواند به شما کمک کند.'
                        : "Innovative use cases for Discord bots are constantly being developed, and the possibilities are endless. Some examples include: Language bots that can translate text from one language to another. Virtual assistants that can help users schedule appointments, set reminders, and more. Bots that can help users with mental health and self-care, such as providing meditation exercises or journal prompts. Bots that can help users learn new languages, by providing practice exercises and flashcards. Bots that can help users with their finances, by providing budgeting tools and investment advice. In conclusion, Discord bots are powerful tools that can enhance the user experience on the platform in many ways, from playing music and games to providing useful information and tools. As developers continue to create new and innovative bots, the possibilities for how they can be used are endless. Whether you're a server administrator, a gamer, or just someone looking for a way to enhance your Discord experience, there's likely a bot out there that can help."}
                </p>
                <Github
                    href="https://github.com/iqoror/andia"
                    title="github.com / iqoror / andia"
                    description="Discord v14 bot with parallel Express.js Server, built with
                    Typescript and Prisma"
                />
                <h2 className="text-2xl my-4">
                    {locale == 'fa'
                        ? 'چگونگی ساخت با دیسکورد 14'
                        : 'Setting up a Discord V14 Typescript Bot'}
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                    {locale == 'fa'
                        ? 'راه اندازی یک ربات TypeScript Discord شامل چندین مرحله است: ابتدا، باید یک ربات Discord جدید ایجاد کنید. می توانید این کار را با مراجعه به پورتال توسعه دهنده Discord و ایجاد یک برنامه جدید انجام دهید. پس از ایجاد برنامه، به بخش "ربات" بروید و یک ربات جدید ایجاد کنید. سپس یک توکن به شما ارائه می شود که از آن برای احراز هویت ربات خود با Discord API استفاده می کنید. در مرحله بعد، باید Node.js و npm (Node Package Manager) را روی رایانه خود نصب کنید. این ها را می توان از وب سایت رسمی Node.js دانلود کرد. پس از نصب Node.js و npm، می توانید یک دایرکتوری جدید برای ربات خود ایجاد کرده و در ترمینال خود به آن بروید. دستور npm init را اجرا کنید تا یک پروژه npm جدید را مقداردهی کنید و برای تنظیم فایل package.json از دستورات پیروی کنید. اکنون باید بسته های لازم را برای ربات خود نصب کنید. اینها شامل کتابخانه Discord.js است که به شما امکان تعامل با Discord API و کامپایلر TypeScript را می دهد. با اجرای دستورات زیر در ترمینال خود می توانید این بسته ها را نصب کنید:'
                        : 'Setting up a TypeScript Discord bot involves several steps: First, you will need to create a new Discord bot. You can do this by visiting the Discord Developer Portal and creating a new application. Once your application is created, navigate to the "Bot" section and create a new bot. You will then be presented with a token, which you will use to authenticate your bot with the Discord API. Next, you will need to install Node.js and npm (Node Package Manager) on your computer. These can be downloaded from the official Node.js website. After Node.js and npm are installed, you can create a new directory for your bot and navigate to it in your terminal. Run the command npm initto initialize a new npm project, and follow the prompts to set up your package.json file. Now, you will need to install the necessary packages for your bot. These include the Discord.js library, which allows you to interact with the Discord API, and the TypeScript compiler. You can install these packages by running the following commands in your terminal:'}
                    <Code>npm install --save discord.js</Code>
                    <Code>npm install --save-dev typescript</Code>
                    {locale == 'fa'
                        ? 'پس از نصب بسته ها، باید فایل پیکربندی TypeScript خود را تنظیم کنید. این فایل، calltsconfig.json، به کامپایلر TypeScript می گوید که چگونه پروژه شما را بسازد. شما می توانید این فایل را با اجرای دستور tsc --init در ترمینال خود ایجاد کنید. در فایل tsconfig.json خود باید "target" را روی "es6" و "module" را روی "commonjs" تنظیم کنید. این اطمینان حاصل می کند که کد شما به نسخه صحیح جاوا اسکریپت برای Node.js منتقل می شود. اکنون می توانید یک فایل جدید به نام "index.ts" در فهرست پروژه خود ایجاد کنید. این فایل اصلی ربات شما خواهد بود. در این فایل، شما باید ماژول های لازم را از کتابخانه Discord.js و همچنین هر ماژول دیگری که ممکن است برای ربات خود نیاز داشته باشید، وارد کنید. برای احراز هویت ربات خود با Discord API، باید از توکنی که در مرحله 1 از پورتال توسعه دهنده Discord به دست آورده اید استفاده کنید. می توانید این کار را با ارسال توکن به متد theclient.login() انجام دهید، مانند:'
                        : 'Once the packages are installed, you will need to set up your TypeScript configuration file. This file, calledtsconfig.json, tells the TypeScript compiler how to build your project. You can create this file by running the command tsc --init in your terminal. In your tsconfig.json file, you will need to set the "target" to "es6" and the "module" to "commonjs". This will ensure that your code is transpiled to the correct version of JavaScript for Node.js. Now, you can create a new file called "index.ts" in your project directory. This will be the main file for your bot. In this file, you will need to import the necessary modules from the Discord.js library, as well as any other modules you may need for your bot. To authenticate your bot with the Discord API, you will need to use the token you obtained from the Discord Developer Portal in step 1. You can do this by passing the token to theclient.login() method, like so:'}
                    <Code>client.login("YOUR_TOKEN_HERE")</Code>
                    {locale == 'fa'
                        ? 'در مرحله بعد، می توانید کنترل کننده های رویداد را برای ربات خود تنظیم کنید. هنگامی که رویدادهای خاصی رخ می دهند، مانند زمانی که کاربر پیامی ارسال می کند یا زمانی که کاربر به یک کانال صوتی می پیوندد، این کنترل کننده های رویداد فراخوانی می شوند. در نهایت، می توانید منطق ربات خود را در کنترل کننده رویداد بنویسید. این می تواند شامل دستوراتی باشد که کاربران می توانند اجرا کنند و همچنین هر عملکرد دیگری که می خواهید ربات شما داشته باشد. برای راه اندازی ربات، tsc و سپس node dist/index.js را در ترمینال اجرا کنید، این کد تایپ اسکریپ شما را به جاوا اسکریپت تبدیل می کند و با node.js اجرا می کند. در سرور توجه داشته باشید که این فقط یک آموزش ابتدایی است و کارهای بسیار بیشتری وجود دارد که می توانید با ربات Discord نوشته شده در TypeScript انجام دهید، مانند استفاده از یک چارچوب یا استفاده از دکوراتورها برای مدیریت بهتر رویدادها و دستورات.'
                        : 'Next, you can set up event handlers for your bot. These event handlers will be called when certain events occur, such as when a user sends a message or when a user joins a voice channel. Finally, you can write the logic for your bot in the event handlers. This can include commands that users can run, as well as any other functionality you want your bot to have. To start the bot, run tsc and then node dist/index.js in the terminal, this will transpile your typescript code to javascript and execute it with node.js You can test your bot by inviting it to a Discord server and interacting with it in the server. Note that this is just a basic tutorial and there are many more things you can do with a Discord bot written in TypeScript, like using a framework or using decorators for better handling events and commands.'}
                </p>
            </div>
        </Container>
    )
}
