import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Google Chat organization attributes.
 */
export class GoogleChatOrganizationAttributes {
  /**
   * The Google Chat organization domain ID.
   */
  "domainId"?: string;
  /**
   * The Google Chat organization domain name.
   */
  "domainName"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    domainId: {
      baseName: "domain_id",
      type: "string",
    },
    domainName: {
      baseName: "domain_name",
      type: "string",
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
    return GoogleChatOrganizationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
