import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BlueprintMetadataData } from "./BlueprintMetadataData";

/**
 * The response for listing available blueprints.
 */
export class ListBlueprintsResponse {
  /**
   * An array of blueprint metadata.
   */
  "data"?: Array<BlueprintMetadataData>;
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
      type: "Array<BlueprintMetadataData>",
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
    return ListBlueprintsResponse.attributeTypeMap;
  }

  public constructor() {}
}
