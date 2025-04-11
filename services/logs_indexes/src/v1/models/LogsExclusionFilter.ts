import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Exclusion filter is defined by a query, a sampling rule, and a active/inactive toggle.
 */
export class LogsExclusionFilter {
  /**
   * Default query is `*`, meaning all logs flowing in the index would be excluded.
   * Scope down exclusion filter to only a subset of logs with a log query.
   */
  "query"?: string;
  /**
   * Sample rate to apply to logs going through this exclusion filter,
   * a value of 1.0 excludes all logs matching the query.
   */
  "sampleRate": number;
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
    query: {
      baseName: "query",
      type: "string",
    },
    sampleRate: {
      baseName: "sample_rate",
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
    return LogsExclusionFilter.attributeTypeMap;
  }

  public constructor() {}
}
