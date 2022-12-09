/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAttachmentUpdateData } from "./IncidentAttachmentUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The update request for an incident's attachments.
 */
export class IncidentAttachmentUpdateRequest {
  /**
   * An array of incident attachments. An attachment object without an "id" key indicates that you want to
   * create that attachment. An attachment object without an "attributes" key indicates that you want to
   * delete that attachment. An attachment object with both the "id" key and a populated "attributes" object
   * indicates that you want to update that attachment.
   */
  "data": Array<IncidentAttachmentUpdateData>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<IncidentAttachmentUpdateData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentAttachmentUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
