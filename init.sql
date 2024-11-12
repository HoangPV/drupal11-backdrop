CREATE DATABASE IF NOT EXISTS drupaldb;
CREATE USER IF NOT EXISTS 'drupaluser'@'%' IDENTIFIED BY 'drupalpass';
GRANT ALL PRIVILEGES ON drupaldb.* TO 'drupaluser'@'%';

CREATE DATABASE IF NOT EXISTS cmsdb;
CREATE USER IF NOT EXISTS 'cmsuser'@'%' IDENTIFIED BY 'cmspass';
GRANT ALL PRIVILEGES ON cmsdb.* TO 'cmsuser'@'%';

CREATE DATABASE IF NOT EXISTS drupal11v1db;
CREATE USER IF NOT EXISTS 'drupal11v1user'@'%' IDENTIFIED BY 'drupal11v1pass';
GRANT ALL PRIVILEGES ON drupal11v1db.* TO 'drupal11v1user'@'%';

CREATE DATABASE IF NOT EXISTS backdropv1db;
CREATE USER IF NOT EXISTS 'backdropv1user'@'%' IDENTIFIED BY 'backdropv1pass';
GRANT ALL PRIVILEGES ON backdropv1db.* TO 'backdropv1user'@'%';

FLUSH PRIVILEGES;
