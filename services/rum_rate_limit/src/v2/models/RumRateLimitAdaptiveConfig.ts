import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * The configuration used when `mode` is `adaptive`.
 */
export class RumRateLimitAdaptiveConfig {
  /**
   * The maximum fraction of sessions to retain, in the range `(0, 1]`.
   */
  "maxRetentionRate": number;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    maxRetentionRate: {
      baseName: "max_retention_rate",
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
    return RumRateLimitAdaptiveConfig.attributeTypeMap;
  }

  public constructor() {}
}
