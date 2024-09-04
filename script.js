

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MARSYAA</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="logo">MARSYAA</div>
        <button id="startButton">Start</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS (styles.css)
```css
body {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Arial', sans-serif;
}

.container {
    text-align: center;
}

.logo {
    font-size: 100px;
    font-weight: bold;
    animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 20px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: darkred;
}
```

### JavaScript (script.js)
```javascript
document.getElementById('startButton').addEventListener('click', function() {
    alert('My Name is Marsyaa! 💋');
});
```

