import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The configuration for cross-product retention filters.
 */
export class RumCrossProductSamplingCreate {
  /**
   * Whether the cross-product retention filter for APM traces is enabled.
   */
  "traceEnabled"?: boolean;
  /**
   * The sample rate for the APM cross-product retention filter, between 0 and 100.
   */
  "traceSampleRate": number;
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
    traceEnabled: {
      baseName: "trace_enabled",
      type: "boolean",
    },
    traceSampleRate: {
      baseName: "trace_sample_rate",
      type: "number",
      required: true,
      format: "double",
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
    return RumCrossProductSamplingCreate.attributeTypeMap;
  }

  public constructor() {}
}
