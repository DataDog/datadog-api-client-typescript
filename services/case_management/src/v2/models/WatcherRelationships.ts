import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WatcherUserRelationship } from "./WatcherUserRelationship";

/**
 * Watcher relationships
 */
export class WatcherRelationships {
  /**
   * Relationship to user
   */
  "user": WatcherUserRelationship;
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
    user: {
      baseName: "user",
      type: "WatcherUserRelationship",
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
    return WatcherRelationships.attributeTypeMap;
  }

  public constructor() {}
}
