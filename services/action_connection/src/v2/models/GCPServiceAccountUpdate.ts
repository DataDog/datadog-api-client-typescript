import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPServiceAccountCredentialType } from "./GCPServiceAccountCredentialType";

/**
 * The definition of the `GCPServiceAccount` object.
 */
export class GCPServiceAccountUpdate {
  /**
   * The `GCPServiceAccountUpdate` `private_key`.
   */
  "privateKey"?: string;
  /**
   * The `GCPServiceAccountUpdate` `service_account_email`.
   */
  "serviceAccountEmail"?: string;
  /**
   * The definition of the `GCPServiceAccount` object.
   */
  "type": GCPServiceAccountCredentialType;
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
    privateKey: {
      baseName: "private_key",
      type: "string",
    },
    serviceAccountEmail: {
      baseName: "service_account_email",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GCPServiceAccountCredentialType",
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
    return GCPServiceAccountUpdate.attributeTypeMap;
  }

  public constructor() {}
}
