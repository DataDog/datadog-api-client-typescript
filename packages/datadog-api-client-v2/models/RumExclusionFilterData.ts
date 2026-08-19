/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumExclusionFilterAttributes } from "./RumExclusionFilterAttributes";
import { RumExclusionFilterMeta } from "./RumExclusionFilterMeta";
import { RumExclusionFilterType } from "./RumExclusionFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An exclusion filter.
 */
export class RumExclusionFilterData {
  /**
   * The attributes of an exclusion filter.
   */
  "attributes"?: RumExclusionFilterAttributes;
  /**
   * The ID of the exclusion filter.
   */
  "id": string;
  /**
   * Metadata about the exclusion filter.
   */
  "meta"?: RumExclusionFilterMeta;
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
      type: "RumExclusionFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RumExclusionFilterMeta",
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
    return RumExclusionFilterData.attributeTypeMap;
  }

  public constructor() {}
}
