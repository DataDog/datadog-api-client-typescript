import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A rule restricting a Slack scope to specific private channel names.
 */
export class ExecutionPolicySlackScopeRule {
  /**
   * The private channel name selectors this rule applies to. Selectors are lowercase private channel names
   * without the leading `#`, and can contain `*` wildcards. Use `*` alone to match any private channel name.
   */
  "channelNameSelectors": Array<string>;
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
    channelNameSelectors: {
      baseName: "channel_name_selectors",
      type: "Array<string>",
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
    return ExecutionPolicySlackScopeRule.attributeTypeMap;
  }

  public constructor() {}
}
