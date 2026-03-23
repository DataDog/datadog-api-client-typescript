import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * OCI API signing key credentials used to authenticate the Datadog integration with the OCI tenancy.
 */
export class CreateTenancyConfigDataAttributesAuthCredentials {
  /**
   * The fingerprint of the OCI API signing key used for authentication.
   */
  "fingerprint"?: string;
  /**
   * The PEM-encoded private key corresponding to the OCI API signing key fingerprint.
   */
  "privateKey": string;
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
    fingerprint: {
      baseName: "fingerprint",
      type: "string",
    },
    privateKey: {
      baseName: "private_key",
      type: "string",
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
    return CreateTenancyConfigDataAttributesAuthCredentials.attributeTypeMap;
  }

  public constructor() {}
}
