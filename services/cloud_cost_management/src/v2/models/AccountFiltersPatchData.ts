import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccountFiltersPatchRequestAttributes } from "./AccountFiltersPatchRequestAttributes";
import { AccountFiltersPatchRequestType } from "./AccountFiltersPatchRequestType";

/**
 * Account filters patch data.
 */
export class AccountFiltersPatchData {
  /**
   * Attributes for an account filters patch request.
   */
  "attributes": AccountFiltersPatchRequestAttributes;
  /**
   * Type of account filters patch request.
   */
  "type": AccountFiltersPatchRequestType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "AccountFiltersPatchRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AccountFiltersPatchRequestType",
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
    return AccountFiltersPatchData.attributeTypeMap;
  }

  public constructor() {}
}
