/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition } from "./ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition {
  "end"?: ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition;
  "fileName"?: string;
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
