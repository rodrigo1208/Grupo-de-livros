package br.com.rodrigo.grupodelivros.service;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;

import com.mongodb.client.model.FindOptions;

import br.com.rodrigo.grupodelivros.models.Livro;

public class LivroService extends AbstractService {
	
	private UpdateOperations<Livro> ops;
	
	public LivroService(Datastore datastore) {
		super(datastore);
	}
	
	public Livro salvaFoto(Livro livro){
		Query<Livro> updateQuery = datastore.createQuery(Livro.class).field("_id").equal(livro.getId());
		ops = datastore.createUpdateOperations(Livro.class).set("foto", livro.getFoto());
		datastore.update(updateQuery, ops);
		return livro;
	}
	
	public Livro addUsuario(Livro livro, String idUsuario){
		Query<Livro> updateQuery = datastore.createQuery(Livro.class).field("_id").equal(livro.getId());
		ops = datastore.createUpdateOperations(Livro.class).push("idsUsuarios", idUsuario);
		datastore.update(updateQuery, ops);
		return livro;
	}
	
	public List<Livro> getLivrosUsuario(String idUsuario){
		return datastore.createQuery(Livro.class).field("idsUsuarios").contains(idUsuario).asList();					
	}
	
}
