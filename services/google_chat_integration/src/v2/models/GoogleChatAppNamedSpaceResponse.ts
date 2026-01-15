import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatAppNamedSpaceResponseData } from "./GoogleChatAppNamedSpaceResponseData";

/**
 * Response of a Google Chat app named space.
 */
export class GoogleChatAppNamedSpaceResponse {
  /**
   * Google Chat app named space data from a response.
   */
  "data": GoogleChatAppNamedSpaceResponseData;
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
    data: {
      baseName: "data",
      type: "GoogleChatAppNamedSpaceResponseData",
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
    return GoogleChatAppNamedSpaceResponse.attributeTypeMap;
  }

  public constructor() {}
}
