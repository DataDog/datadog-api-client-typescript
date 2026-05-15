import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppProtectionLevelRequestData } from "./UpdateAppProtectionLevelRequestData";

/**
 * A request to update an app's publication protection level.
 */
export class UpdateAppProtectionLevelRequest {
  /**
   * Data for updating an app's publication protection level.
   */
  "data"?: UpdateAppProtectionLevelRequestData;
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
      type: "UpdateAppProtectionLevelRequestData",
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
    return UpdateAppProtectionLevelRequest.attributeTypeMap;
  }

  public constructor() {}
}
