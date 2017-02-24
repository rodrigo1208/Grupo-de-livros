package br.com.rodrigo.grupodelivros.service;

import java.util.List;

import org.bson.types.ObjectId;

import br.com.rodrigo.grupodelivros.models.Entidade;

public interface IServices {
	void salva(Entidade e);
	Object getById(Class<?> clazz, ObjectId id);
	void exclui(Entidade e);
	List<Object> getAll(Entidade e);
}
