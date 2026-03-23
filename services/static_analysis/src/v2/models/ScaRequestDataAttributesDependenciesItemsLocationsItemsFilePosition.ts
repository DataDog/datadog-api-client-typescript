import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition";

/**
 * A range within a file defined by a start and end position, along with the file name.
 */
export class ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition {
  /**
   * A specific position (line and column) within a source file.
   */
  "end"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition;
  /**
   * The name or path of the file containing this location.
   */
  "fileName"?: string;
  /**
   * A specific position (line and column) within a source file.
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
