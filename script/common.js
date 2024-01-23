$(document).ready(function() {
    $('#tab-bar .tab-item img').hover(
        function() {
            var src = $(this).attr('src');
            if (!src.includes('_click')) {
                $(this).data('original-src', src);
                $(this).attr('src', src.replace('.png', '_click.png'));
            }
        }, 
        function() {
            var originalSrc = $(this).data('original-src');
            if (originalSrc) {
                $(this).attr('src', originalSrc);
            }
        }
    );
});
