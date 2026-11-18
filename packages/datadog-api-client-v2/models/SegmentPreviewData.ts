/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentPreviewAttributes } from "./SegmentPreviewAttributes";
import { SegmentPreviewRequestType } from "./SegmentPreviewRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the segment preview request.
 */
export class SegmentPreviewData {
  /**
   * Segment definition to preview and the columns to return.
   * Without columns, the response returns the user ID, or the account ID for account segments.
   */
  "attributes": SegmentPreviewAttributes;
  /**
   * Segment preview request resource type.
   */
  "type": SegmentPreviewRequestType;

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
      type: "SegmentPreviewAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SegmentPreviewRequestType",
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
    return SegmentPreviewData.attributeTypeMap;
  }

  public constructor() {}
}
