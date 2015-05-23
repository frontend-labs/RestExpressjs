Footballer = (($)->
	st =
		'formSearch' : '#formSearch'
		'txtSearch' : '#txtSearch'
		'btnSearch' : '#btnSearch'
		'results' : '.results'
	dom = {}
	stForm =
		'rules' :
			'name' :
				'required'  :   true
			'email' :
				'required'  :   true
				'email'     :   true
			'message' :
				'required'  :   true
		'messages' :
			'name' :
				'required'  :   'Campo obligatorio'
			'email' :
				'required'  :   'Campo obligatorio'
				'email'     :   'Formato Incorrecto'
			'message' :
				'required' :    'Campo obligatorio'
	catchDom = ->
		dom.formSearch = $(st.formSearch)
		dom.txtSearch = $(st.txtSearch)
		dom.btnSearch = $(st.btnSearch)
		dom.results = $(st.results)
		return
	bindEvents = ->
		dom.btnSearch.on('click', fnEvents.searchFootballer)
		return
	fnEvents =
		searchFootballer : (event)->
			event.preventDefault()
			valueTxtSearch = dom.txtSearch.val()
			$.ajax(
				'method' : 'get'
				'url' : 'http://localhost:4000/search/'+valueTxtSearch
				'success' : (data)->
					console.log(data)
					dom.results.html('<div class="footballer"><img class="photo" with="200" height="300" src="'+data.photo+'"><span class="name">'+data.name+' '+data.surname+'</span></div>')
					return
				'error' : (error)->
					console.log (error)
					return
			)
			return
	init = ->
		catchDom()
		bindEvents()
		return
	init : init
)(jQuery)

$(->
	Footballer.init()
)