package br.com.rodrigo.grupodelivros.models;

import java.util.List;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Reference;

@Entity
public class Usuario extends Entidade {
	
	private String primeiroNome;
	private String sobreNome;
	private String login;
	private String senha;
	
	@Reference
	private List<Livro> idsLivros;

	
	public Usuario() {
		// TODO Auto-generated constructor stub
	}
	
	public String getPrimeiroNome() {
		return primeiroNome;
	}

	public void setPrimeiroNome(String primeiroNome) {
		this.primeiroNome = primeiroNome;
	}

	public String getSobreNome() {
		return sobreNome;
	}

	public void setSobreNome(String sobreNome) {
		this.sobreNome = sobreNome;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public List<Livro> getIdsLivros() {
		return idsLivros;
	}
	
	public void setIdsLivros(List<Livro> idsLivros) {
		this.idsLivros = idsLivros;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", primeiroNome=" + primeiroNome + ", sobreNome=" + sobreNome + ", login=" + login
				+ ", senha=" + senha + ", idsLivros=" + idsLivros + "]";
	}
	
	
}
