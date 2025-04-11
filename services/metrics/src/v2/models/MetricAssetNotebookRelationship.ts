import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricNotebookType } from "./MetricNotebookType";

/**
 * An object of type `notebook` that can be referenced in the `included` data.
 */
export class MetricAssetNotebookRelationship {
  /**
   * The related notebook's ID.
   */
  "id"?: string;
  /**
   * Notebook resource type.
   */
  "type"?: MetricNotebookType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricNotebookType",
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
    return MetricAssetNotebookRelationship.attributeTypeMap;
  }

  public constructor() {}
}
