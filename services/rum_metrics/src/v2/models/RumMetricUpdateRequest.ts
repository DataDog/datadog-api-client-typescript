import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricUpdateData } from "./RumMetricUpdateData";

/**
 * The RUM-based metric update body.
 */
export class RumMetricUpdateRequest {
  /**
   * The RUM-based metric properties to update. `id` is required by the API and must match the `metric_id` path parameter.
   */
  "data": RumMetricUpdateData;
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
      type: "RumMetricUpdateData",
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
    return RumMetricUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
