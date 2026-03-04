import {
  RequestContext,
  HttpMethod,
} from "../../packages/datadog-api-client-common/";
import {
  BearerAuthAuthentication,
  ApiKeyAuthAuthentication,
  AppKeyAuthAuthentication,
  configureAuthMethods,
} from "../../packages/datadog-api-client-common/auth";
import {
  createConfiguration,
  applySecurityAuthentication,
} from "../../packages/datadog-api-client-common/configuration";

describe("BearerAuthAuthentication", () => {
  it("should set Authorization Bearer header", () => {
    const auth = new BearerAuthAuthentication("ddpat_test_token_123");
    const ctx = new RequestContext("https://example.com", HttpMethod.GET);
    auth.applySecurityAuthentication(ctx);
    expect(ctx.getHeaders()["Authorization"]).toBe(
      "Bearer ddpat_test_token_123"
    );
  });

  it("should return correct name", () => {
    const auth = new BearerAuthAuthentication("token");
    expect(auth.getName()).toBe("bearerAuth");
  });
});

describe("configureAuthMethods", () => {
  it("should configure bearerAuth when provided", () => {
    const methods = configureAuthMethods({
      bearerAuth: "ddpat_my_pat",
    });
    expect(methods.bearerAuth).toBeDefined();
    expect(methods.bearerAuth!.getName()).toBe("bearerAuth");
  });

  it("should configure all auth methods together", () => {
    const methods = configureAuthMethods({
      apiKeyAuth: "api_key",
      appKeyAuth: "app_key",
      bearerAuth: "ddpat_pat",
    });
    expect(methods.apiKeyAuth).toBeDefined();
    expect(methods.appKeyAuth).toBeDefined();
    expect(methods.bearerAuth).toBeDefined();
  });
});

describe("createConfiguration with bearer auth", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should read DD_BEARER_TOKEN env var", () => {
    process.env.DD_BEARER_TOKEN = "ddpat_env_pat";
    const config = createConfiguration();
    expect(config.authMethods.bearerAuth).toBeDefined();
  });

  it("should not override explicit bearerAuth config", () => {
    process.env.DD_BEARER_TOKEN = "ddpat_env_pat";
    const config = createConfiguration({
      authMethods: {
        bearerAuth: "ddpat_explicit_pat",
      },
    });
    const ctx = new RequestContext("https://example.com", HttpMethod.GET);
    config.authMethods.bearerAuth!.applySecurityAuthentication(ctx);
    expect(ctx.getHeaders()["Authorization"]).toBe(
      "Bearer ddpat_explicit_pat"
    );
  });
});

describe("applySecurityAuthentication with bearer auth", () => {
  it("should send Bearer header when only bearerAuth is configured", () => {
    const config = createConfiguration({
      authMethods: {
        bearerAuth: "ddpat_test_pat",
      },
    });
    const ctx = new RequestContext("https://example.com", HttpMethod.GET);
    applySecurityAuthentication(config, ctx, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);
    expect(ctx.getHeaders()["Authorization"]).toBe("Bearer ddpat_test_pat");
    expect(ctx.getHeaders()["DD-API-KEY"]).toBeUndefined();
    expect(ctx.getHeaders()["DD-APPLICATION-KEY"]).toBeUndefined();
  });

  it("should send all auth headers when all are configured", () => {
    const config = createConfiguration({
      authMethods: {
        apiKeyAuth: "test_api_key",
        appKeyAuth: "test_app_key",
        bearerAuth: "ddpat_test_pat",
      },
    });
    const ctx = new RequestContext("https://example.com", HttpMethod.GET);
    applySecurityAuthentication(config, ctx, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);
    expect(ctx.getHeaders()["Authorization"]).toBe("Bearer ddpat_test_pat");
    expect(ctx.getHeaders()["DD-API-KEY"]).toBe("test_api_key");
    expect(ctx.getHeaders()["DD-APPLICATION-KEY"]).toBe("test_app_key");
  });

  it("should use API key + app key when bearerAuth is not configured", () => {
    const config = createConfiguration({
      authMethods: {
        apiKeyAuth: "test_api_key",
        appKeyAuth: "test_app_key",
      },
    });
    const ctx = new RequestContext("https://example.com", HttpMethod.GET);
    applySecurityAuthentication(config, ctx, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);
    expect(ctx.getHeaders()["DD-API-KEY"]).toBe("test_api_key");
    expect(ctx.getHeaders()["DD-APPLICATION-KEY"]).toBe("test_app_key");
    expect(ctx.getHeaders()["Authorization"]).toBeUndefined();
  });

  it("should use only API key when only apiKeyAuth is required and no bearer auth", () => {
    const config = createConfiguration({
      authMethods: {
        apiKeyAuth: "test_api_key",
      },
    });
    const ctx = new RequestContext("https://example.com", HttpMethod.GET);
    applySecurityAuthentication(config, ctx, ["apiKeyAuth"]);
    expect(ctx.getHeaders()["DD-API-KEY"]).toBe("test_api_key");
    expect(ctx.getHeaders()["Authorization"]).toBeUndefined();
  });
});
