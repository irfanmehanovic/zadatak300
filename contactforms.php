<?php include 'header.php'; ?>

<?php include 'navigacija.php'; ?>

			<td class="zaBody">
				<h1>Kontakt obrazac</h1>
				<div id="results">
	 
				</div>
				<form id="myForm" action="script.js">
					<fieldset>
					<legend>Osobne informacije:</legend>	
						Ime:<br>
					  	<input id="name" type="text" name="firstname">
					  	<br>
					  	Prezime:<br>
					  	<input id="lastname" type="text" name="lastname">
					  	<br>
					  	Šifra:<br>
					  	<input id="password" type="password" name="psw">
					  	<br>
					  	E-mail:<br>
					  	<input id="email" type="email" name="email">
					  	<br>
					  	Telefon:<br>
					  	<input id="phone" type="tel" name="phone">
					  	<br>
					  	<br><br><br><br><br>
					  	<input type="button" onclick="return results(event);" value="Submit">
					  	<input type="reset"> 
				  </fieldset>
				 </form>
			</td>
		</tr>
	</table>
	
</main>

<?php include 'footer.php'; ?>