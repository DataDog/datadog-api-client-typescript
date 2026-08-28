import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition";
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition";

/**
 * The source code location where a dependency is declared, including block, name, namespace, and version positions within the file.
 */
export class ScaRequestDataAttributesDependenciesItemsLocationsItems {
  /**
   * A range within a file defined by a start and end position, along with the file name.
   */
  "block"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition;
  /**
   * A nullable range within a file defined by a start and end position, along with the file name.
   */
  "name"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition;
  /**
   * A nullable range within a file defined by a start and end position, along with the file name.
   */
  "namespace"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition;
  /**
   * A nullable range within a file defined by a start and end position, along with the file name.
   */
  "version"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition;
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
    block: {
      baseName: "block",
      type: "ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition",
    },
    name: {
      baseName: "name",
      type: "ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition",
    },
    namespace: {
      baseName: "namespace",
      type: "ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition",
    },
    version: {
      baseName: "version",
      type: "ScaRequestDataAttributesDependenciesItemsLocationsItemsNullableFilePosition",
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
    return ScaRequestDataAttributesDependenciesItemsLocationsItems.attributeTypeMap;
  }

  public constructor() {}
}
