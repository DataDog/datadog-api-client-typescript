import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines a rate limit for a trigger.
 */
export class TriggerRateLimit {
  /**
   * The `TriggerRateLimit` `count`.
   */
  "count"?: number;
  /**
   * The `TriggerRateLimit` `interval`. The expected format is the number of seconds ending with an s. For example, 1 day is 86400s
   */
  "interval"?: string;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    interval: {
      baseName: "interval",
      type: "string",
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
    return TriggerRateLimit.attributeTypeMap;
  }

  public constructor() {}
}
