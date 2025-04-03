import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Authentication config to integrate your account using an IAM role.
 */
export class AWSAuthConfigRole {
  /**
   * AWS IAM External ID for associated role.
   */
  "externalId"?: string;
  /**
   * AWS IAM Role name.
   */
  "roleName": string;
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
    externalId: {
      baseName: "external_id",
      type: "string",
    },
    roleName: {
      baseName: "role_name",
      type: "string",
      required: true,
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
    return AWSAuthConfigRole.attributeTypeMap;
  }

  public constructor() {}
}
