import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricBulkTagConfigDelete } from "./MetricBulkTagConfigDelete";

/**
 * Wrapper object for a single bulk tag deletion request.
 */
export class MetricBulkTagConfigDeleteRequest {
  /**
   * Request object to bulk delete all tag configurations for metrics matching the given prefix.
   */
  "data": MetricBulkTagConfigDelete;
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
    data: {
      baseName: "data",
      type: "MetricBulkTagConfigDelete",
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
    return MetricBulkTagConfigDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
