var johnTeamScore = (23 + 64 + 12)/3;
var mikeTeamScore = (68 + 28 + 44)/3;

switch (true) {
	case johnTeamScore > mikeTeamScore:
		console.log('John\'s team has won with a score of ' + johnTeamScore +'!');
		break;
	case mikeTeamScore > johnTeamScore:
		console.log('Mike\s team has won with a score of ' + mikeTeamScore +'!');
		break;
	default:
		console.log('There has been a draw.')
}
