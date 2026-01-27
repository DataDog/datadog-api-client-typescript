import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WatcherRelationships } from "./WatcherRelationships";
import { WatcherResourceType } from "./WatcherResourceType";

/**
 * Case watcher
 */
export class Watcher {
  /**
   * User UUID of the watcher
   */
  "id": string;
  /**
   * Watcher relationships
   */
  "relationships": WatcherRelationships;
  /**
   * Watcher resource type
   */
  "type": WatcherResourceType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "WatcherRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WatcherResourceType",
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
    return Watcher.attributeTypeMap;
  }

  public constructor() {}
}
