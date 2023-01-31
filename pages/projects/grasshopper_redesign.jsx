import Image from 'next/image'
import Container from '../../components/Container'
import { useRouter } from 'next/router'
import Data from '../../data/data.json'

export default function Page() {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Container
            title="Grasshopper Redesign"
            canonical="https://iqoror.com/projects/grasshopper_redesign"
            description="Personal Portfolio of Homayoun Barooji"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F4840%2F1*_eltQNfCM1xfi3MXK2rMJg.png&f=1&nofb=1&ipt=22209d08cb442adb015524f81b5f61e580ca9afcfa58cc21b568b48cddf5d7e3&ipo=images"
        >
            <div className="mt-8 p-12 rounded-lg bg-neutral-100 dark:bg-neutral-900">
                <h2 className="text-2xl my-4">
                    {locale == 'fa'
                        ? 'بازطراحی رابط کاربری نرم افزار گرسهاپر'
                        : 'Redesigning Rhino Grasshopper UI'}
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300">
                    {locale == 'fa'
                        ? 'Rhino Grasshopper یک نرم افزار قدرتمند مدل سازی سه بعدی است که بیش از یک دهه است که به طور گسترده در صنایع معماری، مهندسی و طراحی استفاده می شود. با این حال، علیرغم محبوبیت و قابلیت هایش، رابط کاربری (UI) Rhino Grasshopper سالهاست که به روز نشده و ظاهری کهنه و به هم ریخته به آن بخشیده است.'
                        : 'Rhino Grasshopper is a powerful 3D modeling software that has been widely used in the architecture, engineering, and design industries for over a decade. However, despite its popularity and capabilities, the user interface (UI) of Rhino Grasshopper has not been updated for many years, leaving it with a dated and cluttered look.'}
                </p>
                <Image
                    alt="Blog Post Cover"
                    src="https://i.imgur.com/FWdfcmV.png"
                    className="rounded-md my-8"
                    style={{
                        objectFit: 'cover',
                    }}
                    height="300"
                    width="1000"
                />
                <p className="my-4 text-neutral-700 dark:text-neutral-300">
                    {locale == 'fa'
                        ? 'من تلاش کرده ام که رابط کاربری نرم افزار را دوباره طراحی کنم و آن را با اصول و گرایش های طراحی مدرن به روز کنم. طرح جدید دارای طرح رنگی واضح تر، با لهجه های نئونی است که ظاهری تازه و مدرن را ارائه می دهد. طراحی کلی نیز برای چشم ها راحت تر است و کار با نرم افزار را برای مدت طولانی برای کاربران راحت تر می کند. یکی از تغییرات عمده در طراحی جدید استفاده از رویکرد حداقلی است. رابط کاربری اکنون ظاهری تمیزتر و کارآمدتر دارد، با شلوغی کمتر و تمرکز بیشتر روی مهمترین عناصر. این کار باعث می شود تا کاربران راحت تر ابزارها و ویژگی های مورد نیاز خود را بدون غرق شدن در اطلاعات غیر ضروری پیدا کنند. تغییر مهم دیگر استفاده از آیکون های بصری تر و سازگارتر است. این امر شناسایی و درک سریع ابزارها و عملکردهای مختلف در نرم افزار را برای کاربران آسان تر می کند.'
                        : "I have made an effort to make a redesign of the software's UI, bringing it up to date with modern design principles and trends. The new design features a sharper color scheme, with neon accents that provide a fresh and modern look. The overall design is also easier on the eyes, making it more comfortable for users to work with the software for long periods of time. One of the major changes in the new design is the use of a more minimalistic approach. The UI now has a cleaner and more streamlined look, with less clutter and more focus on the most important elements. This makes it easier for users to find the tools and features they need without getting overwhelmed by unnecessary information. Another important change is the use of more intuitive and consistent icons. This makes it easier for users to quickly identify and understand the different tools and functions within the software."}
                </p>
                <Image
                    alt="Blog Post Cover"
                    src="https://i.imgur.com/2LoQw9M.png"
                    className="rounded-md my-8"
                    style={{
                        objectFit: 'cover',
                    }}
                    height="300"
                    width="1000"
                />
                <p className="my-4 text-neutral-700 dark:text-neutral-300">
                    {locale == 'fa'
                        ? 'همچنین آیکون ها ظاهری مدرن و بازیگوش دارند و نرم افزار را از نظر بصری جذاب تر می کنند. طراحی رابط کاربری جدید همچنین شامل یک چیدمان بهبود یافته برای پنل ها و کادرهای گفتگوی مختلف است. طرح‌بندی جدید منطقی‌تر و آسان‌تر برای پیمایش است و کاربران می‌توانند ویژگی‌های مورد نیاز خود را پیدا کنند و از آن‌ها استفاده کنند. به طور کلی، طراحی رابط کاربری جدید برای Rhino Grasshopper یک گام مهم رو به جلو برای نرم افزار است. با طراحی مدرن و از نظر بصری جذاب، نرم افزار را برای کاربران جدید و باتجربه در دسترس و کاربرپسندتر می کند. طراحی جدید همچنین تمرکز کاربران را بر جنبه‌های خلاقانه کارشان آسان‌تر می‌کند، نه اینکه توسط یک رابط کاربری نامرتب و قدیمی درگیر شوند.'
                        : 'The icons also have a more modern and playful look, making the software more visually appealing. The new UI design also includes an improved layout for the various panels and dialog boxes. The new layout is more logical and easy to navigate, making it faster and more efficient for users to find and use the features they need. Overall, the new UI design for Rhino Grasshopper represents a significant step forward for the software. With its modern and visually appealing design, it will make the software more accessible and user-friendly for both new and experienced users. The new design will also make it easier for users to focus on the creative aspects of their work, rather than getting bogged down by a cluttered and outdated UI.'}
                </p>

                <iframe
                    className="w-full my-10"
                    width="800"
                    height="600"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FoRUMV6jKOcjsDMiHlCdccu%2FGrasshopper-Redesign%3Fnode-id%3D2%253A5%26starting-point-node-id%3D2%253A5%26scaling%3Dscale-down"
                    allowfullscreen
                />
            </div>
        </Container>
    )
}
