import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagsExecution } from "./TagsExecution";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LegacyEventOverlayQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "q": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tagsExecution"?: TagsExecution;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    q: {
      baseName: "q",
      type: "string",
      required: true,
    },
    tagsExecution: {
      baseName: "tags_execution",
      type: "TagsExecution",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LegacyEventOverlayQuery.attributeTypeMap;
  }

  public constructor() {}
}
