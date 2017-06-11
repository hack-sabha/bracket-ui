#alpine image
FROM nginx:alpine
#application version info
LABEL Name=tournament-ui Version=1.0.0
#create the server(nginx) and copy the nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf
#copy the application files
COPY dist /usr/share/nginx/html