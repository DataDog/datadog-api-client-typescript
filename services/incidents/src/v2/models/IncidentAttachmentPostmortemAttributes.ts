import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAttachmentPostmortemAttachmentType } from "./IncidentAttachmentPostmortemAttachmentType";
import { IncidentAttachmentsPostmortemAttributesAttachmentObject } from "./IncidentAttachmentsPostmortemAttributesAttachmentObject";

/**
 * The attributes object for a postmortem attachment.
 */
export class IncidentAttachmentPostmortemAttributes {
  /**
   * The postmortem attachment.
   */
  "attachment": IncidentAttachmentsPostmortemAttributesAttachmentObject;
  /**
   * The type of postmortem attachment attributes.
   */
  "attachmentType": IncidentAttachmentPostmortemAttachmentType;
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
    attachment: {
      baseName: "attachment",
      type: "IncidentAttachmentsPostmortemAttributesAttachmentObject",
      required: true,
    },
    attachmentType: {
      baseName: "attachment_type",
      type: "IncidentAttachmentPostmortemAttachmentType",
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
    return IncidentAttachmentPostmortemAttributes.attributeTypeMap;
  }

  public constructor() {}
}
