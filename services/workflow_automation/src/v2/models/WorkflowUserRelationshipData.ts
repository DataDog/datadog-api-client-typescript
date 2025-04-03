import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowUserRelationshipType } from "./WorkflowUserRelationshipType";

/**
 * The definition of `WorkflowUserRelationshipData` object.
 */
export class WorkflowUserRelationshipData {
  /**
   * The user identifier
   */
  "id": string;
  /**
   * The definition of `WorkflowUserRelationshipType` object.
   */
  "type": WorkflowUserRelationshipType;
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
      type: "WorkflowUserRelationshipType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WorkflowUserRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
