package ar.edu.unq.inscripcionunq.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ar.edu.unq.inscripcionunq.spring.controller.miniobject.ExceptionJson;
import ar.edu.unq.inscripcionunq.spring.exception.CommissionNotExistenException;
import ar.edu.unq.inscripcionunq.spring.exception.EmailInvalidoException;
import ar.edu.unq.inscripcionunq.spring.exception.UsuarioNoExisteException;
import ar.edu.unq.inscripcionunq.spring.exception.ExisteUsuarioConElMismoEmailException;
import ar.edu.unq.inscripcionunq.spring.exception.IdNumberFormatException;
import ar.edu.unq.inscripcionunq.spring.exception.ObjectNotFoundinDBException;
import ar.edu.unq.inscripcionunq.spring.exception.PasswordInvalidoException;
import ar.edu.unq.inscripcionunq.spring.model.Usuario;
import ar.edu.unq.inscripcionunq.spring.service.UsuarioService;

@RestController
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioServiceImp;
	
	@PostMapping("/usuarios/ingresoUsuario")
	public ResponseEntity ingresoUsuario(@RequestBody Usuario usuarioJson){
		try {
			usuarioServiceImp.verificarSiExisteUsuario(usuarioJson.getEmail(), usuarioJson.getPassword());
		} catch (ObjectNotFoundinDBException e) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
					.body(new ExceptionJson(new UsuarioNoExisteException()));
		} catch (PasswordInvalidoException e) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
					.body(new ExceptionJson(new PasswordInvalidoException()));
		} 
		return ResponseEntity.ok().build();
	}
	
	@GetMapping("/usuarios")
	public ResponseEntity<List> getPeridos() {
		return ResponseEntity.ok().body(usuarioServiceImp.list());
	}
	
	@PutMapping("/usuarios/nuevoUsuario")
	public ResponseEntity nuevoUsuario(@RequestBody Usuario usuarioJson){
		try {
			usuarioServiceImp.crearUsuario(usuarioJson);
		} catch (EmailInvalidoException | ExisteUsuarioConElMismoEmailException | PasswordInvalidoException e) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
					.body(new ExceptionJson(e));
		}
		
		return ResponseEntity.ok().build();
	}
	
	@DeleteMapping("/usuarios/eliminarUsuario/{idUsuario}")
	public ResponseEntity eliminarComision(@PathVariable String idUsuario) {
		try {
			usuarioServiceImp.eliminarUsuario(idUsuario);
		} catch (IdNumberFormatException | UsuarioNoExisteException e) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(new ExceptionJson(e));
		}
		return ResponseEntity.ok().build();
	}

}
