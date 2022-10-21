/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAttachmentLinkAttachmentType } from "./IncidentAttachmentLinkAttachmentType";
import { IncidentAttachmentLinkAttributesAttachmentObject } from "./IncidentAttachmentLinkAttributesAttachmentObject";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentAttachmentLinkAttributes.attributeTypeMap;
  }

  public constructor() {}
}
