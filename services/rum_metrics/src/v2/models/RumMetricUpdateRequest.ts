import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricUpdateData } from "./RumMetricUpdateData";

/**
 * The new rum-based metric body.
 */
export class RumMetricUpdateRequest {
  /**
   * The new rum-based metric properties.
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
