import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricBulkTagConfigStatus } from "./MetricBulkTagConfigStatus";

/**
 * Wrapper for a single bulk tag configuration status response.
 */
export class MetricBulkTagConfigResponse {
  /**
   * The status of a request to bulk configure metric tags.
   * It contains the fields from the original request for reference.
   */
  "data"?: MetricBulkTagConfigStatus;
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
      type: "MetricBulkTagConfigStatus",
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
    return MetricBulkTagConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
