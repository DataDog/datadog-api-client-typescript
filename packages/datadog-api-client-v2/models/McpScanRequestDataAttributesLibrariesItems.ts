/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A library declaration to include in the dependency scan.
 */
export class McpScanRequestDataAttributesLibrariesItems {
  /**
   * The list of dependency PURLs to exclude when resolving transitive dependencies for this library.
   */
  "exclusions"?: Array<string>;
  /**
   * Whether this library is a development-only dependency.
   */
  "isDev": boolean;
  /**
   * Whether this library is a direct (rather than transitive) dependency.
   */
  "isDirect": boolean;
  /**
   * The package manager that produced this library entry (for example, `npm`, `pip`, `nuget`).
   */
  "packageManager": string;
  /**
   * The Package URL (PURL) uniquely identifying the library and its version.
   */
  "purl": string;
  /**
   * The list of target framework identifiers associated with the library.
   */
  "targetFrameworks"?: Array<string>;

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
    isDev: {
      baseName: "is_dev",
      type: "boolean",
      required: true,
    },
    isDirect: {
      baseName: "is_direct",
      type: "boolean",
      required: true,
    },
    packageManager: {
      baseName: "package_manager",
      type: "string",
      required: true,
    },
    purl: {
      baseName: "purl",
      type: "string",
      required: true,
    },
    targetFrameworks: {
      baseName: "target_frameworks",
      type: "Array<string>",
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
    return McpScanRequestDataAttributesLibrariesItems.attributeTypeMap;
  }

  public constructor() {}
}
