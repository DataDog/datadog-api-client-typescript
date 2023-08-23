/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The link attachment.
 */
export class IncidentAttachmentLinkAttributesAttachmentObject {
  /**
   * The URL of this link attachment.
   */
  "documentUrl": string;
  /**
   * The title of this link attachment.
   */
  "title": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    documentUrl: {
      baseName: "documentUrl",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
  };
}
