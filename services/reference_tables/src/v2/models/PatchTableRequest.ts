import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchTableRequestData } from "./PatchTableRequestData";

/**
 * The definition of `PatchTableRequest` object.
 */
export class PatchTableRequest {
  /**
   * The definition of `PatchTableRequestData` object.
   */
  "data"?: PatchTableRequestData;
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
      type: "PatchTableRequestData",
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
    return PatchTableRequest.attributeTypeMap;
  }

  public constructor() {}
}
