package steps;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import org.hamcrest.Matchers;
import org.json.JSONException;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

public class ValidaPessoas {
	private Response response;	
	private static final String baseURL = "http://localhost:9090";
	private static final String basePath = "/pessoas";	
	RequestSpecification request;

	@Given("^que acesso a api de pessoa$")
	public void que_acessei_api() {
		RestAssured.baseURI = baseURL;
	}

	@When("^buscar pessoa por (.*) (.*)$")
	public void cadastrar_dados_nova_pessoa(Integer ddd, Integer telefone) {
		response = RestAssured.given().when().get(basePath + "/" + ddd + "/" + telefone);
	}

	@When("^cadastrar (.*) da nova pessoa$")
	public void cadastrar_dados_nova_pessoa(String file) throws FileNotFoundException, IOException, JSONException {
		File jsonDataFile = new File("src/test/resources/Arquivos/" + file);
		response = RestAssured.given().contentType("application/json").body(jsonDataFile).when().post(basePath);
	}

	@Then("^validarei o (.*) de retorno da api$")
	public void statusCode_de_retorno(Integer statuscode) {
		response.then().statusCode(statuscode).extract().response();
	}

	@Then("^validarei a (.*) de retorno da api$")
	public void mensagem_de_retorno(String mensagem) {
		response.then().body("erro", Matchers.equalTo(mensagem)).log().all();
	}
}