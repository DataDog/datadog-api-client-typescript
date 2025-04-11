import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAttachmentLinkAttachmentType } from "./IncidentAttachmentLinkAttachmentType";
import { IncidentAttachmentLinkAttributesAttachmentObject } from "./IncidentAttachmentLinkAttributesAttachmentObject";

/**
 * The attributes object for a link attachment.
 */
export class IncidentAttachmentLinkAttributes {
  /**
   * The link attachment.
   */
  "attachment": IncidentAttachmentLinkAttributesAttachmentObject;
  /**
   * The type of link attachment attributes.
   */
  "attachmentType": IncidentAttachmentLinkAttachmentType;
  /**
   * Timestamp when the incident attachment link was last modified.
   */
  "modified"?: Date;
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
      type: "IncidentAttachmentLinkAttributesAttachmentObject",
      required: true,
    },
    attachmentType: {
      baseName: "attachment_type",
      type: "IncidentAttachmentLinkAttachmentType",
      required: true,
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
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
    return IncidentAttachmentLinkAttributes.attributeTypeMap;
  }

  public constructor() {}
}
