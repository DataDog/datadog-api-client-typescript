import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAttachmentType } from "./IncidentAttachmentType";
import { IncidentAttachmentUpdateAttributes } from "./IncidentAttachmentUpdateAttributes";

/**
 * A single incident attachment.
 */
export class IncidentAttachmentUpdateData {
  /**
   * Incident attachment attributes.
   */
  "attributes"?: IncidentAttachmentUpdateAttributes;
  /**
   * A unique identifier that represents the incident attachment.
   */
  "id"?: string;
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
      type: "IncidentAttachmentUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return IncidentAttachmentUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
