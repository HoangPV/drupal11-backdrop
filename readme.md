# Drupal 11 and Backdrop CMS Docker Setup

This project sets up a Docker environment for running Drupal 11 and Backdrop CMS. Before proceeding with the Docker setup, you need to manually obtain the source code for both Drupal 11 and Backdrop using Composer.

## Prerequisites

Docker and Docker Compose installed on your system
Composer v2.x
PHP 8.3 (for Drupal 11)
PHP 8.1 (for Backdrop)

## Getting Started

1. Obtain Source Code

Before running the Docker setup, you need to manually get the source code for Drupal 11 and Backdrop using Composer.

For Drupal 11:

Ensure you have Composer v2.x and PHP 8.3 installed, then run:

`composer create-project drupal/recommended-project:^11 drupal-src`


For Backdrop:

Ensure you have Composer v2.x and PHP 8.1 installed, then run:

`composer create-project backdrop/backdrop backdrop-src`


