/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttachmentDataAttributesAttachmentType } from "./AttachmentDataAttributesAttachmentType";
import { CreateAttachmentRequestDataAttributesAttachment } from "./CreateAttachmentRequestDataAttributesAttachment";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
