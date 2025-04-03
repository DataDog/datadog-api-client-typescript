import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricBulkTagConfigCreate } from "./MetricBulkTagConfigCreate";

/**
 * Wrapper object for a single bulk tag configuration request.
 */
export class MetricBulkTagConfigCreateRequest {
  /**
   * Request object to bulk configure tags for metrics matching the given prefix.
   */
  "data": MetricBulkTagConfigCreate;
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
      type: "MetricBulkTagConfigCreate",
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
    return MetricBulkTagConfigCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
