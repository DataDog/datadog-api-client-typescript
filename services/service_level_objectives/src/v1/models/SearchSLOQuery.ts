import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A metric-based SLO. **Required if type is `metric`**. Note that Datadog only allows the sum by aggregator
 * to be used because this will sum up all request counts instead of averaging them, or taking the max or
 * min of all of those requests.
 */
export class SearchSLOQuery {
  /**
   * A Datadog metric query for total (valid) events.
   */
  "denominator"?: string;
  /**
   * Metric names used in the query's numerator and denominator.
   * This field will return null and will be implemented in the next version of this endpoint.
   */
  "metrics"?: Array<string>;
  /**
   * A Datadog metric query for good events.
   */
  "numerator"?: string;
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
    denominator: {
      baseName: "denominator",
      type: "string",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
    },
    numerator: {
      baseName: "numerator",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SearchSLOQuery.attributeTypeMap;
  }

  public constructor() {}
}
