import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTodoAnonymousAssigneeSource } from "./IncidentTodoAnonymousAssigneeSource";

/**
 * Anonymous assignee entity.
 */
export class IncidentTodoAnonymousAssignee {
  /**
   * URL for assignee's icon.
   */
  "icon": string;
  /**
   * Anonymous assignee's ID.
   */
  "id": string;
  /**
   * Assignee's name.
   */
  "name": string;
  /**
   * The source of the anonymous assignee.
   */
  "source": IncidentTodoAnonymousAssigneeSource;
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
    icon: {
      baseName: "icon",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "IncidentTodoAnonymousAssigneeSource",
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
    return IncidentTodoAnonymousAssignee.attributeTypeMap;
  }

  public constructor() {}
}
