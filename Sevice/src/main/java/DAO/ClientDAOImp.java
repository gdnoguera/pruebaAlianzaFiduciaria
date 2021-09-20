package DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import Model.Client;

@Repository
public class ClientDAOImp  implements ClientDAO{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean saveClient(Client client) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().save(client);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Client> getClients() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Client> query=currentSession.createQuery("from Client", Client.class);
		List<Client> list=query.getResultList();
		return list;
	}

	@Override
	public boolean deleteClient(Client client) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().delete(client);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Client> getClientByID(Client client) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Client> query=currentSession.createQuery("from Client where id=:id", Client.class);
		query.setParameter("id", client.getId());
		List<Client> list=query.getResultList();
		return list;
	}

	@Override
	public boolean updateClient(Client client) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().update(client);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	

}
