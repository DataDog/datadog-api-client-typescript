import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPageIdType } from "./IncidentPageIdType";

/**
 * Data from creating a page.
 */
export class IncidentCreatePageResponseData {
  /**
   * The UUID of the created page.
   */
  "id": string;
  /**
   * Incident page ID type.
   */
  "type": IncidentPageIdType;
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
      type: "IncidentPageIdType",
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
    return IncidentCreatePageResponseData.attributeTypeMap;
  }

  public constructor() {}
}
