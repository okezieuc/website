import Link from 'next/link'

const WideLink = ({ text, slug }) => <Link href={slug}>
    <a>
        <div className="border p-1 md:p-2 text-center rounded-md border-gray-200 w-32">
            {text}
        </div>
    </a>
</Link>

const SlimLink = ({ text, slug }) => <Link href={slug}>
    <a>
        <div className="border p-1 md:p-2 text-center rounded-md border-gray-200 w-24">
            {text}
        </div>
    </a>
</Link>

export default function ListPagination({ prefix, current, total, ...props }) {
    return (<div className="flex flex-row gap-2 md:gap-4 max-w-min text-sm md:text-md mt-12 mb-24 mx-auto">
        {
            current != 1 ? <>
                <WideLink text="First" slug={`${prefix}1`} />
                <SlimLink valid={(current - 1) > 0} slug={`${prefix}${current - 1}`} text="Previous" />
            </>
                : ""
        }
        {
            current < total ? <SlimLink valid={current < total} slug={`${prefix}${current + 1}`} text="Next" /> : ""
        }

    </div>)
}

ListPagination.defaultProps = {
    prefix: "/pastquestions/subject/phy/",
    current: 2,
    total: 4,
}