import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A count-based (metric) SLO query. This field is superseded by `sli_specification` but is retained for backwards compatibility. Note that Datadog only allows the sum by aggregator
 * to be used because this will sum up all request counts instead of averaging them, or taking the max or
 * min of all of those requests.
 */
export class ServiceLevelObjectiveQuery {
  /**
   * A Datadog metric query for total (valid) events.
   */
  "denominator": string;
  /**
   * A Datadog metric query for good events.
   */
  "numerator": string;
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
      required: true,
    },
    numerator: {
      baseName: "numerator",
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
    return ServiceLevelObjectiveQuery.attributeTypeMap;
  }

  public constructor() {}
}
