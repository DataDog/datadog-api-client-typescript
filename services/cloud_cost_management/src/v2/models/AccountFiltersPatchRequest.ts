import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccountFiltersPatchData } from "./AccountFiltersPatchData";

/**
 * Account filters patch request.
 */
export class AccountFiltersPatchRequest {
  /**
   * Account filters patch data.
   */
  "data": AccountFiltersPatchData;
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
    data: {
      baseName: "data",
      type: "AccountFiltersPatchData",
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
    return AccountFiltersPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
