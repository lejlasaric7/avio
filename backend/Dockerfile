#FROM oraclelinux:9
#RUN yum -y install nodejs
#RUN yum -y install npm
#WORKDIR /simdbback
#COPY ["oracle-instant*.rpm", "./"]
#RUN yum -y localinstall oracle-instantclient-basic-21.1.0.0.0-1.x86_64.rpm
#RUN rm oracle-instantclient-basic-21.1.0.0.0-1.x86_64.rpm
 
FROM node:18-alpine
 
RUN apk --no-check-certificate --no-cache add libaio libnsl libc6-compat curl && \
    cd /tmp && \
    curl -o instantclient-basiclite.zip https://download.oracle.com/otn_software/linux/instantclient/2111000/instantclient-basiclite-linux.x64-21.11.0.0.0dbru.zip -SL && \
    unzip instantclient-basiclite.zip && \
    mv instantclient*/ /usr/lib/instantclient && \
    rm instantclient-basiclite.zip && \
    ln -s /usr/lib/instantclient/libclntsh.so.21.11 /usr/lib/libclntsh.so && \
    ln -s /usr/lib/instantclient/libocci.so.21.11 /usr/lib/libocci.so && \
    ln -s /usr/lib/instantclient/libociicus.so /usr/lib/libociicus.so && \
    ln -s /usr/lib/instantclient/libnnz21.so /usr/lib/libnnz21.so && \
    ln -s /usr/lib/libnsl.so.2 /usr/lib/libnsl.so.1 && \
    ln -s /lib/libc.so.6 /usr/lib/libresolv.so.2 && \
    ln -s /lib64/ld-linux-x86-64.so.2 /usr/lib/ld-linux-x86-64.so.2
 
ENV LD_LIBRARY_PATH /usr/lib/instantclient
 
 
#FROM node:18-alpine
#RUN apk --no-check-certificate --no-cache add libaio libnsl libc6-compat curl && \
#    cd /tmp && \
#    curl -o instantclient-basiclite.zip https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip -SL && \
#    unzip instantclient-basiclite.zip && \
#    mv instantclient*/ /usr/lib/instantclient && \
#    rm instantclient-basiclite.zip && \
#    ln -s /usr/lib/instantclient/libclntsh.so.21.1 /usr/lib/libclntsh.so && \
#    ln -s /usr/lib/instantclient/libocci.so.21.1 /usr/lib/libocci.so && \
#    ln -s /usr/lib/instantclient/libociicus.so /usr/lib/libociicus.so && \
#    ln -s /usr/lib/instantclient/libnnz21.so /usr/lib/libnnz21.so && \
#    ln -s /usr/lib/libnsl.so.2 /usr/lib/libnsl.so.1 && \
#    ln -s /lib/libc.so.6 /usr/lib/libresolv.so.2 && \
#    ln -s /lib64/ld-linux-x86-64.so.2 /usr/lib/ld-linux-x86-64.so.2
 
#ENV LD_LIBRARY_PATH /usr/lib/instantclient
 
RUN npm config set strict-ssl false
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
WORKDIR /simdbback
 
# Dodajte ovo
COPY . /simdbback
 
 
#COPY ["package.json", "package-lock.json*", "./"]
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g nodemon --save
EXPOSE 3005
#CMD ["node","main","localhost","3005"]
CMD ["npm","run","dev"]