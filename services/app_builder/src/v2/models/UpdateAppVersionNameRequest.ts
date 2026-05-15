import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppVersionNameRequestData } from "./UpdateAppVersionNameRequestData";

/**
 * A request to assign a human-readable name to a specific app version.
 */
export class UpdateAppVersionNameRequest {
  /**
   * Data for naming a specific app version.
   */
  "data"?: UpdateAppVersionNameRequestData;
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
      type: "UpdateAppVersionNameRequestData",
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
    return UpdateAppVersionNameRequest.attributeTypeMap;
  }

  public constructor() {}
}
