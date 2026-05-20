import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseWatcherRelationships } from "./CaseWatcherRelationships";
import { CaseWatcherResourceType } from "./CaseWatcherResourceType";

/**
 * Represents a user who is subscribed to notifications for a case. Watchers receive updates when the case's status, priority, assignee, or comments change.
 */
export class CaseWatcher {
  /**
   * The primary identifier of the case watcher.
   */
  "id": string;
  /**
   * Relationships for a case watcher, linking to the underlying user resource.
   */
  "relationships": CaseWatcherRelationships;
  /**
   * JSON:API resource type for case watchers.
   */
  "type": CaseWatcherResourceType;
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
      type: "CaseWatcherRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseWatcherResourceType",
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
    return CaseWatcher.attributeTypeMap;
  }

  public constructor() {}
}
