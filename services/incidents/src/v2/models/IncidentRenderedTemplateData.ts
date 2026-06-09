import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRenderedTemplateDataAttributes } from "./IncidentRenderedTemplateDataAttributes";
import { IncidentRenderedTemplateType } from "./IncidentRenderedTemplateType";

/**
 * Rendered template data.
 */
export class IncidentRenderedTemplateData {
  /**
   * Attributes of a rendered template.
   */
  "attributes": IncidentRenderedTemplateDataAttributes;
  /**
   * The rendered template identifier.
   */
  "id": string;
  /**
   * Rendered template resource type.
   */
  "type": IncidentRenderedTemplateType;
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
      type: "IncidentRenderedTemplateDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentRenderedTemplateType",
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
    return IncidentRenderedTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
