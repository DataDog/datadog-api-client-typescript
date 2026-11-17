import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { AiGatewayRateLimitWindowLimitMetric } from "./AiGatewayRateLimitWindowLimitMetric";
import { AiGatewayRateLimitWindowLimitWindow } from "./AiGatewayRateLimitWindowLimitWindow";

/**
 * A limit on one metric over a rolling window longer than a minute.
 */
export class AiGatewayRateLimitWindowLimit {
  /**
   * Maximum amount of the metric over the window. For `cost`, the amount is priced spend in microcents of 1e-8 USD each, as in `cost_microcents_per_minute`. For the same metric, a longer window must have a larger amount.
   */
  "amount": number;
  /**
   * The metric that a window limit counts. `cost` counts priced spend in microcents.
   */
  "metric": AiGatewayRateLimitWindowLimitMetric;
  /**
   * The rolling window that a limit applies to. For per-minute limits, use the `*_per_minute` fields instead.
   */
  "window": AiGatewayRateLimitWindowLimitWindow;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    amount: {
      baseName: "amount",
      type: "number",
      required: true,
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "AiGatewayRateLimitWindowLimitMetric",
      required: true,
    },
    window: {
      baseName: "window",
      type: "AiGatewayRateLimitWindowLimitWindow",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayRateLimitWindowLimit.attributeTypeMap;
  }

  public constructor() {}
}
