import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Optional parameters for bulk creating metric tag configurations.
 */
export class MetricBulkTagConfigCreateAttributes {
  /**
   * A list of account emails to notify when the configuration is applied.
   */
  "emails"?: Array<string>;
  /**
   * When set to true, the configuration will exclude the configured tags and include any other submitted tags.
   * When set to false, the configuration will include the configured tags and exclude any other submitted tags.
   * Defaults to false.
   */
  "excludeTagsMode"?: boolean;
  /**
   * When provided, all tags that have been actively queried are
   * configured (and, therefore, remain queryable) for each metric that
   * matches the given prefix.  Minimum value is 1 second, and maximum
   * value is 7,776,000 seconds (90 days).
   */
  "includeActivelyQueriedTagsWindow"?: number;
  /**
   * When set to true, the configuration overrides any existing
   * configurations for the given metric with the new set of tags in this
   * configuration request. If false, old configurations are kept and
   * are merged with the set of tags in this configuration request.
   * Defaults to true.
   */
  "overrideExistingConfigurations"?: boolean;
  /**
   * A list of tag names to apply to the configuration.
   */
  "tags"?: Array<string>;
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
    emails: {
      baseName: "emails",
      type: "Array<string>",
    },
    excludeTagsMode: {
      baseName: "exclude_tags_mode",
      type: "boolean",
    },
    includeActivelyQueriedTagsWindow: {
      baseName: "include_actively_queried_tags_window",
      type: "number",
      format: "double",
    },
    overrideExistingConfigurations: {
      baseName: "override_existing_configurations",
      type: "boolean",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return MetricBulkTagConfigCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
