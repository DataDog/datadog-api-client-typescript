/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiCustomRuleRevisionResponseAttributes } from "./AiCustomRuleRevisionResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An AI custom rule embedded within a ruleset response.
 */
export class AiCustomRuleItem {
  /**
   * The creation timestamp.
   */
  "createdAt": Date;
  /**
   * The identifier of the user who created the rule.
   */
  "createdBy": string;
  /**
   * Response attributes of an AI custom rule revision.
   */
  "lastRevision": AiCustomRuleRevisionResponseAttributes;
  /**
   * The rule name.
   */
  "name": string;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    lastRevision: {
      baseName: "last_revision",
      type: "AiCustomRuleRevisionResponseAttributes",
      required: true,
    },
    name: {
      baseName: "name",
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
    return AiCustomRuleItem.attributeTypeMap;
  }

  public constructor() {}
}
