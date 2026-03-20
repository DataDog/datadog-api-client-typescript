import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedFieldUpdateData } from "./IncidentUserDefinedFieldUpdateData";

/**
 * Request body for updating an incident user-defined field.
 */
export class IncidentUserDefinedFieldUpdateRequest {
  /**
   * Data for updating an incident user-defined field.
   */
  "data": IncidentUserDefinedFieldUpdateData;
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
      type: "IncidentUserDefinedFieldUpdateData",
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
    return IncidentUserDefinedFieldUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
