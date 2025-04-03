import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTodoAttributes } from "./IncidentTodoAttributes";
import { IncidentTodoRelationships } from "./IncidentTodoRelationships";
import { IncidentTodoType } from "./IncidentTodoType";

/**
 * Incident todo response data.
 */
export class IncidentTodoResponseData {
  /**
   * Incident todo's attributes.
   */
  "attributes"?: IncidentTodoAttributes;
  /**
   * The incident todo's ID.
   */
  "id": string;
  /**
   * The incident's relationships from a response.
   */
  "relationships"?: IncidentTodoRelationships;
  /**
   * Todo resource type.
   */
  "type": IncidentTodoType;
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
      type: "IncidentTodoAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentTodoRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentTodoType",
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
    return IncidentTodoResponseData.attributeTypeMap;
  }

  public constructor() {}
}
