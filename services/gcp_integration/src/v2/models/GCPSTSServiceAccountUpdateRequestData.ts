import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPServiceAccountType } from "./GCPServiceAccountType";
import { GCPSTSServiceAccountAttributes } from "./GCPSTSServiceAccountAttributes";

/**
 * Data on your service account.
 */
export class GCPSTSServiceAccountUpdateRequestData {
  /**
   * Attributes associated with your service account.
   */
  "attributes"?: GCPSTSServiceAccountAttributes;
  /**
   * Your service account's unique ID.
   */
  "id"?: string;
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
    id: {
      baseName: "id",
      type: "string",
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
    return GCPSTSServiceAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
