<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'whostlerDB' );

/** Database username */
define( 'DB_USER', 'whostler' );

/** Database password */
define( 'DB_PASSWORD', '0cC)3?UM*9%q' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'jR@=Yk.# V! izrz&-@+)&7KDuqPHQ|YV*hHrrS468R(Gz,(!oB1.Q|kH|!EVoQp' );
define( 'SECURE_AUTH_KEY',  ' HaX$m-k#fEgkn*U/k_]+C]}R8oyne9ZpOUU%|sF9<yD%/-%_a>Elf)*A<I*`Jz.' );
define( 'LOGGED_IN_KEY',    '2gCkDRQO{O%u7m`[{mK_%=w$.|(5<;v-pAT_:K:o!<bqWb?jh}%1bCIG0gb{H{A&' );
define( 'NONCE_KEY',        'Z$Pw!!.wpOoGc2l?ig9]j-XN@^o gPhkwk,1JL93KouUZSl{>|7pS]U:${&M}aBn' );
define( 'AUTH_SALT',        '#^gS1cl);Yr#/b5vU/]X?ca2-/h}(8*%RL5T}WW ?(--l2S;6hkw&Aa-uw,[TfIA' );
define( 'SECURE_AUTH_SALT', ';lPIkZk)7*3WE73T.#=w<Pzo&Ecv1,_tyT27[z_Vc<dJcyjZ+Y3m7&20XVJA;E=.' );
define( 'LOGGED_IN_SALT',   'uFuu~)R+$~ZCt.cOycylm5GbZCC7hh?&oyB1-|I`52Di{7+s8&h??4MmR7rGF.KJ' );
define( 'NONCE_SALT',       '=(DvhUHBw72HMrRZe1!StgnaefD|SnW-aq]jJ<Ls~0sKFg(~;RkB&@X;T;bW*ge/' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
