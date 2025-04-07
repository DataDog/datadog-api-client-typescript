import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTodoCreateData } from "./IncidentTodoCreateData";

/**
 * Create request for an incident todo.
 */
export class IncidentTodoCreateRequest {
  /**
   * Incident todo data for a create request.
   */
  "data": IncidentTodoCreateData;
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
      type: "IncidentTodoCreateData",
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
    return IncidentTodoCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
