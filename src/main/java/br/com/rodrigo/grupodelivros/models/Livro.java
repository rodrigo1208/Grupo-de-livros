package br.com.rodrigo.grupodelivros.models;

import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Reference;

@Entity
public class Livro extends Entidade {
	
	private String titulo;
	private Foto foto;
	private String autor;
	private String paginas;
	private String categoria;
	private Double nota;
	private List<Avaliacao> avaliacoes;
	
	@Reference
	private List<String> idsUsuarios;

	public Livro() {
		idsUsuarios = new ArrayList<>();
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Foto getFoto() {
		return foto;
	}

	public void setFoto(Foto foto) {
		this.foto = foto;
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

	public List<Avaliacao> getAvaliacoes() {
		return avaliacoes;
	}

	public void setAvaliacoes(List<Avaliacao> avaliacoes) {
		this.avaliacoes = avaliacoes;
	}

	public List<String> getIdsUsuarios() {
		return idsUsuarios;
	}

	public void setIdsUsuarios(List<String> idsUsuarios) {
		this.idsUsuarios = idsUsuarios;
	}

	@Override
	public String toString() {
		return "Livro [titulo=" + titulo + ", foto=" + foto + ", autor=" + autor + ", paginas=" + paginas
				+ ", categoria=" + categoria + ", nota=" + nota + ", avaliacoes=" + avaliacoes + ", idsUsuarios="
				+ idsUsuarios + "]";
	}
	
	
	
}


