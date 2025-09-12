/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RulesetRespDataAttributes } from "./RulesetRespDataAttributes";
import { RulesetRespDataType } from "./RulesetRespDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `RulesetRespData` object.
 */
export class RulesetRespData {
  /**
   * The definition of `RulesetRespDataAttributes` object.
   */
  "attributes"?: RulesetRespDataAttributes;
  /**
   * The `RulesetRespData` `id`.
   */
  "id"?: string;
  /**
   * Ruleset resource type.
   */
  "type": RulesetRespDataType;

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
      type: "RulesetRespDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RulesetRespDataType",
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
    return RulesetRespData.attributeTypeMap;
  }

  public constructor() {}
}
