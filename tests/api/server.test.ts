import { server1, operationServers } from "../../packages/datadog-api-client-common/servers";
import { createConfiguration } from "../../packages/datadog-api-client-common/configuration";
import {
  HttpMethod,
} from "../../packages/datadog-api-client-common/http/http";
import { DashboardsApiRequestFactory } from '../../packages/datadog-api-client-v1/apis/DashboardsApi';

test('TestServerClone', () => {
    const newServer = server1.clone();
    newServer.setVariables({"site": "datadoghq.eu"});
    const request = server1.makeRequestContext("/ping", HttpMethod.GET);
    expect(request.getUrl()).toBe("https://api.datadoghq.com/ping");
    const newRequest = newServer.makeRequestContext("/ping", HttpMethod.GET);
    expect(newRequest.getUrl()).toBe("https://api.datadoghq.eu/ping");
  }
);

test('TestConfigurationVariables', () => {
    const config = createConfiguration();
    config.setServerVariables({site: "datadoghq.eu"});
    const request = server1.makeRequestContext("/ping", HttpMethod.GET);
    expect(request.getUrl()).toBe("https://api.datadoghq.com/ping");
    const newServer = config.getServer("/ping");
    const newRequest = newServer.makeRequestContext("/ping", HttpMethod.GET);
    expect(newRequest.getUrl()).toBe("https://api.datadoghq.eu/ping");
  }
);

test('TestConfigurationVariablesOperationServers', () => {
    const config = createConfiguration();
    config.setServerVariables({site: "datadoghq.eu"});
    const request = operationServers["v1.IPRangesApi.getIPRanges"][0].makeRequestContext("/", HttpMethod.GET);
    expect(request.getUrl()).toBe("https://ip-ranges.datadoghq.com/");
    const newServer = config.getServer("v1.IPRangesApi.getIPRanges");
    const newRequest = newServer.makeRequestContext("/", HttpMethod.GET);
    expect(newRequest.getUrl()).toBe("https://ip-ranges.datadoghq.eu/");
  }
);

test('TestGetServerAPIUse', async () => {
    const config = createConfiguration();
    config.setServerVariables({site: "datadoghq.eu"});
    const requestFactory = new DashboardsApiRequestFactory(config);

    const newRequest = await requestFactory.deleteDashboard("id");
    expect(newRequest.getUrl()).toBe("https://api.datadoghq.eu/api/v1/dashboard/id");
  }
);
