import { useState, useEffect } from "react";

export default function About() {

    const [facts, setFacts] = useState([]);
    const [mainImage, setMainImage] = useState("");  

   
    useEffect(() => {
       
        const factsAPI = "https://meowfacts.herokuapp.com/";
       
        const imagesAPI = "https://api.thecatapi.com/v1/images/search";  

        
        fetch(factsAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setFacts(data.data); 
            })
            .catch(error => console.error("Error fetching data:", error)); 
        
        
        fetch(imagesAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMainImage(data[0].url);  
            })
            .catch(error => console.error("Error fetching images:", error)); 
    }, []);

    
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '20px',
            position: 'relative',
            background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)',  
            minHeight: '100vh',  
        },
        headerFooter: {
            backgroundColor: '#fef6e4',  
            color: '#fff',
            padding: '15px 0',
            fontSize: '28px',
            fontWeight: 'bold',
            borderRadius: '0 0 20px 20px',  
        },
        footer: {
            backgroundColor: '#fef6e4',  
            color: '#fff',
            padding: '10px 0',
            fontSize: '16px',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            textAlign: 'center',
            borderRadius: '20px 20px 0 0',  
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
                Kočičí fakta a obrázky
            </header>

            {/* Main Image */}
            {mainImage && <img src={mainImage} alt="Random Cat" style={styles.mainCatImage} />}
            <p style={styles.title}>Zde jsou fakty o kočičkách:</p>

            <div style={styles.factsContainer}>
                {facts.map((fact, index) => (
                    <div key={index} style={styles.factBox}>
                        <p>{fact}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer style={styles.footer}>
                &copy; 2025 BOBY
            </footer>
        </div>
    );
}
