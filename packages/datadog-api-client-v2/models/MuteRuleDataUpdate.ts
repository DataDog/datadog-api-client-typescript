/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteRuleAttributesCreate } from "./MuteRuleAttributesCreate";
import { MuteRuleType } from "./MuteRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object for a mute rule update request. The `id` must match the `rule_id` path parameter.
 */
export class MuteRuleDataUpdate {
  /**
   * Attributes for creating or updating a mute rule.
   */
  "attributes": MuteRuleAttributesCreate;
  /**
   * The ID of the mute rule to update.
   */
  "id": string;
  /**
   * The JSON:API type for mute rules.
   */
  "type": MuteRuleType;

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
      type: "MuteRuleAttributesCreate",
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
      type: "MuteRuleType",
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
    return MuteRuleDataUpdate.attributeTypeMap;
  }

  public constructor() {}
}
