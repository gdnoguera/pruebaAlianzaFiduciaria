package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Model.Client;
import DAO.ClientDAO;

@Service
@Transactional
public class ClientServiceImp implements ClientService {
 
	@Autowired
	private ClientDAO clientdao;
	
	@Override
	public boolean saveClient(Client client) {
		return clientdao.saveClient(client);
	}

	@Override
	public List<Client> getClients() {
		return clientdao.getClients();
	}

	@Override
	public boolean deleteClient(Client client) {
		return clientdao.deleteClient(client);
	}

	@Override
	public List<Client> getClientByID(Client client) {
		return clientdao.getClientByID(client);
	}

	@Override
	public boolean updateClient(Client client) {
		return clientdao.updateClient(client);
	}

}
