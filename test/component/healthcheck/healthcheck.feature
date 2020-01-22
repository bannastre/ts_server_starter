Feature: Healthchecks

  Scenario Outline: I can ping the service
    When I call "GET" "/healthcheck/ping"
    Then I should get the expected status code <status>

    Examples:
      | status |
      | 200    |
