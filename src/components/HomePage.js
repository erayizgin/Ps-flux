import React from 'react';
// tavsiye edilen ve kullanılan component oluşturma biçimi. (function component). 
// eski versiyonlar sadece class component desteklemekte.
function HomePage() {
    return (
    <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Flux and React Router for ultra responsive web apps.</p>
        <a href="/about">About</a>
    </div>
    );
}

export default HomePage;