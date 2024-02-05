#!/bin/bash
sudo certbot certonly --webroot -w ./certbot/www/ --config-dir ./certbot/conf/ --email=frank.st.kong@gmail.com --agree-tos --no-eff-email -d yourguitarlessons.tech