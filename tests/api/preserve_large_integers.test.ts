import { createConfiguration } from "../../packages/datadog-api-client-common/configuration";
import { ApiException } from "../../packages/datadog-api-client-common/exception";
import {
  HttpLibrary,
  RequestContext,
  ResponseContext,
} from "../../packages/datadog-api-client-common/http/http";
import { HostsApi } from "../../packages/datadog-api-client-v1/apis/HostsApi";
import { MetricsApi } from "../../packages/datadog-api-client-v1/apis/MetricsApi";
import { UsageMeteringApi } from "../../packages/datadog-api-client-v1/apis/UsageMeteringApi";

class FakeHttpLibrary implements HttpLibrary {
  public requests: RequestContext[] = [];

  public constructor(
    private responseBody: string,
    private status = 200
  ) {}

  public async send(request: RequestContext): Promise<ResponseContext> {
    this.requests.push(request);
    return new ResponseContext(
      this.status,
      { "content-type": "application/json" },
      {
        text: async () => this.responseBody,
        binary: async () => Buffer.from(this.responseBody),
      }
    );
  }
}

const usageSummary = `{
  "ingested_events_bytes_agg_sum": 9007199254740993,
  "custom_ts_sum": 42,
  "avg_profiled_fargate_tasks_sum": 1.5,
  "usage": [{ "agent_host_top99p": 3 }],
  "future_bytes_agg_sum": 9007199254740995,
  "future_count": 7
}`;

describe("preserveLargeIntegers", () => {
  test("rounds integers above Number.MAX_SAFE_INTEGER by default", async () => {
    const httpApi = new FakeHttpLibrary(usageSummary);
    const api = new UsageMeteringApi(createConfiguration({ httpApi }));

    const response = await api.getUsageSummary({ startMonth: new Date(0) });

    expect(response.ingestedEventsBytesAggSum).toBe(9007199254740992);
  });

  test("returns every int64 field as bigint when enabled", async () => {
    const httpApi = new FakeHttpLibrary(usageSummary);
    const api = new UsageMeteringApi(
      createConfiguration({ httpApi, preserveLargeIntegers: true })
    );

    const response = await api.getUsageSummary({ startMonth: new Date(0) });

    expect(response.ingestedEventsBytesAggSum).toBe(BigInt("9007199254740993"));
    expect(response.customTsSum).toBe(BigInt(42));
    expect(response.usage?.[0].agentHostTop99p).toBe(BigInt(3));
  });

  test("keeps non-integer int64 values and untyped values up to Number.MAX_SAFE_INTEGER as number when enabled", async () => {
    const httpApi = new FakeHttpLibrary(usageSummary);
    const api = new UsageMeteringApi(
      createConfiguration({ httpApi, preserveLargeIntegers: true })
    );

    const response = await api.getUsageSummary({ startMonth: new Date(0) });

    expect(response.avgProfiledFargateTasksSum).toBe(1.5);
    expect(response.additionalProperties?.["future_count"]).toBe(7);
    expect(response.additionalProperties?.["future_bytes_agg_sum"]).toBe(
      BigInt("9007199254740995")
    );
  });

  test("keeps fields that are not int64 as number when enabled", async () => {
    const httpApi = new FakeHttpLibrary(
      `{"series": [{"unit": [{"id": 5, "scale_factor": 1}, null]}]}`
    );
    const api = new MetricsApi(
      createConfiguration({ httpApi, preserveLargeIntegers: true })
    );

    const response = await api.queryMetrics({ from: 0, to: 1, query: "q" });

    const unit = response.series?.[0].unit?.[0];
    expect(unit?.id).toBe(BigInt(5));
    expect(unit?.scaleFactor).toBe(1);
  });

  test("parses responses with duplicate keys like JSON.parse when enabled", async () => {
    const httpApi = new FakeHttpLibrary(
      '{"custom_ts_sum": 1, "custom_ts_sum": 2}'
    );
    const api = new UsageMeteringApi(
      createConfiguration({ httpApi, preserveLargeIntegers: true })
    );

    const response = await api.getUsageSummary({ startMonth: new Date(0) });

    expect(response.customTsSum).toBe(BigInt(2));
  });

  test("can be enabled per request", async () => {
    const httpApi = new FakeHttpLibrary(usageSummary);
    const api = new UsageMeteringApi(createConfiguration({ httpApi }));

    const response = await api.getUsageSummary(
      { startMonth: new Date(0) },
      createConfiguration({ httpApi, preserveLargeIntegers: true })
    );

    expect(response.ingestedEventsBytesAggSum).toBe(BigInt("9007199254740993"));
  });

  test("serializes bigint request values exactly when enabled", async () => {
    const httpApi = new FakeHttpLibrary("{}");
    const api = new HostsApi(
      createConfiguration({ httpApi, preserveLargeIntegers: true })
    );

    await api.muteHost({
      hostName: "host",
      body: { end: BigInt("9007199254740993") as unknown as number },
    });

    expect(httpApi.requests[0].getBody()).toBe('{"end":9007199254740993}');
  });

  test("throws ApiException for error responses with large integers when enabled", async () => {
    const httpApi = new FakeHttpLibrary(
      '{"errors": ["Bad Request"], "id": 9007199254740993}',
      400
    );
    const api = new HostsApi(
      createConfiguration({ httpApi, preserveLargeIntegers: true })
    );

    const error = await api
      .muteHost({ hostName: "host", body: {} })
      .catch((e) => e);

    expect(error).toBeInstanceOf(ApiException);
    expect(error.code).toBe(400);
    expect(error.body.additionalProperties.id).toBe(BigInt("9007199254740993"));
    expect(error.message).toContain("9007199254740993");
  });
});
