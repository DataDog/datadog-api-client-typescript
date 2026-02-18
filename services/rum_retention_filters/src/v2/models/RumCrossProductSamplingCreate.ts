import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for cross-product sampling when creating a retention filter.
 */
export class RumCrossProductSamplingCreate {
  /**
   * Indicates whether trace cross-product sampling is enabled.
   */
  "traceEnabled"?: boolean;
  /**
   * The percentage (0-100) of retained sessions with ingested traces whose traces are indexed.
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
