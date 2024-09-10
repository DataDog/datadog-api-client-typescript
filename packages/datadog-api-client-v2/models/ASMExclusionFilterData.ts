/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ASMExclusionFilterAttributes } from "./ASMExclusionFilterAttributes";
import { ASMExclusionFilterType } from "./ASMExclusionFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single Exclusion filter.
 */
export class ASMExclusionFilterData {
  /**
   * The attributes of the ASM WAF exclusion filter.
   */
  "attributes"?: ASMExclusionFilterAttributes;
  /**
   * The ID of the Exclusion filter.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `exclusion_filter`.
   */
  "type"?: ASMExclusionFilterType;

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
      type: "ASMExclusionFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ASMExclusionFilterType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ASMExclusionFilterData.attributeTypeMap;
  }

  public constructor() {}
}
