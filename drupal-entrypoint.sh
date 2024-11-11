#!/bin/bash
set -e

# Create settings.php file if it doesn't exist
if [ ! -f /var/www/html/web/sites/default/settings.php ]; then
  cp /var/www/html/web/sites/default/default.settings.php /var/www/html/web/sites/default/settings.php
  chmod 666 /var/www/html/web/sites/default/settings.php
fi

# Ensure the files directory exists and is writable
mkdir -p /var/www/html/web/sites/default/files
chown -R www-data:www-data /var/www/html/web/sites/default/files
chmod 775 /var/www/html/web/sites/default/files

exec "$@"