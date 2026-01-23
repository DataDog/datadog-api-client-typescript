import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentHandleAttributesFields } from "./IncidentHandleAttributesFields";

/**
 * Incident handle attributes for requests
 */
export class IncidentHandleAttributesRequest {
  /**
   * Dynamic fields associated with the handle
   */
  "fields"?: IncidentHandleAttributesFields;
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
    fields: {
      baseName: "fields",
      type: "IncidentHandleAttributesFields",
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
    return IncidentHandleAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
