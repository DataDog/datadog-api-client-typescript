import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Global query options that are used during the query.
 * Note: You should only supply timezone or time offset but not both otherwise the query will fail.
 */
export class SpansQueryOptions {
  /**
   * The time offset (in seconds) to apply to the query.
   */
  "timeOffset"?: number;
  /**
   * The timezone can be specified as GMT, UTC, an offset from UTC (like UTC+1), or as a Timezone Database identifier (like America/New_York).
   */
  "timezone"?: string;
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
    timeOffset: {
      baseName: "timeOffset",
      type: "number",
      format: "int64",
    },
    timezone: {
      baseName: "timezone",
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
    return SpansQueryOptions.attributeTypeMap;
  }

  public constructor() {}
}
