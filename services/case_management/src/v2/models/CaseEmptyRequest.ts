import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseEmpty } from "./CaseEmpty";

/**
 * Case empty request
 */
export class CaseEmptyRequest {
  /**
   * Case empty request data
   */
  "data": CaseEmpty;
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
      type: "CaseEmpty",
      required: true,
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
    return CaseEmptyRequest.attributeTypeMap;
  }

  public constructor() {}
}
