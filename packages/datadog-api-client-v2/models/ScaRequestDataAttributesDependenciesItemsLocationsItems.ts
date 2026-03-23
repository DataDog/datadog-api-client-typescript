/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The source code location where a dependency is declared, including block, name, namespace, and version positions within the file.
 */
export class ScaRequestDataAttributesDependenciesItemsLocationsItems {
  /**
   * A range within a file defined by a start and end position, along with the file name.
   */
  "block"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition;
  /**
   * A range within a file defined by a start and end position, along with the file name.
   */
  "name"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition;
  /**
   * A range within a file defined by a start and end position, along with the file name.
   */
  "namespace"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition;
  /**
   * A range within a file defined by a start and end position, along with the file name.
   */
  "version"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition;

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
      type: "ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition",
    },
    namespace: {
      baseName: "namespace",
      type: "ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition",
    },
    version: {
      baseName: "version",
      type: "ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition",
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
