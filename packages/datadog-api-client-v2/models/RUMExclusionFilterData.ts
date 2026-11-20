/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMExclusionFilterAttributes } from "./RUMExclusionFilterAttributes";
import { RUMExclusionFilterMeta } from "./RUMExclusionFilterMeta";
import { RUMExclusionFilterType } from "./RUMExclusionFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An exclusion filter.
 */
export class RUMExclusionFilterData {
  /**
   * The attributes of an exclusion filter.
   */
  "attributes"?: RUMExclusionFilterAttributes;
  /**
   * The ID of the exclusion filter.
   */
  "id": string;
  /**
   * Metadata about the exclusion filter.
   */
  "meta"?: RUMExclusionFilterMeta;
  /**
   * The resource type. The value must be `exclusion_filters`.
   */
  "type": RUMExclusionFilterType;

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
      type: "RUMExclusionFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMExclusionFilterMeta",
    },
    type: {
      baseName: "type",
      type: "RUMExclusionFilterType",
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
    return RUMExclusionFilterData.attributeTypeMap;
  }

  public constructor() {}
}
