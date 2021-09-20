package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Client;
import Service.ClientService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
public class Controller {
	
	@Autowired
	private ClientService clientservice;
	
	@PostMapping("save-client")
	public boolean saveClient(@RequestBody Client client) {
		 return clientservice.saveClient(client);
		
	}
	
	@GetMapping("clients-list")
	public List<Client> allclients() {
		 return clientservice.getClients();
	}
	
	
	@DeleteMapping("delete-client/{id}")
	public boolean deleteClient(@PathVariable("id") int id,Client client) {
		client.setId(id);
		return clientservice.deleteClient(client);
	}

	@GetMapping("client/{id}")
	public List<Client> allclientByID(@PathVariable("id") int id,Client client) {
		 client.setId(id);
		 return clientservice.getClientByID(client);
		
	}
	
	@PostMapping("update-client/{id}")
	public boolean updateClient(@RequestBody Client client,@PathVariable("id") int id) {
		client.setId(id);
		return clientservice.updateClient(client);
	}
}
