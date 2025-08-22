# TD OpenAPI Specification - AA 2024-25

## Heriniaina RAMAHERITO - STD24201

### EXPLICATION DU DEVOIR :
A chaque exercice, vous trouvez des fichiers .png qui présente l'éxecution de chaque exercice et nommé par exemple pour l'exercice 1 *exo1.png* et le code de l'exercice 1 est nommé *exo1.yaml* .

C'est qu'un exemple mais tout mes exercices sont tous comme ça dans ce devoir de OpenAPI. 

### UTILISATION :
1. Créez un fichier server.js, et après insert ce code dans dans ce fichier pour vérifier tout les exercices 
2. Executez ce commande dans le terminale pour avoir le lien d'execution sur postman `node server.js ` 
3. Testez sur postman avec le lien de la réponse 

* <u> Pour l'exercice 1 </u> 
``` javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.status(200).send('pong');
});

app.listen(PORT, () => {
    console.log(` Serveur démarré sur http://localhost:${PORT}`);
    console.log(` Testez avec : http://localhost:${PORT}/ping`);
});

```

* <u> Pour l'exercice 2 </u>