import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueUserType } from "./IssueUserType";

/**
 * The user the issue is assigned to.
 */
export class IssueUserReference {
  /**
   * User identifier.
   */
  "id": string;
  /**
   * Type of the object
   */
  "type": IssueUserType;
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
      type: "IssueUserType",
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
    return IssueUserReference.attributeTypeMap;
  }

  public constructor() {}
}
