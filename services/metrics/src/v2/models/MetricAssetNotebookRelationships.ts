import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricAssetNotebookRelationship } from "./MetricAssetNotebookRelationship";

/**
 * An object containing the list of notebooks that can be referenced in the `included` data.
 */
export class MetricAssetNotebookRelationships {
  /**
   * A list of notebooks that can be referenced in the `included` data.
   */
  "data"?: Array<MetricAssetNotebookRelationship>;
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
      type: "Array<MetricAssetNotebookRelationship>",
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
    return MetricAssetNotebookRelationships.attributeTypeMap;
  }

  public constructor() {}
}
