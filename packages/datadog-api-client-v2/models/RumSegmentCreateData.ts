/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumSegmentCreateAttributes } from "./RumSegmentCreateAttributes";
import { RumSegmentResourceType } from "./RumSegmentResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a segment creation request.
 */
export class RumSegmentCreateData {
  /**
   * Attributes for creating a new segment.
   */
  "attributes": RumSegmentCreateAttributes;
  /**
   * Type of the segment resource.
   */
  "type": RumSegmentResourceType;

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
      type: "RumSegmentCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumSegmentResourceType",
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
    return RumSegmentCreateData.attributeTypeMap;
  }

  public constructor() {}
}
