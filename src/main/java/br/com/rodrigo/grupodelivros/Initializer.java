package br.com.rodrigo.grupodelivros;

import static spark.Spark.before;
import static spark.Spark.staticFileLocation;

import javax.servlet.MultipartConfigElement;

import br.com.rodrigo.grupodelivros.endpoints.LivroEndpoint;
import br.com.rodrigo.grupodelivros.endpoints.UsuarioEndpoint;
import spark.utils.SparkUtils;

public class Initializer {
	
	public void init(){
		staticFileLocation("/webapp");
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
		new LivroEndpoint().publish();
	}
	
	
}
