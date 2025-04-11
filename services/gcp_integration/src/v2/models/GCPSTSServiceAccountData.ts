import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPServiceAccountType } from "./GCPServiceAccountType";
import { GCPSTSServiceAccountAttributes } from "./GCPSTSServiceAccountAttributes";

/**
 * Additional metadata on your generated service account.
 */
export class GCPSTSServiceAccountData {
  /**
   * Attributes associated with your service account.
   */
  "attributes"?: GCPSTSServiceAccountAttributes;
  /**
   * The type of account.
   */
  "type"?: GCPServiceAccountType;
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
    attributes: {
      baseName: "attributes",
      type: "GCPSTSServiceAccountAttributes",
    },
    type: {
      baseName: "type",
      type: "GCPServiceAccountType",
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
    return GCPSTSServiceAccountData.attributeTypeMap;
  }

  public constructor() {}
}
