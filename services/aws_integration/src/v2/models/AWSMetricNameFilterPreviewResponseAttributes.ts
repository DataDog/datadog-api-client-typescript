import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSMetricNameFilterPreviewNamespace } from "./AWSMetricNameFilterPreviewNamespace";

/**
 * AWS metric name filter preview response attributes.
 */
export class AWSMetricNameFilterPreviewResponseAttributes {
  /**
   * The list of namespaces affected by the previewed metric name filters.
   */
  "namespaces": Array<AWSMetricNameFilterPreviewNamespace>;
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
    namespaces: {
      baseName: "namespaces",
      type: "Array<AWSMetricNameFilterPreviewNamespace>",
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
    return AWSMetricNameFilterPreviewResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
