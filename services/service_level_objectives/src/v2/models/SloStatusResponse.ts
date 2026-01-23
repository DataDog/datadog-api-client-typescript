import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SloStatusData } from "./SloStatusData";

/**
 * The SLO status response.
 */
export class SloStatusResponse {
  /**
   * The data portion of the SLO status response.
   */
  "data": SloStatusData;
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
      type: "SloStatusData",
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
    return SloStatusResponse.attributeTypeMap;
  }

  public constructor() {}
}
