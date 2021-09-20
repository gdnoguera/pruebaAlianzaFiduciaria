package DAO;

import java.util.List;

import Model.Client;

public interface ClientDAO {

	public boolean saveClient(Client client);
	public List<Client> getClients();
	public boolean deleteClient(Client client);
	public List<Client> getClientByID(Client client);
	public boolean updateClient(Client client);
}
