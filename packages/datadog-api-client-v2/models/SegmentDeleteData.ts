/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentDeleteAttributes } from "./SegmentDeleteAttributes";
import { SegmentDeletedType } from "./SegmentDeletedType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A deleted segment.
 */
export class SegmentDeleteData {
  /**
   * Attributes of a deleted segment.
   */
  "attributes": SegmentDeleteAttributes;
  /**
   * ID of the segment.
   */
  "id": string;
  /**
   * Deleted segment resource type.
   */
  "type": SegmentDeletedType;

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
    attributes: {
      baseName: "attributes",
      type: "SegmentDeleteAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SegmentDeletedType",
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
    return SegmentDeleteData.attributeTypeMap;
  }

  public constructor() {}
}
