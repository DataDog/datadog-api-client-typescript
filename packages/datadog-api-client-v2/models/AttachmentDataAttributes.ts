/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttachmentDataAttributesAttachment } from "./AttachmentDataAttributesAttachment";
import { AttachmentDataAttributesAttachmentType } from "./AttachmentDataAttributesAttachmentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class AttachmentDataAttributes {
  "attachment"?: AttachmentDataAttributesAttachment;
  "attachmentType"?: AttachmentDataAttributesAttachmentType;
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
