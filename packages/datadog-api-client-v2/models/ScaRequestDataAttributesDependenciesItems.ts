/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScaRequestDataAttributesDependenciesItemsLocationsItems } from "./ScaRequestDataAttributesDependenciesItemsLocationsItems";
import { ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems } from "./ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class ScaRequestDataAttributesDependenciesItems {
  "exclusions"?: Array<string>;
  "group"?: string;
  "isDev"?: boolean;
  "isDirect"?: boolean;
  "language"?: string;
  "locations"?: Array<ScaRequestDataAttributesDependenciesItemsLocationsItems>;
  "name"?: string;
  "packageManager"?: string;
  "purl"?: string;
  "reachableSymbolProperties"?: Array<ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems>;
  "version"?: string;

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
    exclusions: {
      baseName: "exclusions",
      type: "Array<string>",
    },
    group: {
      baseName: "group",
      type: "string",
    },
    isDev: {
      baseName: "is_dev",
      type: "boolean",
    },
    isDirect: {
      baseName: "is_direct",
      type: "boolean",
    },
    language: {
      baseName: "language",
      type: "string",
    },
    locations: {
      baseName: "locations",
      type: "Array<ScaRequestDataAttributesDependenciesItemsLocationsItems>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    packageManager: {
      baseName: "package_manager",
      type: "string",
    },
    purl: {
      baseName: "purl",
      type: "string",
    },
    reachableSymbolProperties: {
      baseName: "reachable_symbol_properties",
      type: "Array<ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems>",
    },
    version: {
      baseName: "version",
      type: "string",
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
    return ScaRequestDataAttributesDependenciesItems.attributeTypeMap;
  }

  public constructor() {}
}
