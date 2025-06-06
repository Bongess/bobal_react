import { useState, useEffect } from "react";

export default function About() {
    const [facts, setFacts] = useState([]);
    const [mainImage, setMainImage] = useState("");
    const [factsError, setFactsError] = useState(null);
    const [imageError, setImageError] = useState(null);

    const fetchFacts = () => {
        fetch("https://meowfacts.herokuapp.com/")
            .then((res) => res.json())
            .then((data) => {
                setFacts(data.data);
                setFactsError(null);
            })
            .catch((error) => {
                console.error("Error fetching facts:", error);
                setFactsError("Nepodařilo se načíst fakta o kočkách.");
            });
    };

    const fetchImage = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((res) => res.json())
            .then((data) => {
                setMainImage(data[0].url);
                setImageError(null);
            })
            .catch((error) => {
                console.error("Error fetching image:", error);
                setImageError("Nepodařilo se načíst obrázek kočky.");
            });
    };

    useEffect(() => {
        fetchFacts();
        fetchImage();
    }, []);

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '20px',
            background: '#121212',
            color: '#ffffff',
            minHeight: '100vh',
        },
        headerFooter: {
            background: 'linear-gradient(90deg, #00ffc3, #9d00ff)',
            color: '#000',
            padding: '15px 0',
            fontSize: '28px',
            fontWeight: 'bold',
            borderRadius: '0 0 20px 20px',
            boxShadow: '0 0 20px #9d00ff',
            textShadow: '0 0 5px #fff',
        },
        footer: {
            background: 'linear-gradient(90deg, #00ffc3, #9d00ff)',
            color: '#000',
            padding: '10px 0',
            fontSize: '16px',
            width: '100%',
            textAlign: 'center',
            borderRadius: '20px 20px 0 0',
            boxShadow: '0 0 20px #00ffc3',
            textShadow: '0 0 4px #fff',
            marginTop: '40px',
        },
        mainCatImage: {
            width: '100%',
            maxWidth: '700px',
            marginBottom: '20px',
            borderRadius: '20px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '20px',
        },
        factsContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
        },
        factBox: {
            backgroundColor: '#1e1e1e',
            border: '2px solid #00ffc3',
            padding: '10px',
            margin: '5px 0',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '500px',
            color: '#fff',
            boxShadow: '0 0 10px #00ffc3',
        },
        errorText: {
            color: '#ff4d4d',
            fontWeight: 'bold',
            backgroundColor: '#2a0000',
            padding: '10px',
            borderRadius: '10px',
            marginBottom: '20px',
            maxWidth: '600px',
            margin: '0 auto 20px',
        },
        button: {
            padding: '10px 20px',
            margin: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#000',
            background: 'linear-gradient(90deg, #00ffc3, #9d00ff)',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 0 10px #9d00ff',
            transition: 'transform 0.2s ease',
        },
        buttonContainer: {
            marginTop: '40px',
        }
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.headerFooter}>
                Kočičí fakta a obrázky
            </header>

            {/* Tlačítka */}
            <div>
                <button style={styles.button} onClick={fetchImage}>
                    🖼️ Načíst nový obrázek
                </button>
                <button style={styles.button} onClick={fetchFacts}>
                    📚 Načíst nové fakty
                </button>
            </div>

            {/* Obrázek nebo chyba */}
            {imageError ? (
                <div style={styles.errorText}>{imageError}</div>
            ) : (
                mainImage && <img src={mainImage} alt="Random Cat" style={styles.mainCatImage} />
            )}

            <p style={styles.title}>Zde jsou fakty o kočičkách:</p>

            {/* Fakta nebo chyba */}
            {factsError ? (
                <div style={styles.errorText}>{factsError}</div>
            ) : (
                <div style={styles.factsContainer}>
                    {facts.map((fact, index) => (
                        <div key={index} style={styles.factBox}>
                            <p>{fact}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Footer */}
            <footer style={styles.footer}>
                &copy; 2025 BOBY
            </footer>

            {/* Tlačítko zpět na homepage */}
            <div style={styles.buttonContainer}>
                <button
                    style={styles.button}
                    onClick={() => window.location.href = '/'}
                >
                    🏠 Zpět na domovskou stránku
                </button>
            </div>
        </div>
    );
}
