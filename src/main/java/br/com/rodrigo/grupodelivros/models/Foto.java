package br.com.rodrigo.grupodelivros.models;

import java.util.Arrays;
import java.util.Base64;

public class Foto {
	
	private String nomeImagem;
	private byte[] imagem;
	
	public Foto() {	}

	public String getNomeImagem() {
		return nomeImagem;
	}

	public void setNomeImagem(String nomeImagem) {
		this.nomeImagem = nomeImagem;
	}

	public byte[] getImagem() {
		return imagem;
	}

	public void setImagem(byte[] imagem) {
		this.imagem = imagem;
	}

	@Override
	public String toString() {
		return "Foto [nomeImagem=" + nomeImagem + ", imagem=" + Arrays.toString(imagem) + "]";
	}

	

	
	
	

}
