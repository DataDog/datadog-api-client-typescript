import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMApplicationUpdate } from "./RUMApplicationUpdate";

/**
 * RUM application update request.
 */
export class RUMApplicationUpdateRequest {
  /**
   * RUM application update.
   */
  "data": RUMApplicationUpdate;
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
      type: "RUMApplicationUpdate",
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
    return RUMApplicationUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
