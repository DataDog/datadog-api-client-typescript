import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Organization handle attributes for a create request.
 */
export class GoogleChatCreateOrganizationHandleRequestAttributes {
  /**
   * Organization handle name.
   */
  "name": string;
  /**
   * Google space resource name.
   */
  "spaceResourceName": string;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    spaceResourceName: {
      baseName: "space_resource_name",
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
    return GoogleChatCreateOrganizationHandleRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
