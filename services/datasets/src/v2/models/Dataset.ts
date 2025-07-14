import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetAttributes } from "./DatasetAttributes";

/**
 * Dataset object.
 */
export class Dataset {
  /**
   * Dataset metadata and configuration(s).
   */
  "attributes": DatasetAttributes;
  /**
   * Unique identifier for the dataset.
   */
  "id"?: string;
  /**
   * Resource type, always "dataset".
   */
  "type": string;
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
      type: "DatasetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return Dataset.attributeTypeMap;
  }

  public constructor() {}
}
