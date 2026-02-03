import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class CreateTenancyConfigDataAttributesAuthCredentials {
  "fingerprint"?: string;
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
