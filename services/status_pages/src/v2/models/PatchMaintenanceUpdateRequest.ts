import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchMaintenanceUpdateRequestData } from "./PatchMaintenanceUpdateRequestData";

/**
 * Request object for editing a maintenance update.
 */
export class PatchMaintenanceUpdateRequest {
  /**
   * The data object for editing a maintenance update.
   */
  "data"?: PatchMaintenanceUpdateRequestData;
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
      type: "PatchMaintenanceUpdateRequestData",
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
    return PatchMaintenanceUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
