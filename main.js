/*   Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.*/

const iconsList  = [
	{
		name: 'cat',
		prefix: 'fa-cat',
		type: 'animal',
		family: 'fas',
        color: 'blue'
        
	},
	{
		name: 'crow',
		prefix: 'fa-crow',
		type: 'animal',
		family: 'fas',
        color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-dog',
		type: 'animal',
		family: 'fas',
        color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-dove',
		type: 'animal',
		family: 'fas',
        color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-dragon',
		type: 'animal',
		family: 'fas',
        color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-horse',
		type: 'animal',
		family: 'fas',
        color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-hippo',
		type: 'animal',
		family: 'fas',
        color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-fish',
		type: 'animal',
		family: 'fas',
        color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-carrot',
		type: 'vegetable',
		family: 'fas',
        color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-apple-alt',
		type: 'vegetable',
		family: 'fas',
        color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-lemon',
		type: 'vegetable',
		family: 'fas',
        color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-pepper-hot',
		type: 'vegetable',
		family: 'fas',
        color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-user-astronaut',
		type: 'user',
		family: 'fas',
        color: 'purple'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-user-graduate',
		type: 'user',
		family: 'fas',
        color: 'purple'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-user-ninja',
		type: 'user',
		family: 'fas',
        color: 'purple'
	},
	{
		name: 'user-secret',
		prefix: 'fa-user-secret',
		type: 'user',
		family: 'fas',
        color: 'purple'
	}
];


/*   Milestone 2 Coloriamo le icone per tipo   */
/*   Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone   */


document.getElementById('types_icons').addEventListener('change', functionFilter)

function functionFilter() {
	document.getElementById('container').innerHTML = "";

	iconsList.forEach((icon) => {
		
		const selectValue = document.getElementById('types_icons').value;

		if(icon.type == selectValue || selectValue == 'all') {
			document.getElementById('container').insertAdjacentHTML('beforeend', 
			`
				<div class="icon">
					<i class="${icon.family} ${icon.prefix} " style="color: ${icon.color}"></i>
					<h3>${icon.name}</h3>
				</div>
			`)
		}
	});
  }
  functionFilter()