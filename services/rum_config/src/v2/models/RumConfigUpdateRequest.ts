import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumConfigUpdateData } from "./RumConfigUpdateData";

/**
 * Request body for updating the RUM configuration.
 */
export class RumConfigUpdateRequest {
  /**
   * Object describing the RUM configuration to update.
   */
  "data": RumConfigUpdateData;
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
      type: "RumConfigUpdateData",
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
    return RumConfigUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
