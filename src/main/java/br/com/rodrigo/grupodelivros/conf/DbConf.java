package br.com.rodrigo.grupodelivros.conf;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;

public abstract class DbConf {
	
	private static MongoClient client = new MongoClient("localhost", 27017);
	private static Datastore datastore = new Morphia().createDatastore(client, "grupo_de_livros");
	
	public static Datastore getDatastore(){
		return datastore;
	}
	
}
