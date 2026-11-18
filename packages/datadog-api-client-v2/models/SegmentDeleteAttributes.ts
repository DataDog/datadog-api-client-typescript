/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentUser } from "./SegmentUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a deleted segment.
 */
export class SegmentDeleteAttributes {
  /**
   * Time the segment was deleted.
   */
  "disabledAt": Date;
  /**
   * A Datadog user who created, modified, or disabled a segment.
   */
  "disabledBy"?: SegmentUser;
  /**
   * Name of the segment.
   */
  "name": string;

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
      type: "SegmentUser",
    },
    name: {
      baseName: "name",
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
    return SegmentDeleteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
