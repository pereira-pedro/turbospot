FROM debian:jessie

RUN  apt-get update && apt-get install -y openssl

ARG PROJECT_DOMAIN

ENV OPENSSL_SUBJ="/C=BR/ST=Mato Grosso do Sul/L=Campo Grande"
ENV OPENSSL_CA="${OPENSSL_SUBJ}/CN=${PROJECT_DOMAIN}"
ENV OPENSSL_MYSQL="${OPENSSL_SUBJ}/CN=mysql.${PROJECT_DOMAIN}"
ENV OPENSSL_NODE="${OPENSSL_SUBJ}/CN=node.${PROJECT_DOMAIN}"
ENV OPENSSL_RADIUS="${OPENSSL_SUBJ}/CN=radius.${PROJECT_DOMAIN}"
ENV PROJECT_DOMAIN=${PROJECT_DOMAIN}
COPY generate.sh /

#RUN sed -i -e 's@PROJECT_DOMAIN@'${PROJECT_DOMAIN}'@g' /generate.sh
RUN chmod +x /generate.sh

VOLUME /certs

WORKDIR /certs

RUN rm -r -f /certs/*

CMD /generate.sh