import Button from "../components/button";
import BasicExample from "../components/coreNavbar";

export default function Home() {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #1f1c2c, #928DAB)',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
        },
        heading: {
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textShadow: '0 0 10px #00ffc3',
        },
        subheading: {
            fontSize: '20px',
            marginBottom: '30px',
        },
        buttonWrapper: {
            marginTop: '20px',
        }
    };

    return (
        <>
            <BasicExample />
            <div style={styles.container}>
                <h1 style={styles.heading}>Vítej na webu o kočkách 🐾</h1>
                <p style={styles.subheading}>
                    Objevuj zajímavosti o kočičkách a koukni na roztomilé obrázky.
                </p>
                <div style={styles.buttonWrapper}>
                    <Button name="Podívej se na fakta o kočkách" />
                </div>
            </div>
        </>
    );
}
