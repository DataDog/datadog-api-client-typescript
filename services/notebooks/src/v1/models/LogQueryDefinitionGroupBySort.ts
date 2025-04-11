import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetSort } from "./WidgetSort";

/**
 * Define a sorting method.
 */
export class LogQueryDefinitionGroupBySort {
  /**
   * The aggregation method.
   */
  "aggregation": string;
  /**
   * Facet name.
   */
  "facet"?: string;
  /**
   * Widget sorting methods.
   */
  "order": WidgetSort;
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
    aggregation: {
      baseName: "aggregation",
      type: "string",
      required: true,
    },
    facet: {
      baseName: "facet",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
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
    return LogQueryDefinitionGroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
