/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumSegmentUser } from "./RumSegmentUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a deleted segment response.
 */
export class RumSegmentDeleteAttributes {
  /**
   * The timestamp when the segment was disabled in RFC 3339 format.
   */
  "disabledAt": Date;
  /**
   * A user who performed an action on a segment.
   */
  "disabledBy": RumSegmentUser;
  /**
   * The name of the deleted segment.
   */
  "name": string;
  /**
   * The unique identifier of the deleted segment.
   */
  "uuid": string;

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
    disabledAt: {
      baseName: "disabled_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    disabledBy: {
      baseName: "disabled_by",
      type: "RumSegmentUser",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    uuid: {
      baseName: "uuid",
      type: "string",
      required: true,
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
    return RumSegmentDeleteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
