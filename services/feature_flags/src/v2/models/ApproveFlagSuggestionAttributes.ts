import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Approval options for the suggestion.
 */
export class ApproveFlagSuggestionAttributes {
  /**
   * Whether to apply the change immediately. Set to `false` to approve without applying, then
   * call `ApplyFlagSuggestion` later.
   */
  "apply"?: boolean;
  /**
   * A comment explaining the approval.
   */
  "comment"?: string;
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
    apply: {
      baseName: "apply",
      type: "boolean",
    },
    comment: {
      baseName: "comment",
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
    return ApproveFlagSuggestionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
