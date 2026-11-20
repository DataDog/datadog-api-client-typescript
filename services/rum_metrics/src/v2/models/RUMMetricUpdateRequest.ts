import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMMetricUpdateData } from "./RUMMetricUpdateData";

/**
 * The RUM-based metric update body.
 */
export class RUMMetricUpdateRequest {
  /**
   * The RUM-based metric properties to update. `id` is required by the API and must match the `metric_id` path parameter.
   */
  "data": RUMMetricUpdateData;
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
      type: "RUMMetricUpdateData",
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
    return RUMMetricUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
