import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueUserAttributes } from "./IssueUserAttributes";
import { IssueUserType } from "./IssueUserType";

/**
 * The user to whom the issue is assigned.
 */
export class IssueUser {
  /**
   * Object containing the information of a user.
   */
  "attributes": IssueUserAttributes;
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
    attributes: {
      baseName: "attributes",
      type: "IssueUserAttributes",
      required: true,
    },
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
    return IssueUser.attributeTypeMap;
  }

  public constructor() {}
}
