/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Only supported for `proportional_timeseries` and `even_timeseries` rules. Creates a synthetic tag from timeseries input rows before `tag_transforms` are applied.
 */
export class ArbitraryRuleMappingTransform {
  /**
   * Recursive mapping node. Each `match_on_values` branch contains a value and a nested node.
   */
  "mapping": { [key: string]: any };
  /**
   * The name of the synthetic tag created by the mapping.
   */
  "syntheticTag": string;

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
    mapping: {
      baseName: "mapping",
      type: "{ [key: string]: any; }",
      required: true,
    },
    syntheticTag: {
      baseName: "synthetic_tag",
      type: "string",
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
    return ArbitraryRuleMappingTransform.attributeTypeMap;
  }

  public constructor() {}
}
