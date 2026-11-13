import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueImpactAttributes } from "./IssueImpactAttributes";
import { IssueImpactType } from "./IssueImpactType";

/**
 * The impact of an issue over the requested time window.
 */
export class IssueImpact {
  /**
   * The issue's errors in the time window, and the users, sessions, accounts, views, and endpoints they affect.
   */
  "attributes": IssueImpactAttributes;
  /**
   * Identifier of the issue.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueImpactType;
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
      type: "IssueImpactAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssueImpactType",
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
    return IssueImpact.attributeTypeMap;
  }

  public constructor() {}
}
