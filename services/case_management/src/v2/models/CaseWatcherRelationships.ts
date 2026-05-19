import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseWatcherUserRelationship } from "./CaseWatcherUserRelationship";

/**
 * Relationships for a case watcher, linking to the underlying user resource.
 */
export class CaseWatcherRelationships {
  /**
   * The user relationship for a case watcher.
   */
  "user": CaseWatcherUserRelationship;
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
      type: "CaseWatcherUserRelationship",
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
    return CaseWatcherRelationships.attributeTypeMap;
  }

  public constructor() {}
}
