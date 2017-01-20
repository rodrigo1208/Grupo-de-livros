package br.com.rodrigo.grupodelivros.models;

import java.util.List;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Reference;

@Entity
public class Livro {
	
	private String titulo;
	private String autor;
	private String paginas;
	private String categoria;
	private Double nota;
	private List<String> avaliacoes;
	
	@Reference
	private List<Usuario> idsUsuarios;

	public Livro() {
		// TODO Auto-generated constructor stub
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getPaginas() {
		return paginas;
	}

	public void setPaginas(String paginas) {
		this.paginas = paginas;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public Double getNota() {
		return nota;
	}

	public void setNota(Double nota) {
		this.nota = nota;
	}

	public List<String> getAvaliacoes() {
		return avaliacoes;
	}

	public void setAvaliacoes(List<String> avaliacoes) {
		this.avaliacoes = avaliacoes;
	}

	public List<Usuario> getIdsUsuarios() {
		return idsUsuarios;
	}

	public void setIdsUsuarios(List<Usuario> idsUsuarios) {
		this.idsUsuarios = idsUsuarios;
	}
	
	
	
}


