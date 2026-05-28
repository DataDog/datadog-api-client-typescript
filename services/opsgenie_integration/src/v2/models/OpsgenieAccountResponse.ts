import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieAccountResponseData } from "./OpsgenieAccountResponseData";

/**
 * Response containing an Opsgenie account.
 */
export class OpsgenieAccountResponse {
  /**
   * Opsgenie account data from a response.
   */
  "data": OpsgenieAccountResponseData;
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
      type: "OpsgenieAccountResponseData",
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
    return OpsgenieAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
