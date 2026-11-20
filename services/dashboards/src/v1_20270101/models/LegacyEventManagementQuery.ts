import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagsExecution } from "./TagsExecution";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LegacyEventManagementQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tagsExecution": TagsExecution;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    search: {
      baseName: "search",
      type: "string",
      required: true,
    },
    tagsExecution: {
      baseName: "tags_execution",
      type: "TagsExecution",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LegacyEventManagementQuery.attributeTypeMap;
  }

  public constructor() {}
}
