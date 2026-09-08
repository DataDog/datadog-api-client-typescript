import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRuleRevisionEmbedded } from "./CustomRuleRevisionEmbedded";

/**
 * Attributes of a custom static analysis rule, including its most recent revision and revision history.
 */
export class CustomRuleAttributes {
  /**
   * Creation timestamp
   */
  "createdAt": Date;
  /**
   * Creator identifier
   */
  "createdBy": string;
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
    return CustomRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
