import { RequestContext, HttpMethod } from "./http/http";

/**
 *
 * Represents the configuration of a server
 *
 */
export class BaseServerConfiguration {
  public constructor(
    private url: string,
    private variableConfiguration: { [key: string]: string }
  ) {}

  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  public setVariables(variableConfiguration: { [key: string]: string }): void {
    Object.assign(this.variableConfiguration, variableConfiguration);
  }

  public getConfiguration(): { [key: string]: string } {
    return this.variableConfiguration;
  }

  public clone(): BaseServerConfiguration {
    return new BaseServerConfiguration(this.url, {
      ...this.variableConfiguration,
    });
  }

  private getUrl() {
    let replacedUrl = this.url;
    for (const key in this.variableConfiguration) {
      const re = new RegExp("{" + key + "}", "g");
      replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
    }
    return replacedUrl;
  }

  /**
   * Creates a new request context for this server using the url with variables
   * replaced with their respective values and the endpoint of the request appended.
   *
   * @param endpoint the endpoint to be queried on the server
   * @param httpMethod httpMethod to be used
   *
   */
  public makeRequestContext(
    endpoint: string,
    httpMethod: HttpMethod
  ): RequestContext {
    return new RequestContext(this.getUrl() + endpoint, httpMethod);
  }
}

/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
export class ServerConfiguration<
  T extends { [key: string]: string },
> extends BaseServerConfiguration {}
export const server1 = new ServerConfiguration<{
  site:
    | "datadoghq.com"
    | "us3.datadoghq.com"
    | "us5.datadoghq.com"
    | "ap1.datadoghq.com"
    | "ap2.datadoghq.com"
    | "datadoghq.eu"
    | "ddog-gov.com";
  subdomain: string;
}>("https://{subdomain}.{site}", {
  site: "datadoghq.com",
  subdomain: "api",
});
export const server2 = new ServerConfiguration<{
  name: string;
  protocol: string;
}>("{protocol}://{name}", {
  name: "api.datadoghq.com",
  protocol: "https",
});
export const server3 = new ServerConfiguration<{
  site: string;
  subdomain: string;
}>("https://{subdomain}.{site}", {
  site: "datadoghq.com",
  subdomain: "api",
});

export const servers = [server1, server2, server3];

export const operationServers: {
  [endpoint: string]: BaseServerConfiguration[];
} = {
  "v1.IPRangesApi.getIPRanges": [
    new ServerConfiguration<{
      site:
        | "datadoghq.com"
        | "us3.datadoghq.com"
        | "us5.datadoghq.com"
        | "ap1.datadoghq.com"
        | "ap2.datadoghq.com"
        | "datadoghq.eu"
        | "ddog-gov.com";
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "ip-ranges",
    }),
    new ServerConfiguration<{
      name: string;
      protocol: string;
    }>("{protocol}://{name}", {
      name: "ip-ranges.datadoghq.com",
      protocol: "https",
    }),
    new ServerConfiguration<{
      subdomain: string;
    }>("https://{subdomain}.datadoghq.com", {
      subdomain: "ip-ranges",
    }),
  ],
  "v1.LogsApi.submitLog": [
    new ServerConfiguration<{
      site:
        | "datadoghq.com"
        | "us3.datadoghq.com"
        | "us5.datadoghq.com"
        | "ap1.datadoghq.com"
        | "ap2.datadoghq.com"
        | "datadoghq.eu"
        | "ddog-gov.com";
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "http-intake.logs",
    }),
    new ServerConfiguration<{
      name: string;
      protocol: string;
    }>("{protocol}://{name}", {
      name: "http-intake.logs.datadoghq.com",
      protocol: "https",
    }),
    new ServerConfiguration<{
      site: string;
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "http-intake.logs",
    }),
  ],
  "v2.EventsApi.createEvent": [
    new ServerConfiguration<{
      site:
        | "datadoghq.com"
        | "us3.datadoghq.com"
        | "us5.datadoghq.com"
        | "ap1.datadoghq.com"
        | "datadoghq.eu"
        | "ddog-gov.com";
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "event-management-intake",
    }),
    new ServerConfiguration<{
      name: string;
      protocol: string;
    }>("{protocol}://{name}", {
      name: "event-management-intake.datadoghq.com",
      protocol: "https",
    }),
    new ServerConfiguration<{
      site: string;
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "event-management-intake",
    }),
  ],
  "v2.LogsApi.submitLog": [
    new ServerConfiguration<{
      site:
        | "datadoghq.com"
        | "us3.datadoghq.com"
        | "us5.datadoghq.com"
        | "ap1.datadoghq.com"
        | "ap2.datadoghq.com"
        | "datadoghq.eu"
        | "ddog-gov.com";
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "http-intake.logs",
    }),
    new ServerConfiguration<{
      name: string;
      protocol: string;
    }>("{protocol}://{name}", {
      name: "http-intake.logs.datadoghq.com",
      protocol: "https",
    }),
    new ServerConfiguration<{
      site: string;
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "http-intake.logs",
    }),
  ],
  "v2.OnCallPagingApi.acknowledgeOnCallPage": [
    new ServerConfiguration<{
      site:
        | "saffron.oncall.datadoghq.com"
        | "navy.oncall.datadoghq.com"
        | "coral.oncall.datadoghq.com"
        | "teal.oncall.datadoghq.com"
        | "beige.oncall.datadoghq.eu";
    }>("https://{site}", {
      site: "navy.oncall.datadoghq.com",
    }),
    new ServerConfiguration<{
      name: string;
      protocol: string;
    }>("{protocol}://{name}", {
      name: "api.datadoghq.com",
      protocol: "https",
    }),
    new ServerConfiguration<{
      site: string;
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "api",
    }),
  ],
  "v2.OnCallPagingApi.createOnCallPage": [
    new ServerConfiguration<{
      site:
        | "saffron.oncall.datadoghq.com"
        | "navy.oncall.datadoghq.com"
        | "coral.oncall.datadoghq.com"
        | "teal.oncall.datadoghq.com"
        | "beige.oncall.datadoghq.eu";
    }>("https://{site}", {
      site: "navy.oncall.datadoghq.com",
    }),
    new ServerConfiguration<{
      name: string;
      protocol: string;
    }>("{protocol}://{name}", {
      name: "api.datadoghq.com",
      protocol: "https",
    }),
    new ServerConfiguration<{
      site: string;
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "api",
    }),
  ],
  "v2.OnCallPagingApi.escalateOnCallPage": [
    new ServerConfiguration<{
      site:
        | "saffron.oncall.datadoghq.com"
        | "navy.oncall.datadoghq.com"
        | "coral.oncall.datadoghq.com"
        | "teal.oncall.datadoghq.com"
        | "beige.oncall.datadoghq.eu";
    }>("https://{site}", {
      site: "navy.oncall.datadoghq.com",
    }),
    new ServerConfiguration<{
      name: string;
      protocol: string;
    }>("{protocol}://{name}", {
      name: "api.datadoghq.com",
      protocol: "https",
    }),
    new ServerConfiguration<{
      site: string;
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "api",
    }),
  ],
  "v2.OnCallPagingApi.resolveOnCallPage": [
    new ServerConfiguration<{
      site:
        | "saffron.oncall.datadoghq.com"
        | "navy.oncall.datadoghq.com"
        | "coral.oncall.datadoghq.com"
        | "teal.oncall.datadoghq.com"
        | "beige.oncall.datadoghq.eu";
    }>("https://{site}", {
      site: "navy.oncall.datadoghq.com",
    }),
    new ServerConfiguration<{
      name: string;
      protocol: string;
    }>("{protocol}://{name}", {
      name: "api.datadoghq.com",
      protocol: "https",
    }),
    new ServerConfiguration<{
      site: string;
      subdomain: string;
    }>("https://{subdomain}.{site}", {
      site: "datadoghq.com",
      subdomain: "api",
    }),
  ],
};
