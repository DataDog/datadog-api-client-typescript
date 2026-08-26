import { createConfiguration } from "../../packages/datadog-api-client-common/configuration";
import { AuthenticationApiRequestFactory } from "../../packages/datadog-api-client-v1/apis/AuthenticationApi";

describe("IaC managed-by header", () => {
  test("is absent by default", async () => {
    const configuration = createConfiguration();
    const requestFactory = new AuthenticationApiRequestFactory(configuration);

    const request = await requestFactory.validate();

    expect(request.getHeaders()["X-Datadog-Managed-By"]).toBeUndefined();
  });

  test("is sent when isIaC is enabled", async () => {
    const configuration = createConfiguration({ isIaC: true });
    const requestFactory = new AuthenticationApiRequestFactory(configuration);

    const request = await requestFactory.validate();

    expect(request.getHeaders()["X-Datadog-Managed-By"]).toBe("iac");
  });
});
