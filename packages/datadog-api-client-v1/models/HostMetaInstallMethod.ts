/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Agent install method.
 */
export class HostMetaInstallMethod {
  /**
   * The installer version.
   */
  "installerVersion"?: string;
  /**
   * Tool used to install the agent.
   */
  "tool"?: string;
  /**
   * The tool version.
   */
  "toolVersion"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    installerVersion: {
      baseName: "installer_version",
      type: "string",
    },
    tool: {
      baseName: "tool",
      type: "string",
    },
    toolVersion: {
      baseName: "tool_version",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMetaInstallMethod.attributeTypeMap;
  }

  public constructor() {}
}
