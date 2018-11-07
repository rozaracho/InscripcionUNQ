package ar.edu.unq.inscripcionunq.spring.exception;

public class CopiaOfertaMismoPeriodoException extends ExceptionGeneric implements ExceptionSystem {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CopiaOfertaMismoPeriodoException() {
		super(022, "No se puede copiar oferta academica al mismo periodo");
	}

}