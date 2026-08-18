/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumExclusionFilterType } from "./RumExclusionFilterType";
import { RumExclusionFilterUpdateAttributes } from "./RumExclusionFilterUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The exclusion filter properties to update.
 */
export class RumExclusionFilterUpdateData {
  /**
   * The attributes of an exclusion filter that can be updated.
   * For the built-in Error Tracking exclusion filter, only `enabled` can be set;
   * `name`, `event_type`, and `query` must be omitted.
   */
  "attributes": RumExclusionFilterUpdateAttributes;
  /**
   * The ID of the exclusion filter. Must match the `ef_id` path parameter.
   */
  "id": string;
  /**
   * The resource type. The value must be `exclusion_filters`.
   */
  "type": RumExclusionFilterType;

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
      type: "RumExclusionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumExclusionFilterType",
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
    return RumExclusionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
