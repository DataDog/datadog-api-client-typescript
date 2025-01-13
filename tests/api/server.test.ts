import { server1, operationServers } from "../../packages/datadog-api-client-common/servers";
import { createConfiguration } from "../../packages/datadog-api-client-common/configuration";
import {
  HttpMethod,
} from "../../packages/datadog-api-client-common/http/http";
import { DashboardsApiRequestFactory, DashboardsApi } from '../../packages/datadog-api-client-v1/apis/DashboardsApi';
import { logger } from "../../logger";

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

test ('TestBackoffBaseNoLessThanTwo',() => {
    const configOpts = {
      backoffBase : 1,
    }; 
   expect(()=> createConfiguration(configOpts)).toThrow();
  }
);

test('TestCustomFetch', async () => {
    // Mock logger to prevent writing to console during test
    logger.error = jest.fn();
    // Mock fetch
    const _fetch = jest.fn(() => Promise.resolve());
    const config = createConfiguration({fetch: _fetch});
    const api = new DashboardsApi(config);
    await expect(api.deleteDashboard({dashboardId: "id"})).rejects.toThrow();

    expect(_fetch).toHaveBeenCalledTimes(1);
  }
);