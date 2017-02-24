package br.com.rodrigo.grupodelivros.endpoints;

import static br.com.rodrigo.grupodelivros.util.JsonUtil.fromJson;
import static br.com.rodrigo.grupodelivros.util.JsonUtil.json;
import static spark.Spark.*;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Base64;
import java.util.List;

import javax.servlet.MultipartConfigElement;
import javax.servlet.http.Part;

import org.bson.types.ObjectId;

import br.com.rodrigo.grupodelivros.conf.DbConf;
import br.com.rodrigo.grupodelivros.models.Foto;
import br.com.rodrigo.grupodelivros.models.Livro;
import br.com.rodrigo.grupodelivros.models.Usuario;
import br.com.rodrigo.grupodelivros.service.LivroService;
import br.com.rodrigo.grupodelivros.service.UsuarioService;
import spark.utils.IOUtils;

public class LivroEndpoint  implements IEndpoints{
	
	
	final private LivroService service = new LivroService(DbConf.getDatastore());
	final private UsuarioService uService = new UsuarioService(DbConf.getDatastore());
	
	@Override
	public void publish() {
		
		post("/api/livro/:id", "application/json", (req, res) -> {			
			try{
				ObjectId id = new ObjectId(req.params("id"));
				System.out.println("id" + id);
				Usuario usuario = (Usuario) uService.getById(Usuario.class, id);
				
				Livro livro = fromJson(req.body(), Livro.class);
				livro.getIdsUsuarios().add(usuario.getId().toString());
				service.salva(livro);
				uService.adicionaLivro(usuario, livro.getId().toString());
				return livro.getId().toString();
			}catch(Exception e){
				e.printStackTrace();
				return new RuntimeException();
			}
			
		}, json());
		
		post("/api/livro/foto/:id", "multipart/form-data" , (req, res) -> {
			
			try{
				MultipartConfigElement multipartConfigElement = configuraPostMultipart();
	
				req.raw().setAttribute("org.eclipse.jetty.multipartConfig", multipartConfigElement);
				
				ObjectId id = new ObjectId(req.params("id"));
				
				Livro livro = (Livro) service.getById(Livro.class, id);
				Part file = req.raw().getPart("imagem");
				String filename = file.getSubmittedFileName();
				
				try(final InputStream in = file.getInputStream()){
					livro.setFoto(new Foto());
					livro.getFoto().setImagem(IOUtils.toByteArray(in));
					livro.getFoto().setNomeImagem(filename);
					service.salvaFoto(livro);
				}
				
				file.delete();
				return livro;
				
			}catch(Exception e){
				e.printStackTrace();
				return new RuntimeException();
			}
		}, json());
		
		get("/api/livros/:id", "application/json" ,(req, res) -> {
			List<Livro> livrosUsuario = service.getLivrosUsuario(req.params("id"));
			return livrosUsuario;
		}, json());
		
		
	}
	
	
	private MultipartConfigElement configuraPostMultipart(){
		String location = "image";          
		long maxFileSize = 100000000;       
		long maxRequestSize = 100000000;    
		int fileSizeThreshold = 1024;
		
		return new MultipartConfigElement(
					location,
					maxFileSize,
					maxRequestSize,
					fileSizeThreshold);
	}
	
	
}
