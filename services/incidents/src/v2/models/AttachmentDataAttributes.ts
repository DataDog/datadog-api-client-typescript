import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachmentDataAttributesAttachment } from "./AttachmentDataAttributesAttachment";
import { AttachmentDataAttributesAttachmentType } from "./AttachmentDataAttributesAttachmentType";

/**
 * The attachment's attributes.
 */
export class AttachmentDataAttributes {
  /**
   * The attachment object.
   */
  "attachment"?: AttachmentDataAttributesAttachment;
  /**
   * The type of the attachment.
   */
  "attachmentType"?: AttachmentDataAttributesAttachmentType;
  /**
   * Timestamp when the attachment was last modified.
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
      type: "AttachmentDataAttributesAttachment",
    },
    attachmentType: {
      baseName: "attachment_type",
      type: "AttachmentDataAttributesAttachmentType",
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
    return AttachmentDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
