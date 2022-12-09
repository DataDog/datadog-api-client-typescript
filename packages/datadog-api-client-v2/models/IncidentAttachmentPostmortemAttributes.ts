/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAttachmentPostmortemAttachmentType } from "./IncidentAttachmentPostmortemAttachmentType";
import { IncidentAttachmentsPostmortemAttributesAttachmentObject } from "./IncidentAttachmentsPostmortemAttributesAttachmentObject";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentAttachmentPostmortemAttributes.attributeTypeMap;
  }

  public constructor() {}
}
