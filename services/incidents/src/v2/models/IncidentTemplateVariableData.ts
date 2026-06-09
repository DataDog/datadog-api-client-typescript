import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTemplateVariableDataAttributes } from "./IncidentTemplateVariableDataAttributes";
import { IncidentTemplateVariableType } from "./IncidentTemplateVariableType";

/**
 * Template variable data.
 */
export class IncidentTemplateVariableData {
  /**
   * Attributes of a template variable.
   */
  "attributes": IncidentTemplateVariableDataAttributes;
  /**
   * The template variable identifier.
   */
  "id": string;
  /**
   * Template variable resource type.
   */
  "type": IncidentTemplateVariableType;
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
      type: "IncidentTemplateVariableDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentTemplateVariableType",
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
    return IncidentTemplateVariableData.attributeTypeMap;
  }

  public constructor() {}
}
