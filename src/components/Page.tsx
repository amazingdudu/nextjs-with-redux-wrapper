import Link from 'next/link';

import Clock from './Clock';
import AddCount from './AddCount';

interface Props {
    title?: React.ReactNode;
    linkTo: string;
    tick: {
        lastUpdate: number;
        light: boolean;
    };
}

const Page = ({ title, linkTo, tick }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
            <AddCount />
            <nav>
                <Link href={linkTo}>
                    <a>Navigate</a>
                </Link>
            </nav>
        </div>
    );
};

export default Page;
