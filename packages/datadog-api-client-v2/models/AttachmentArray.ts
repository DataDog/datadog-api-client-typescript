/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttachmentData } from "./AttachmentData";
import { AttachmentIncluded } from "./AttachmentIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class AttachmentArray {
  "data": Array<AttachmentData>;
  "included"?: Array<AttachmentIncluded>;

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
    data: {
      baseName: "data",
      type: "Array<AttachmentData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<AttachmentIncluded>",
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
    return AttachmentArray.attributeTypeMap;
  }

  public constructor() {}
}
