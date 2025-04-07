import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPSTSServiceAccountData } from "./GCPSTSServiceAccountData";

/**
 * Data on your newly generated service account.
 */
export class GCPSTSServiceAccountCreateRequest {
  /**
   * Additional metadata on your generated service account.
   */
  "data"?: GCPSTSServiceAccountData;
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
      type: "GCPSTSServiceAccountData",
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
    return GCPSTSServiceAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
