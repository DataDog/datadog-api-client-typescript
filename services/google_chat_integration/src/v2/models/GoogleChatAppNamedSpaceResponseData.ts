import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatAppNamedSpaceResponseAttributes } from "./GoogleChatAppNamedSpaceResponseAttributes";
import { GoogleChatAppNamedSpaceType } from "./GoogleChatAppNamedSpaceType";

/**
 * Google Chat app named space data from a response.
 */
export class GoogleChatAppNamedSpaceResponseData {
  /**
   * Google Chat app named space attributes.
   */
  "attributes"?: GoogleChatAppNamedSpaceResponseAttributes;
  /**
   * The ID of the app named space.
   */
  "id"?: string;
  /**
   * Google Chat app named space resource type.
   */
  "type"?: GoogleChatAppNamedSpaceType;
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
    attributes: {
      baseName: "attributes",
      type: "GoogleChatAppNamedSpaceResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GoogleChatAppNamedSpaceType",
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
    return GoogleChatAppNamedSpaceResponseData.attributeTypeMap;
  }

  public constructor() {}
}
