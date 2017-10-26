#!/bin/bash
if [ ! -e .env ]
then
npm install
touch .env
echo "Information de connexion à de votre BDD"
read -p "Entrez le nom de votre host : " host
read -p "Entrez le nom d'utilisateur : " user
read -p "Entrez le mot de passe: " password
read -p "Entrez le nom de votre base de données : " database		
echo "MAILGUN_USERNAME='postmaster@sandbox67c118365e564798a8864434e4b2a3cb.mailgun.org'
MAILGUN_PASSWORD='ed49d942fd9e6c11208ee3aacb29df9d'

SESSION_SECRET='e26b43c3a53718177b25d9df6359481f54cbb9f7c3a6844d4edeed1905680ebc'

DB_HOST='$host'
DB_USER='$user'
DB_PASSWORD='$password'
DB_NAME='$database'" >> .env 
node server.js
else
node server.js
fi

