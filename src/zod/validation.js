import z from 'zod'
export const email  = z.string().email().min(4).max(20);
export const password = z.string().min(4).max(20);
export const user = z.object({
	'email': email ,
	'password': password
});
export const valid = ( _email, _password )=>{	
	return user.safeParse({
		'email' : _email ,
		'password' : _password
	})	
}