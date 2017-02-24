package br.com.rodrigo.grupodelivros.models;

public class Avaliacao {
	
	private Usuario usuario;
	private String texto;
	
	public Avaliacao() { }

	public Usuario getUsuario() {
		return usuario;
	}

	public Avaliacao setUsuario(Usuario usuario) {
		this.usuario = usuario;
		return this;
	}

	public String getTexto() {
		return texto;
	}

	public Avaliacao setTexto(String texto) {
		this.texto = texto;
		return this;
	}
	
	

}
