/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { McpScanRequestDataAttributesLibrariesItems } from "./McpScanRequestDataAttributesLibrariesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of an MCP SCA scan request, describing the libraries to scan and their context.
 */
export class McpScanRequestDataAttributes {
  /**
   * The commit hash of the source code being scanned.
   */
  "commitHash": string;
  /**
   * The list of libraries to scan for vulnerabilities.
   */
  "libraries": Array<McpScanRequestDataAttributesLibrariesItems>;
  /**
   * The name of the resource (typically the repository or project name) being scanned.
   */
  "resourceName": string;

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
    commitHash: {
      baseName: "commit_hash",
      type: "string",
      required: true,
    },
    libraries: {
      baseName: "libraries",
      type: "Array<McpScanRequestDataAttributesLibrariesItems>",
      required: true,
    },
    resourceName: {
      baseName: "resource_name",
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
    return McpScanRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
