package br.com.rodrigo.grupodelivros.service;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;

import br.com.rodrigo.grupodelivros.models.Usuario;

public class UsuarioService extends  AbstractService {
	
	private UpdateOperations<Usuario> ops;

	public UsuarioService(Datastore datastore) {
		super(datastore);
	}
	
	public Usuario authUsuario(String login, String senha){
		return datastore
			.find(Usuario.class)
			.filter("login", login)
			.filter("senha", senha)
			.get();
	}
	
	public Usuario adicionaLivro(Usuario usuario, String idLivro){
		System.out.println(idLivro);
		Query<Usuario> addLivroQuery = datastore.createQuery(Usuario.class).field("_id").equal(usuario.getId());
		ops = datastore.createUpdateOperations(Usuario.class).push("idsLivros", idLivro);
		datastore.update(addLivroQuery, ops);
		return usuario;
	}
	
}
