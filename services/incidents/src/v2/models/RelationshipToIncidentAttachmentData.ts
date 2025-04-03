import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAttachmentType } from "./IncidentAttachmentType";

/**
 * The attachment relationship data.
 */
export class RelationshipToIncidentAttachmentData {
  /**
   * A unique identifier that represents the attachment.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
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
    return RelationshipToIncidentAttachmentData.attributeTypeMap;
  }

  public constructor() {}
}
