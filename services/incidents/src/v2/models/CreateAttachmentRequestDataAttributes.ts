import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachmentDataAttributesAttachmentType } from "./AttachmentDataAttributesAttachmentType";
import { CreateAttachmentRequestDataAttributesAttachment } from "./CreateAttachmentRequestDataAttributesAttachment";

/**
 * The attributes for creating an attachment.
 */
export class CreateAttachmentRequestDataAttributes {
  /**
   * The attachment object for creating an attachment.
   */
  "attachment"?: CreateAttachmentRequestDataAttributesAttachment;
  /**
   * The type of the attachment.
   */
  "attachmentType"?: AttachmentDataAttributesAttachmentType;
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
      type: "CreateAttachmentRequestDataAttributesAttachment",
    },
    attachmentType: {
      baseName: "attachment_type",
      type: "AttachmentDataAttributesAttachmentType",
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
    return CreateAttachmentRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
