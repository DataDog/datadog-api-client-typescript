import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRuleRevision } from "./CustomRuleRevision";

export class CustomRule {
  /**
   * Creation timestamp
   */
  "createdAt": Date;
  /**
   * Creator identifier
   */
  "createdBy": string;
  "lastRevision": CustomRuleRevision;
  /**
   * Rule name
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
      type: "CustomRuleRevision",
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
    return CustomRule.attributeTypeMap;
  }

  public constructor() {}
}
