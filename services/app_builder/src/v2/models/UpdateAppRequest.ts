import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppRequestData } from "./UpdateAppRequestData";

/**
 * A request object for updating an existing app.
 */
export class UpdateAppRequest {
  /**
   * The data object containing the new app definition. Any fields not included in the request remain unchanged.
   */
  "data"?: UpdateAppRequestData;
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
      type: "UpdateAppRequestData",
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
    return UpdateAppRequest.attributeTypeMap;
  }

  public constructor() {}
}
