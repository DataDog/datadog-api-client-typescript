import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for updating the OpenAI Usage and Costs integration account. Only the fields provided are changed.
 */
export class OpenAIUsageAndCostsIntegrationAccountSettingsUpdate {
  /**
   * Comma-separated list of custom tags applied to the data collected for this account, for example `team:ai,env:prod`.
   */
  "customTags"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customTags: {
      baseName: "custom_tags",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAIUsageAndCostsIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
