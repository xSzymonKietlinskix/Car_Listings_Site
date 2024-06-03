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
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', '123' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define('AUTH_KEY',         'u_M=DJX#U8Lj1b`[QSr`C+b{69g>jUqfzDMsUwHyf%fI!Ib0Xop-uGFHU3&9J/#7');
define('SECURE_AUTH_KEY',  '&JYD^e!|bl4/g7gJBV@T|[Eg@y]Xb5MSw=eryRoAJDX4X#iw7_;JBd4CDVy>B_!=');
define('LOGGED_IN_KEY',    '0b0J3L~lD#93d*StOGv0lOh-nz8,7d8b-Y{S-u?EL.f+hk/Z;8z-`vLlt;YtB/1-');
define('NONCE_KEY',        '5`U-F5?g-iyOv.bK$2aH6^$t+UAG%3-7wsi?p}k<6Q}G|mIubnvy+&(<s`+8++sU');
define('AUTH_SALT',        '2Z?{/JSaSR2*;U9U~.L?h|ud/zfv%}UI>>,~O^-e5lhNCu|:g1B[/YL;nLOFtj0L');
define('SECURE_AUTH_SALT', '6_xVpY:2B8gSZ9Yx.=CA.P)rNz.&Ik|7itl-Nln!,|Ft|iug5z~=s6fEi[SLC2[n');
define('LOGGED_IN_SALT',   '5+2|1WWsB&@<L*mS5U*@`i : ~z<)^pCp_gdD$O/mo{m=:Z/OoqJvC-wb:!5UjS%');
define('NONCE_SALT',       '_j;5Wj#@[GK4[>Z28S=nH9Z/@dc!8*5fV{_h|VWp@izAu]+OPh-a`,V8|)-:01n7');
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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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
define('FS_METHOD', 'direct');
