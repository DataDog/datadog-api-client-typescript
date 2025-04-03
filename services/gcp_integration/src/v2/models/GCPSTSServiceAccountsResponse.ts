import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPSTSServiceAccount } from "./GCPSTSServiceAccount";

/**
 * Object containing all your STS enabled accounts.
 */
export class GCPSTSServiceAccountsResponse {
  /**
   * Array of GCP STS enabled service accounts.
   */
  "data"?: Array<GCPSTSServiceAccount>;
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
      type: "Array<GCPSTSServiceAccount>",
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
    return GCPSTSServiceAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
