package br.com.rodrigo.grupodelivros;

import static spark.Spark.before;
import static spark.Spark.staticFileLocation;
import static spark.Spark.*;

import br.com.rodrigo.grupodelivros.endpoints.UsuarioEndpoint;

public class Initializer {
	
	public void init(){
		staticFileLocation("/webapp");
		redirect.get("*", "/");
		configureHeaders();
		configureEndpoints();
	}
	
	
	private void configureHeaders(){
		before((req, res) -> {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
			res.header("Access-Control-Allow-Credentials", "true");
			res.header("Access-Control-Allow-Age", "3600");
			res.header("Content-Type", "application/json");
		});
	}
	
	private void configureEndpoints(){
		new UsuarioEndpoint().publish();
	}
	
	
}
