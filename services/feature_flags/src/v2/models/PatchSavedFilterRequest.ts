import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchSavedFilterData } from "./PatchSavedFilterData";

/**
 * Request to partially update a saved filter.
 */
export class PatchSavedFilterRequest {
  /**
   * The saved filter fields to update.
   */
  "data": PatchSavedFilterData;
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
      type: "PatchSavedFilterData",
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
    return PatchSavedFilterRequest.attributeTypeMap;
  }

  public constructor() {}
}
