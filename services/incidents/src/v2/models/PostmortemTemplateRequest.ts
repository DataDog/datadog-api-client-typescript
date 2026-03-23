import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemTemplateDataRequest } from "./PostmortemTemplateDataRequest";

/**
 * Request body for creating or updating a postmortem template.
 */
export class PostmortemTemplateRequest {
  /**
   * Data object for creating or updating a postmortem template.
   */
  "data": PostmortemTemplateDataRequest;
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
      type: "PostmortemTemplateDataRequest",
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
    return PostmortemTemplateRequest.attributeTypeMap;
  }

  public constructor() {}
}
