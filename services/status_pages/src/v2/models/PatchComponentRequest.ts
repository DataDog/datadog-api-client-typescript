import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchComponentRequestData } from "./PatchComponentRequestData";

/**
 * Request object for updating a component.
 */
export class PatchComponentRequest {
  /**
   * The data object for updating a component.
   */
  "data"?: PatchComponentRequestData;
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
      type: "PatchComponentRequestData",
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
    return PatchComponentRequest.attributeTypeMap;
  }

  public constructor() {}
}
