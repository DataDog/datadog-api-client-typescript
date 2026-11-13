import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPProjectFilterConfigType } from "./GCPProjectFilterConfigType";

/**
 * Configuration for filtering the GCP projects that Datadog monitors by project ID or by project label.
 */
export class GCPProjectFilterConfig {
  /**
   * List of filters matched against the project field set by `type`. Filters support the `*` and `?`
   * wildcards, and a leading `!` makes a filter an exclusion. A project is skipped if it matches any
   * exclusion filter. When inclusion filters are set, a project must also match at least one of them.
   * For `project_id`, each filter is a project ID pattern, such as `prod-*`. You can set up to 15,000
   * filters. For `project_label`, each filter is a label in the form `key:value`, such as `env:prod*`.
   * You can set up to 100 filters. Keys are matched exactly, and wildcards apply only to values, so
   * `key:*` matches any value.
   */
  "filters"?: Array<string>;
  /**
   * The GCP project field that the filters are matched against.
   */
  "type"?: GCPProjectFilterConfigType;
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
    filters: {
      baseName: "filters",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "GCPProjectFilterConfigType",
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
    return GCPProjectFilterConfig.attributeTypeMap;
  }

  public constructor() {}
}
