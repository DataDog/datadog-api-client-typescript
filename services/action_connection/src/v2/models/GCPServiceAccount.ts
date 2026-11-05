import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPServiceAccountCredentialType } from "./GCPServiceAccountCredentialType";
import { GCPServiceAccountPrivateKey } from "./GCPServiceAccountPrivateKey";
import { GCPServiceAccountServiceAccountEmail } from "./GCPServiceAccountServiceAccountEmail";

/**
 * The definition of the `GCPServiceAccount` object.
 */
export class GCPServiceAccount {
  /**
   * The `GCPServiceAccount` `private_key`.
   */
  "privateKey": GCPServiceAccountPrivateKey;
  /**
   * The `GCPServiceAccount` `service_account_email`.
   */
  "serviceAccountEmail": GCPServiceAccountServiceAccountEmail;
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
      type: "GCPServiceAccountPrivateKey",
      required: true,
    },
    serviceAccountEmail: {
      baseName: "service_account_email",
      type: "GCPServiceAccountServiceAccountEmail",
      required: true,
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
    return GCPServiceAccount.attributeTypeMap;
  }

  public constructor() {}
}
