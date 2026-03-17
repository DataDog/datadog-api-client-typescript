import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemTemplateAttributesRequest } from "./PostmortemTemplateAttributesRequest";
import { PostmortemTemplateType } from "./PostmortemTemplateType";

/**
 * Data object for creating or updating a postmortem template.
 */
export class PostmortemTemplateDataRequest {
  /**
   * Attributes for creating or updating a postmortem template.
   */
  "attributes": PostmortemTemplateAttributesRequest;
  /**
   * Postmortem template resource type
   */
  "type": PostmortemTemplateType;
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
      type: "PostmortemTemplateAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PostmortemTemplateType",
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
    return PostmortemTemplateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
