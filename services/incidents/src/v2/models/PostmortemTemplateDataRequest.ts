import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemTemplateAttributesRequest } from "./PostmortemTemplateAttributesRequest";
import { PostmortemTemplateCreateRelationships } from "./PostmortemTemplateCreateRelationships";
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
   * The ID of the template. Required when updating.
   */
  "id"?: string;
  /**
   * Relationships for a postmortem template. `incident_type` is required when creating a template and is immutable afterwards.
   */
  "relationships"?: PostmortemTemplateCreateRelationships;
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
      type: "PostmortemTemplateAttributesRequest",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "PostmortemTemplateCreateRelationships",
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
