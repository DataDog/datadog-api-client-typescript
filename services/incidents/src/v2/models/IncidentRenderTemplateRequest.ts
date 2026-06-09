import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRenderTemplateDataRequest } from "./IncidentRenderTemplateDataRequest";

/**
 * Request to render a template.
 */
export class IncidentRenderTemplateRequest {
  /**
   * Data for rendering a template.
   */
  "data": IncidentRenderTemplateDataRequest;
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
      type: "IncidentRenderTemplateDataRequest",
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
    return IncidentRenderTemplateRequest.attributeTypeMap;
  }

  public constructor() {}
}
