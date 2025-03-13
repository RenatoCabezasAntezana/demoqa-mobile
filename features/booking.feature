Feature: The Internet Guinea Pig Website

  Scenario Outline: Login unsuccessfull
    Given Me encuentro en el login
    When Escribo el username <username> y <password>
    And Le doy click en el boton login
    Then Validar mensaje <mensaje>
    Examples:
      | username          | password | mensaje                                                     |
      | asdasd@asd.com    | asdasd   | Provided credentials do not match any user in this service. |
      | alice@example.com | 10203040 | Sorry, this user has been locked out.                       |

  Scenario: Login successfull
    Given Me encuentro en el login
    When Escribo el username <username> y <password>
    And Le doy click en el boton login
    Then Validar pagina de inicio <mensaje>
    Examples:
      | username        | password | mensaje  |
      | bob@example.com | 10203040 | Checkout |