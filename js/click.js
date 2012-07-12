<script type="text/javascript">
$(function(){
	    $("a.btn_act").click(function(){
	        var connectCont = $("a.btn_act").index(this);
	        var showCont = connectCont+1;
	        $('.motion').css({display:'none'});
	        $('#motion_area'+(showCont)).slideDown('normal');
	 
	        $('a.btn_act').removeClass('active');
	        $(this).addClass('active');
	    });
	});
</script>