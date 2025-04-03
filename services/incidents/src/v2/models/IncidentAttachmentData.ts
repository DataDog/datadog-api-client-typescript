import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAttachmentAttributes } from "./IncidentAttachmentAttributes";
import { IncidentAttachmentRelationships } from "./IncidentAttachmentRelationships";
import { IncidentAttachmentType } from "./IncidentAttachmentType";

/**
 * A single incident attachment.
 */
export class IncidentAttachmentData {
  /**
   * The attributes object for an attachment.
   */
  "attributes": IncidentAttachmentAttributes;
  /**
   * A unique identifier that represents the incident attachment.
   */
  "id": string;
  /**
   * The incident attachment's relationships.
   */
  "relationships": IncidentAttachmentRelationships;
  /**
   * The incident attachment resource type.
   */
  "type": IncidentAttachmentType;
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
      type: "IncidentAttachmentAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentAttachmentRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentAttachmentType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentAttachmentData.attributeTypeMap;
  }

  public constructor() {}
}
