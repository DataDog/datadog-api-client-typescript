import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRenderedTemplateData } from "./IncidentRenderedTemplateData";

/**
 * Response with a rendered template.
 */
export class IncidentRenderedTemplateResponse {
  /**
   * Rendered template data.
   */
  "data": IncidentRenderedTemplateData;
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
      type: "IncidentRenderedTemplateData",
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
    return IncidentRenderedTemplateResponse.attributeTypeMap;
  }

  public constructor() {}
}
