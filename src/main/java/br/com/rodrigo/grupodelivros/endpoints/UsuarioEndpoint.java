package br.com.rodrigo.grupodelivros.endpoints;

import static spark.Spark.*;

import br.com.rodrigo.grupodelivros.conf.DbConf;
import br.com.rodrigo.grupodelivros.models.Usuario;
import br.com.rodrigo.grupodelivros.service.UsuarioService;

import static br.com.rodrigo.grupodelivros.util.JsonUtil.*;


public class UsuarioEndpoint implements IEndpoints {

	UsuarioService usuarioService = new UsuarioService(DbConf.getDatastore());
	
	@Override
	public void publish() {
		
		post("/api/usuario/", "application/json", (req, res) -> {
			Usuario usuario = fromJson(req.body(), Usuario.class);
			usuarioService.salva(usuario);
			return "tudo certo";
		}, json());
		
	}
	
	
	
}
