# Proyecto Angular Firebase -Docker
# Autor  Patrick Salguero Avalos

# Se construye sobre la base de la imagen de nginx
FROM nginx:1.11-alpine

# Se agrega metadatos a la imagen
LABEL Descripción="Mi Aplicación Angular - Firebase" Autor="Patrick Salguero" Version="v1.0.0"

# Se compian los ficheros  hacia la carpeta de nginx
COPY docs /usr/share/nginx/html
