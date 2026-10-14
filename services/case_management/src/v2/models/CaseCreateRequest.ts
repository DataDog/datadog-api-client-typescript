import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseCreate } from "./CaseCreate";

/**
 * Work item create request
 */
export class CaseCreateRequest {
  /**
   * Work item creation data
   */
  "data": CaseCreate;
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
      type: "CaseCreate",
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
    return CaseCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
