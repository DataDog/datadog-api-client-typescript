/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumStaticSegmentCreateAttributes } from "./RumStaticSegmentCreateAttributes";
import { RumStaticSegmentRequestType } from "./RumStaticSegmentRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a static segment creation request.
 */
export class RumStaticSegmentCreateData {
  /**
   * Attributes for creating a new static segment.
   */
  "attributes": RumStaticSegmentCreateAttributes;
  /**
   * Type of the static segment creation request resource.
   */
  "type": RumStaticSegmentRequestType;

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
      type: "RumStaticSegmentCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumStaticSegmentRequestType",
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
    return RumStaticSegmentCreateData.attributeTypeMap;
  }

  public constructor() {}
}
