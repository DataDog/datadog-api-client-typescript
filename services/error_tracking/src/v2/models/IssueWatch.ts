import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueWatchAttributes } from "./IssueWatchAttributes";
import { IssueWatchType } from "./IssueWatchType";

/**
 * An active watch on an issue. A watch moves an ignored issue back to open when its condition is met.
 */
export class IssueWatch {
  /**
   * Object containing the information of a watch.
   */
  "attributes": IssueWatchAttributes;
  /**
   * Watch identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueWatchType;
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
    attributes: {
      baseName: "attributes",
      type: "IssueWatchAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssueWatchType",
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
    return IssueWatch.attributeTypeMap;
  }

  public constructor() {}
}
