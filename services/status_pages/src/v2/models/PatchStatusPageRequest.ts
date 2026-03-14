import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchStatusPageRequestData } from "./PatchStatusPageRequestData";

/**
 * Request object for updating a status page.
 */
export class PatchStatusPageRequest {
  /**
   * The data object for updating a status page.
   */
  "data"?: PatchStatusPageRequestData;
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
      type: "PatchStatusPageRequestData",
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
    return PatchStatusPageRequest.attributeTypeMap;
  }

  public constructor() {}
}
