import { createConfiguration } from "../../packages/datadog-api-client-common/configuration";
import {
  HttpLibrary,
  ResponseContext,
} from "../../packages/datadog-api-client-common/http/http";
import { UsageMeteringApi } from "../../packages/datadog-api-client-v1/apis/UsageMeteringApi";

// Simulates a runtime that cannot load lossless-json (Node.js 12 and 13).
jest.mock("lossless-json", () => {
  throw new SyntaxError("Unexpected token '.'");
});

class FakeHttpLibrary implements HttpLibrary {
  public constructor(private responseBody: string) {}

  public async send(): Promise<ResponseContext> {
    return new ResponseContext(
      200,
      { "content-type": "application/json" },
      {
        text: async () => this.responseBody,
        binary: async () => Buffer.from(this.responseBody),
      }
    );
  }
}

const usageSummary = `{"ingested_events_bytes_agg_sum": 9007199254740993}`;

describe("preserveLargeIntegers on a runtime that cannot load lossless-json", () => {
  test("parses responses as before when disabled", async () => {
    const httpApi = new FakeHttpLibrary(usageSummary);
    const api = new UsageMeteringApi(createConfiguration({ httpApi }));

    const response = await api.getUsageSummary({ startMonth: new Date(0) });

    expect(response.ingestedEventsBytesAggSum).toBe(9007199254740992);
  });

  test("fails with an explicit error when enabled", async () => {
    const httpApi = new FakeHttpLibrary(usageSummary);
    const api = new UsageMeteringApi(
      createConfiguration({ httpApi, preserveLargeIntegers: true })
    );

    await expect(api.getUsageSummary({ startMonth: new Date(0) })).rejects.toThrow(
      "preserveLargeIntegers requires Node.js 14 or later"
    );
  });
});
