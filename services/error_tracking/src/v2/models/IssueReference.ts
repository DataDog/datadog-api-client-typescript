import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueType } from "./IssueType";

/**
 * The issue the search result corresponds to.
 */
export class IssueReference {
  /**
   * Issue identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueType;
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
    type: {
      baseName: "type",
      type: "IssueType",
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
    return IssueReference.attributeTypeMap;
  }

  public constructor() {}
}
