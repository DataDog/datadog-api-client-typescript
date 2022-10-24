/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAttachmentData } from "./IncidentAttachmentData";
import { IncidentAttachmentsResponseIncludedItem } from "./IncidentAttachmentsResponseIncludedItem";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The response object containing the created or updated incident attachments.
 */
export class IncidentAttachmentUpdateResponse {
  /**
   * An array of incident attachments. Only the attachments that were created or updated by the request are
   * returned.
   */
  "data": Array<IncidentAttachmentData>;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentAttachmentsResponseIncludedItem>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<IncidentAttachmentData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentAttachmentsResponseIncludedItem>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentAttachmentUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
