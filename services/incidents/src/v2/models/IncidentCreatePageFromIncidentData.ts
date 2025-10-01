import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreatePageAttributes } from "./IncidentCreatePageAttributes";
import { IncidentPageType } from "./IncidentPageType";

/**
 * Data for creating a page from an incident.
 */
export class IncidentCreatePageFromIncidentData {
  /**
   * Attributes for creating a page from an incident.
   */
  "attributes": IncidentCreatePageAttributes;
  /**
   * Incident page type.
   */
  "type": IncidentPageType;
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
      type: "IncidentCreatePageAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentPageType",
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
    return IncidentCreatePageFromIncidentData.attributeTypeMap;
  }

  public constructor() {}
}
