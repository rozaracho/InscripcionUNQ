package ar.edu.unq.inscripcionunq.spring.controller.miniobject;

import java.util.ArrayList;
import java.util.List;

import ar.edu.unq.inscripcionunq.spring.model.Carrera;
import ar.edu.unq.inscripcionunq.spring.model.Comision;
import ar.edu.unq.inscripcionunq.spring.model.Materia;

public class MateriaJson {
	public Long id;
	public String codigo;
	public String nombre;
	public Boolean aprobada;
	public List<ComisionJson> comisionesJson = new ArrayList<ComisionJson>();
	public ComisionJson comisionRegistrado;
	public Integer horas;
	public List<Carrera> carreras;

	public MateriaJson() {

	}

	public MateriaJson(Materia materia, Boolean bool) {
		this.codigo = materia.getCodigo();
		this.nombre = materia.getNombre();
		this.aprobada = bool;
		this.id = materia.getId();
		this.horas = materia.getHoras();
		this.carreras = materia.getCarreras();
	}

	public MateriaJson(Materia materia, boolean bool, List<Comision> collect) {
		this.codigo = materia.getCodigo();
		this.nombre = materia.getNombre();
		this.aprobada = bool;
		this.id = materia.getId();
		this.horas = materia.getHoras();
		this.carreras = materia.getCarreras();
		if (!collect.isEmpty()) {
			this.setComisionInscripto(collect.get(0));
		}
	}

	private void setComisionInscripto(Comision comision) {
		this.comisionRegistrado = new ComisionJson(comision);
	}

	public MateriaJson agregarComisionJson(List<ComisionJson> commissionJson) {
		comisionesJson.addAll(commissionJson);
		return this;
	}
}