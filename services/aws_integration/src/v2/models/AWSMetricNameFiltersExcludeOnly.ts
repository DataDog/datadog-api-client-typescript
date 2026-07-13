import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Exclude metric names matching one of these patterns for a single namespace.
 */
export class AWSMetricNameFiltersExcludeOnly {
  /**
   * Exclude metric names matching one of these patterns.
   */
  "excludeOnly": Array<string>;
  /**
   * The AWS CloudWatch namespace to which this metric name filter applies.
   */
  "namespace": string;
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
    excludeOnly: {
      baseName: "exclude_only",
      type: "Array<string>",
      required: true,
    },
    namespace: {
      baseName: "namespace",
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
    return AWSMetricNameFiltersExcludeOnly.attributeTypeMap;
  }

  public constructor() {}
}
