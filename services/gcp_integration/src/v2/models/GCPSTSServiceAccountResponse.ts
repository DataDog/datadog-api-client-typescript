import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPSTSServiceAccount } from "./GCPSTSServiceAccount";

/**
 * The account creation response.
 */
export class GCPSTSServiceAccountResponse {
  /**
   * Info on your service account.
   */
  "data"?: GCPSTSServiceAccount;
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
      type: "GCPSTSServiceAccount",
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
    return GCPSTSServiceAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
