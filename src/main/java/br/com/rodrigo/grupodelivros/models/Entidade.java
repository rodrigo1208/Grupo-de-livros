package br.com.rodrigo.grupodelivros.models;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Id;

public class Entidade {
	
	@Id
	protected ObjectId id;

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}
	
}
