/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteRuleAttributes } from "./MuteRuleAttributes";
import { MuteRulesType } from "./MuteRulesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Mute rules are used to proactively filter out known false positives or accepted risks.
 * A mute rule is composed of a rule UUID, a rule type, and the rule attributes. All fields are required.
 */
export class MuteRule {
  /**
   * Attributes of the mute rule
   */
  "attributes": MuteRuleAttributes;
  /**
   * The ID of a pipeline rule
   */
  "id": string;
  /**
   * The pipeline rule type associated to mute rules
   */
  "type": MuteRulesType;

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
      type: "MuteRuleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "MuteRulesType",
      required: true,
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
    return MuteRule.attributeTypeMap;
  }

  public constructor() {}
}
