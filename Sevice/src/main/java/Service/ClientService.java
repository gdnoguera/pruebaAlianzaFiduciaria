package Service;

import java.util.List;

import Model.Client;

public interface ClientService {

	
	public boolean saveClient(Client client);
	public List<Client> getClients();
	public boolean deleteClient(Client client);
	public List<Client> getClientByID(Client client);
	public boolean updateClient(Client client);
}
