package ar.edu.unq.inscripcionunq.spring.service;

import java.util.List;

import ar.edu.unq.inscripcionunq.spring.controller.miniobject.OfertaAcademicaJson;
import ar.edu.unq.inscripcionunq.spring.exception.CodigoInvalidoException;
import ar.edu.unq.inscripcionunq.spring.exception.DescripcionInvalidaException;
import ar.edu.unq.inscripcionunq.spring.exception.EstadoInvalidoException;
import ar.edu.unq.inscripcionunq.spring.exception.IdNumberFormatException;
import ar.edu.unq.inscripcionunq.spring.exception.NombreInvalidoException;
import ar.edu.unq.inscripcionunq.spring.exception.OfertaNoExisteException;
import ar.edu.unq.inscripcionunq.spring.model.OfertaAcademica;

public interface OfertaAcademicaService extends GenericService<OfertaAcademica>{

	List<OfertaAcademicaJson> getOfertasAcademicasJson();

	void eliminarOferta(String idOferta) throws IdNumberFormatException, OfertaNoExisteException;

	void clonarOferta(Long idOferta) throws OfertaNoExisteException;

	void crearOferta(OfertaAcademicaJson ofertaJson) throws DescripcionInvalidaException, CodigoInvalidoException, EstadoInvalidoException, NombreInvalidoException;

	void actualizarOferta(OfertaAcademicaJson ofertaJson) throws DescripcionInvalidaException, CodigoInvalidoException, EstadoInvalidoException, NombreInvalidoException, OfertaNoExisteException;

}