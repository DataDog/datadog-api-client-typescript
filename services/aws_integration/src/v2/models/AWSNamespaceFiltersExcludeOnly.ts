import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Exclude only these namespaces from metrics collection. Defaults to `["AWS/SQS", "AWS/ElasticMapReduce"]`.
 * `AWS/SQS` and `AWS/ElasticMapReduce` are excluded by default to reduce your AWS CloudWatch costs from `GetMetricData` API calls.
 */
export class AWSNamespaceFiltersExcludeOnly {
  /**
   * Exclude only these namespaces from metrics collection. Defaults to `["AWS/SQS", "AWS/ElasticMapReduce"]`.
   * `AWS/SQS` and `AWS/ElasticMapReduce` are excluded by default to reduce your AWS CloudWatch costs from `GetMetricData` API calls.
   */
  "excludeOnly": Array<string>;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSNamespaceFiltersExcludeOnly.attributeTypeMap;
  }

  public constructor() {}
}
