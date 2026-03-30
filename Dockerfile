FROM propentatech/portfolios-formation-dev-web2026:latest

RUN mkdir -p /usr/share/nginx/html/portfolio-NG7133/
RUN rm -rf /usr/share/nginx/html/portfolio-NG7133/*

COPY . /usr/share/nginx/html/portfolio-NG7133/

RUN sed -i 's|root   /usr/share/nginx/html;|root   /usr/share/nginx/html/portfolio-NG7133;|g' /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
