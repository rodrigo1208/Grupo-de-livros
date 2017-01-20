package br.com.rodrigo.grupodelivros.service;

import java.util.List;

import br.com.rodrigo.grupodelivros.models.Entidade;

public interface IServices {
	void salva(Entidade e);
	Object getById(Entidade e);
	void exclui(Entidade e);
	List<Object> getAll(Entidade e);
}
