import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Unix-millisecond time range for filtering analytics data.
 */
export class LLMObsExperimentationAnalyticsTimeRange {
  /**
   * Start of the time range in milliseconds since Unix epoch.
   */
  "from": number;
  /**
   * End of the time range in milliseconds since Unix epoch.
   */
  "to": number;
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
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
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
    return LLMObsExperimentationAnalyticsTimeRange.attributeTypeMap;
  }

  public constructor() {}
}
