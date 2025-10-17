import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseUpdateCustomAttribute } from "./CaseUpdateCustomAttribute";

/**
 * Case update custom attribute request
 */
export class CaseUpdateCustomAttributeRequest {
  /**
   * Case update custom attribute
   */
  "data": CaseUpdateCustomAttribute;
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
      type: "CaseUpdateCustomAttribute",
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
    return CaseUpdateCustomAttributeRequest.attributeTypeMap;
  }

  public constructor() {}
}
