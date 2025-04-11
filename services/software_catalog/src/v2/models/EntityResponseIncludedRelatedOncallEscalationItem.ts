import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Oncall escalation.
 */
export class EntityResponseIncludedRelatedOncallEscalationItem {
  /**
   * Oncall email.
   */
  "email"?: string;
  /**
   * Oncall level.
   */
  "escalationLevel"?: number;
  /**
   * Oncall name.
   */
  "name"?: string;
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
    email: {
      baseName: "email",
      type: "string",
    },
    escalationLevel: {
      baseName: "escalationLevel",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return EntityResponseIncludedRelatedOncallEscalationItem.attributeTypeMap;
  }

  public constructor() {}
}
