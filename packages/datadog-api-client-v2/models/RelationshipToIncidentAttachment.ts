/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToIncidentAttachmentData } from "./RelationshipToIncidentAttachmentData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A relationship reference for attachments.
 */
export class RelationshipToIncidentAttachment {
  /**
   * An array of incident attachments.
   */
  "data": Array<RelationshipToIncidentAttachmentData>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<RelationshipToIncidentAttachmentData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentAttachment.attributeTypeMap;
  }

  public constructor() {}
}
