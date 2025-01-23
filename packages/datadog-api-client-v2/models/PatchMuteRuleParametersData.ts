/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteRulesType } from "./MuteRulesType";
import { PatchMuteRuleParametersDataAttributes } from "./PatchMuteRuleParametersDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the mute rule patch request: the rule UUID, the rule type, and the rule attributes. All fields are required.
 */
export class PatchMuteRuleParametersData {
  /**
   * Attributes of the mute rule patch request: the rule name, the rule details, the associated action, and the enabled field.
   */
  "attributes": PatchMuteRuleParametersDataAttributes;
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
      type: "PatchMuteRuleParametersDataAttributes",
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
    return PatchMuteRuleParametersData.attributeTypeMap;
  }

  public constructor() {}
}
