import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPServiceAccountCredentialType } from "./GCPServiceAccountCredentialType";
import { GCPServiceAccountUpdatePrivateKey } from "./GCPServiceAccountUpdatePrivateKey";
import { GCPServiceAccountUpdateServiceAccountEmail } from "./GCPServiceAccountUpdateServiceAccountEmail";

/**
 * The definition of the `GCPServiceAccount` object.
 */
export class GCPServiceAccountUpdate {
  /**
   * The `GCPServiceAccountUpdate` `private_key`.
   */
  "privateKey"?: GCPServiceAccountUpdatePrivateKey;
  /**
   * The `GCPServiceAccountUpdate` `service_account_email`.
   */
  "serviceAccountEmail"?: GCPServiceAccountUpdateServiceAccountEmail;
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
      type: "GCPServiceAccountUpdatePrivateKey",
    },
    serviceAccountEmail: {
      baseName: "service_account_email",
      type: "GCPServiceAccountUpdateServiceAccountEmail",
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
