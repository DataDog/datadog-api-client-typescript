import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The RUM-based metric filter. Events matching this filter will be aggregated in this metric. The `event_type` filter is added automatically.
 */
export class RumMetricFilter {
  /**
   * The search query, following the [RUM search syntax](https://docs.datadoghq.com/real_user_monitoring/explorer/search_syntax/).
   * Do not include a `@type` filter, it is derived from `event_type`.
   * It must not contain invisible or control characters such as non-breaking or zero-width spaces.
   * When updating a metric, an empty query leaves the filter unchanged.
   */
  "query": string;
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
    return RumMetricFilter.attributeTypeMap;
  }

  public constructor() {}
}
