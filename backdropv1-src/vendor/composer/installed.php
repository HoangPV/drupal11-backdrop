<?php return array(
    'root' => array(
        'name' => 'backdrop/backdrop',
        'pretty_version' => '1.0.0+no-version-set',
        'version' => '1.0.0.0',
        'reference' => NULL,
        'type' => 'backdrop-backdrop',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        'backdrop/backdrop' => array(
            'pretty_version' => '1.0.0+no-version-set',
            'version' => '1.0.0.0',
            'reference' => NULL,
            'type' => 'backdrop-backdrop',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'backdrop/coder' => array(
            'pretty_version' => '1.0.1',
            'version' => '1.0.1.0',
            'reference' => '6b9b7e72d177a0be17c73c8469f8227a5a3fc801',
            'type' => 'backdrop-module',
            'install_path' => __DIR__ . '/../backdrop/coder',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
        'composer/installers' => array(
            'pretty_version' => 'v2.3.0',
            'version' => '2.3.0.0',
            'reference' => '12fb2dfe5e16183de69e784a7b84046c43d97e8e',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/./installers',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'squizlabs/php_codesniffer' => array(
            'pretty_version' => '1.5.6',
            'version' => '1.5.6.0',
            'reference' => '6f3e42d311b882b25b4d409d23a289f4d3b803d5',
            'type' => 'library',
            'install_path' => __DIR__ . '/../squizlabs/php_codesniffer',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
    ),
);
