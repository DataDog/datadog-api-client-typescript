import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPSTSServiceAccountUpdateRequestData } from "./GCPSTSServiceAccountUpdateRequestData";

/**
 * Service account info.
 */
export class GCPSTSServiceAccountUpdateRequest {
  /**
   * Data on your service account.
   */
  "data"?: GCPSTSServiceAccountUpdateRequestData;
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
      type: "GCPSTSServiceAccountUpdateRequestData",
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
    return GCPSTSServiceAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
