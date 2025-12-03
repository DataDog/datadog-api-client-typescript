import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CasePriority } from "./CasePriority";

/**
 * Attributes of the case to create.
 */
export class CreateCaseRequestDataAttributes {
  /**
   * The unique identifier of the user assigned to the case.
   */
  "assigneeId"?: string;
  /**
   * The description of the case. If not provided, the description will be automatically generated.
   */
  "description"?: string;
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * The title of the case. If not provided, the title will be automatically generated.
   */
  "title"?: string;
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
    assigneeId: {
      baseName: "assignee_id",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "CasePriority",
    },
    title: {
      baseName: "title",
      type: "string",
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
    return CreateCaseRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
