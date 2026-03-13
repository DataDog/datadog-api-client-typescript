/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumStaticSegmentCreateData } from "./RumStaticSegmentCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for creating a new static segment.
 */
export class RumStaticSegmentCreateRequest {
  /**
   * Data object for a static segment creation request.
   */
  "data": RumStaticSegmentCreateData;

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
      type: "RumStaticSegmentCreateData",
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
    return RumStaticSegmentCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
