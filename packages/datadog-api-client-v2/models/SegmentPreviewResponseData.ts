/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentPreviewResponseAttributes } from "./SegmentPreviewResponseAttributes";
import { SegmentPreviewResponseType } from "./SegmentPreviewResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the segment preview response.
 */
export class SegmentPreviewResponseData {
  /**
   * Members of the previewed segment.
   */
  "attributes": SegmentPreviewResponseAttributes;
  /**
   * ID of the preview response.
   */
  "id": string;
  /**
   * Segment preview response resource type.
   */
  "type": SegmentPreviewResponseType;

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
      type: "SegmentPreviewResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SegmentPreviewResponseType",
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
    return SegmentPreviewResponseData.attributeTypeMap;
  }

  public constructor() {}
}
