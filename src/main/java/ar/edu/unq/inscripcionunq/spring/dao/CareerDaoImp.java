package ar.edu.unq.inscripcionunq.spring.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import ar.edu.unq.inscripcionunq.spring.model.Career;

@Repository
@Transactional
public class CareerDaoImp extends GenericDaoImp<Career> implements GenericDao<Career> {

	@Override
	protected Class<Career> getDomainClass() {
		// TODO Auto-generated method stub
		return Career.class;
	}

}
