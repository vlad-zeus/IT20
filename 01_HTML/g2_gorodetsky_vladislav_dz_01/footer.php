<?php

/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
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
<?php astra_content_bottom(); ?>
</div> <!-- ast-container -->
</div><!-- #content -->
<?php
astra_content_after();

astra_footer_before();

astra_footer();

astra_footer_after();
?>
</div><!-- #page -->
<?php
astra_body_bottom();
wp_footer();
?>
<!-- Yandex.Metrika informer -->
<a href="https://metrika.yandex.ru/stat/?id=87136543&amp;from=informer" target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/87136543/3_1_FFFFFFFF_EFEFEFFF_1_visits" style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="87136543" data-lang="ru" /></a>
<!-- /Yandex.Metrika informer -->
</body>

</html>