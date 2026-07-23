import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemTemplateAttributesResponse } from "./PostmortemTemplateAttributesResponse";
import { PostmortemTemplateResponseRelationships } from "./PostmortemTemplateResponseRelationships";
import { PostmortemTemplateType } from "./PostmortemTemplateType";

/**
 * Data object for a postmortem template returned in a response.
 */
export class PostmortemTemplateDataResponse {
  /**
   * Attributes of a postmortem template returned in a response.
   */
  "attributes": PostmortemTemplateAttributesResponse;
  /**
   * The ID of the template.
   */
  "id": string;
  /**
   * Relationships of a postmortem template returned in a response.
   */
  "relationships"?: PostmortemTemplateResponseRelationships;
  /**
   * Postmortem template resource type.
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
    relationships: {
      baseName: "relationships",
      type: "PostmortemTemplateResponseRelationships",
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
