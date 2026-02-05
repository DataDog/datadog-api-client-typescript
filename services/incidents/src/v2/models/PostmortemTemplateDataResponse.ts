import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemTemplateAttributesResponse } from "./PostmortemTemplateAttributesResponse";
import { PostmortemTemplateType } from "./PostmortemTemplateType";

export class PostmortemTemplateDataResponse {
  "attributes": PostmortemTemplateAttributesResponse;
  /**
   * The ID of the template
   */
  "id": string;
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
      type: "PostmortemTemplateAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return PostmortemTemplateDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
