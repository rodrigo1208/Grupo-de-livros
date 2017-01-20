package br.com.rodrigo.grupodelivros.service;

import java.util.List;

import org.mongodb.morphia.Datastore;

import br.com.rodrigo.grupodelivros.models.Entidade;

public class AbstractService implements IServices{

	
	protected Datastore datastore;
	
	public AbstractService(Datastore datastore) {
		this.datastore = datastore;
	}
	
	@Override
	public void salva(Entidade e) {
		datastore.save(e);
	}

	@Override
	public Object getById(Entidade e) {
		return datastore.find(e.getClass()).filter("id", e.getId());
	}

	@Override
	public void exclui(Entidade e) {
		datastore.delete(e);
	}

	@Override
	public List<Object> getAll(Entidade e) {
		datastore.find(e.getClass());
		return null;
	}

}
