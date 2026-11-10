import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueWatchReference } from "./IssueWatchReference";

/**
 * Relationship between the issue and its active watches. Returned when `watches` is included and the issue has an active watch.
 */
export class IssueWatchesRelationship {
  /**
   * Array of active watches on the issue.
   */
  "data": Array<IssueWatchReference>;
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
    data: {
      baseName: "data",
      type: "Array<IssueWatchReference>",
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
    return IssueWatchesRelationship.attributeTypeMap;
  }

  public constructor() {}
}
