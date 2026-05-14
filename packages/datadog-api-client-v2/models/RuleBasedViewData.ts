/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RuleBasedViewAttributes } from "./RuleBasedViewAttributes";
import { RuleBasedViewType } from "./RuleBasedViewType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope for the rule-based view response.
 */
export class RuleBasedViewData {
  /**
   * Attributes of the rule-based view.
   */
  "attributes": RuleBasedViewAttributes;
  /**
   * Unique identifier of the rule-based view document.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `rule_based_view`.
   */
  "type": RuleBasedViewType;

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
      type: "RuleBasedViewAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RuleBasedViewType",
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
    return RuleBasedViewData.attributeTypeMap;
  }

  public constructor() {}
}
