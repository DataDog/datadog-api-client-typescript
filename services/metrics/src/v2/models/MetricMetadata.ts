import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricOrigin } from "./MetricOrigin";

/**
 * Metadata for the metric.
 */
export class MetricMetadata {
  /**
   * Metric origin information.
   */
  "origin"?: MetricOrigin;
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
    origin: {
      baseName: "origin",
      type: "MetricOrigin",
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
    return MetricMetadata.attributeTypeMap;
  }

  public constructor() {}
}
