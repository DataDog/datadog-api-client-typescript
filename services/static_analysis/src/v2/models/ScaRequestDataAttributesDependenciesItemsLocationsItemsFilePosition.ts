import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition";

/**
 * A position in a file
 */
export class ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition {
  /**
   * A position
   */
  "end"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition;
  /**
   * The `file_name`.
   */
  "fileName"?: string;
  /**
   * A position
   */
  "start"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition;
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
    end: {
      baseName: "end",
      type: "ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition",
    },
    fileName: {
      baseName: "file_name",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition",
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
    return ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition.attributeTypeMap;
  }

  public constructor() {}
}
