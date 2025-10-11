import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPageTarget } from "./IncidentPageTarget";

/**
 * Attributes for creating a page from an incident.
 */
export class IncidentCreatePageAttributes {
  /**
   * Description of the page.
   */
  "description"?: string;
  /**
   * List of services associated with the page.
   */
  "services"?: Array<string>;
  /**
   * List of tags for the page.
   */
  "tags"?: Array<string>;
  /**
   * Target for creating a page from an incident.
   */
  "target": IncidentPageTarget;
  /**
   * Title of the page.
   */
  "title": string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    target: {
      baseName: "target",
      type: "IncidentPageTarget",
      required: true,
    },
    title: {
      baseName: "title",
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
    return IncidentCreatePageAttributes.attributeTypeMap;
  }

  public constructor() {}
}
