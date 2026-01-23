import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentHandleAttributesFields } from "./IncidentHandleAttributesFields";

/**
 * Incident handle attributes for responses
 */
export class IncidentHandleAttributesResponse {
  /**
   * Timestamp when the handle was created
   */
  "createdAt": Date;
  /**
   * Dynamic fields associated with the handle
   */
  "fields": IncidentHandleAttributesFields;
  /**
   * Timestamp when the handle was last modified
   */
  "modifiedAt": Date;
  /**
   * The handle name
   */
  "name": string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    fields: {
      baseName: "fields",
      type: "IncidentHandleAttributesFields",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return IncidentHandleAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
