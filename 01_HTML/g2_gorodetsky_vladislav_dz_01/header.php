<?php

/**
 * The header for Astra Theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astra
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

?>
<!DOCTYPE html>
<?php astra_html_before(); ?>
<html <?php language_attributes(); ?>>

<head>
	<?php astra_head_top(); ?>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

	<?php wp_head(); ?>
	<?php astra_head_bottom(); ?>

	<!-- Yandex.Metrika counter -->
	<script type="text/javascript">
		(function(m, e, t, r, i, k, a) {
			m[i] = m[i] || function() {
				(m[i].a = m[i].a || []).push(arguments)
			};
			m[i].l = 1 * new Date();
			k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
		})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

		ym(87136543, "init", {
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true,
			webvisor: true,
			ecommerce: "dataLayer"
		});
	</script>
	<noscript>
		<div><img src="https://mc.yandex.ru/watch/87136543" style="position:absolute; left:-9999px;" alt="" /></div>
	</noscript>
	<!-- /Yandex.Metrika counter -->
</head>

<body <?php astra_schema_body(); ?> <?php body_class(); ?>>
	<?php astra_body_top(); ?>
	<?php wp_body_open(); ?>

	<a class="skip-link screen-reader-text" href="#content" role="link" title="<?php echo esc_html(astra_default_strings('string-header-skip-link', false)); ?>">
		<?php echo esc_html(astra_default_strings('string-header-skip-link', false)); ?>
	</a>

	<div <?php
			echo astra_attr(
				'site',
				array(
					'id'    => 'page',
					'class' => 'hfeed site',
				)
			);
			?>>
		<?php
		astra_header_before();

		astra_header();

		astra_header_after();

		astra_content_before();
		?>
		<div id="content" class="site-content">
			<div class="ast-container">
				<?php astra_content_top(); ?>