import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatOrganizationAttributes } from "./GoogleChatOrganizationAttributes";
import { GoogleChatOrganizationRelationships } from "./GoogleChatOrganizationRelationships";
import { GoogleChatOrganizationType } from "./GoogleChatOrganizationType";

/**
 * Google Chat organization data from a response.
 */
export class GoogleChatOrganizationData {
  /**
   * Google Chat organization attributes.
   */
  "attributes"?: GoogleChatOrganizationAttributes;
  /**
   * The ID of the Google Chat organization binding.
   */
  "id"?: string;
  /**
   * Google Chat organization relationships.
   */
  "relationships"?: GoogleChatOrganizationRelationships;
  /**
   * Google Chat organization resource type.
   */
  "type"?: GoogleChatOrganizationType;
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
    attributes: {
      baseName: "attributes",
      type: "GoogleChatOrganizationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "GoogleChatOrganizationRelationships",
    },
    type: {
      baseName: "type",
      type: "GoogleChatOrganizationType",
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
    return GoogleChatOrganizationData.attributeTypeMap;
  }

  public constructor() {}
}
