package br.com.rodrigo.grupodelivros.endpoints;

import static br.com.rodrigo.grupodelivros.util.JsonUtil.fromJson;
import static br.com.rodrigo.grupodelivros.util.JsonUtil.json;
import static spark.Spark.post;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import br.com.rodrigo.grupodelivros.conf.DbConf;
import br.com.rodrigo.grupodelivros.models.Usuario;
import br.com.rodrigo.grupodelivros.service.UsuarioService;


public class UsuarioEndpoint implements IEndpoints {

	UsuarioService usuarioService = new UsuarioService(DbConf.getDatastore());
	
	@Override
	public void publish() {
		
		post("/api/usuario/", "application/json", (req, res) -> {
			Usuario usuario = fromJson(req.body(), Usuario.class);
			usuarioService.salva(usuario);
			return "tudo certo";
		}, json());
		
		
		post("/api/usuario/getId/", "application/json", (req, res) -> {
			try {
				
				Usuario usuario = fromJson(req.body(), Usuario.class);
				System.out.println(usuario.getId());
				return usuario.getId().toString();
				
			}catch(Exception e){
				e.printStackTrace();
				return new RuntimeException();
			}
		}, json());
		
		post("/api/auth_login", "application/json", (req, res) -> {
			JsonObject jResponse = new Gson().fromJson(req.body(), JsonObject.class);
			
			String login = jResponse.get("login").getAsString();
			String senha = jResponse.get("senha").getAsString();
			
			return usuarioService.authUsuario(login, senha);
		}, json());
		
	}
	
	
	
}
