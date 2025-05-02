import { useState, useEffect } from "react";

export default function About() {
    // Define state
    const [facts, setFacts] = useState([]);
    const [mainImage, setMainImage] = useState("");  // Store the main cat image

    // Perform fetch and update state
    useEffect(() => {
        // API URL for facts about cats
        const factsAPI = "https://meowfacts.herokuapp.com/";
        // API URL for cat images (random images for main image)
        const imagesAPI = "https://api.thecatapi.com/v1/images/search";  // Random image each time

        // Fetch facts
        fetch(factsAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setFacts(data.data); 
            })
            .catch(error => console.error("Error fetching data:", error)); // Handle errors
        
        // Fetch a random main image
        fetch(imagesAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMainImage(data[0].url);  // Set the random image URL
            })
            .catch(error => console.error("Error fetching images:", error)); // Handle errors
    }, []);

    // Inline styles
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '20px',
            position: 'relative',
            background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)',  // Soft gradient background
            minHeight: '100vh',  // Ensure full page height
        },
        headerFooter: {
            backgroundColor: '#4caf50',  // Beautiful green header/footer
            color: '#fff',
            padding: '15px 0',
            fontSize: '28px',
            fontWeight: 'bold',
            borderRadius: '0 0 20px 20px',  // Rounded corners at bottom
        },
        footer: {
            backgroundColor: '#4caf50',  // Match header color
            color: '#fff',
            padding: '10px 0',
            fontSize: '16px',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            textAlign: 'center',
            borderRadius: '20px 20px 0 0',  // Rounded corners at top
        },
        mainCatImage: {
            width: '100%',
            maxWidth: '700px',
            marginBottom: '20px',
            borderRadius: '20px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px',
        },
        factsContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
        },
        factBox: {
            backgroundColor: '#fff',
            border: '2px solid #ccc',
            padding: '10px',
            margin: '5px 0',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '500px',
        },
        galleryContainer: {
            marginTop: '30px',
        },
        galleryTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '15px',
        },
        imageGallery: {
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap',
        },
        imageBox: {
            width: '200px',
            height: '200px',
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
        },
        catImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
        },
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.headerFooter}>
                Kočičí Fakta a Obrázky
            </header>

            {/* Main Image */}
            {mainImage && <img src={mainImage} alt="Random Cat" style={styles.mainCatImage} />}
            <p style={styles.title}>Zde jsou fakty o kočkách:</p>

            <div style={styles.factsContainer}>
                {facts.map((fact, index) => (
                    <div key={index} style={styles.factBox}>
                        <p>{fact}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer style={styles.footer}>
                &copy; 2025 Kočičí Fakta. Všechna práva vyhrazena.
            </footer>
        </div>
    );
}
