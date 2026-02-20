import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Organization handle attributes for an update request.
 */
export class GoogleChatUpdateOrganizationHandleRequestAttributes {
  /**
   * Organization handle name.
   */
  "name"?: string;
  /**
   * Google space resource name.
   */
  "spaceResourceName"?: string;
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
    },
    spaceResourceName: {
      baseName: "space_resource_name",
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
    return GoogleChatUpdateOrganizationHandleRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
