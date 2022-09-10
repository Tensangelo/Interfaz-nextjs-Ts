import Header from '../navbar/Menu';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;