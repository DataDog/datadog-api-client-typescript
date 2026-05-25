/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiCustomRulesetDataType } from "./AiCustomRulesetDataType";
import { AiCustomRulesetUpdateAttributes } from "./AiCustomRulesetUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request data for updating an AI custom ruleset.
 */
export class AiCustomRulesetUpdateData {
  /**
   * Attributes for updating an AI custom ruleset.
   */
  "attributes"?: AiCustomRulesetUpdateAttributes;
  /**
   * The ruleset identifier.
   */
  "id"?: string;
  /**
   * AI custom ruleset resource type.
   */
  "type"?: AiCustomRulesetDataType;

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
      type: "AiCustomRulesetUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiCustomRulesetDataType",
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
    return AiCustomRulesetUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
