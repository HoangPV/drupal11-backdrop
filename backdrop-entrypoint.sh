#!/bin/bash
set -e

# Create settings.php if it doesn't exist
mkdir -p /var/www/html/files
chown -R www-data:www-data /var/www/html/files
chmod 775 /var/www/html/files

exec "$@"