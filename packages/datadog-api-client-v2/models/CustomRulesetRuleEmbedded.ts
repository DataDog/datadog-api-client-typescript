/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomRuleRevisionEmbedded } from "./CustomRuleRevisionEmbedded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A custom static analysis rule as embedded in the rules list of a ruleset response.
 */
export class CustomRulesetRuleEmbedded {
  /**
   * Creation timestamp
   */
  "createdAt": Date;
  /**
   * Creator identifier
   */
  "createdBy": string;
  /**
   * Rule identifier, which is the same as the rule name.
   */
  "id": string;
  /**
   * A revision of a custom static analysis rule as embedded in a rule or ruleset response.
   */
  "lastRevision": CustomRuleRevisionEmbedded;
  /**
   * Rule name
   */
  "name": string;
  /**
   * Revision history of the rule.
   */
  "revisions": Array<CustomRuleRevisionEmbedded> | null;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    lastRevision: {
      baseName: "last_revision",
      type: "CustomRuleRevisionEmbedded",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    revisions: {
      baseName: "revisions",
      type: "Array<CustomRuleRevisionEmbedded>",
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
    return CustomRulesetRuleEmbedded.attributeTypeMap;
  }

  public constructor() {}
}
