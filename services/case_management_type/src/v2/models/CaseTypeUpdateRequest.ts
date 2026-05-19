import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseTypeUpdate } from "./CaseTypeUpdate";

/**
 * Request payload for updating a case type.
 */
export class CaseTypeUpdateRequest {
  /**
   * Data object for updating a case type.
   */
  "data": CaseTypeUpdate;
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
      type: "CaseTypeUpdate",
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
    return CaseTypeUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
