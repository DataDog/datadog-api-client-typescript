/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAttachmentPostmortemAttachmentType } from "./IncidentAttachmentPostmortemAttachmentType";
import { IncidentAttachmentsPostmortemAttributesAttachmentObject } from "./IncidentAttachmentsPostmortemAttributesAttachmentObject";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




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
    "attachment": {
      "baseName": "attachment",
      "type": "IncidentAttachmentsPostmortemAttributesAttachmentObject",
      "required": true,
    },
    "attachmentType": {
      "baseName": "attachment_type",
      "type": "IncidentAttachmentPostmortemAttachmentType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return IncidentAttachmentPostmortemAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









