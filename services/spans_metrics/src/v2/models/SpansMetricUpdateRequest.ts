import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansMetricUpdateData } from "./SpansMetricUpdateData";

/**
 * The new span-based metric body.
 */
export class SpansMetricUpdateRequest {
  /**
   * The new span-based metric properties.
   */
  "data": SpansMetricUpdateData;
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
      type: "SpansMetricUpdateData",
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
    return SpansMetricUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
