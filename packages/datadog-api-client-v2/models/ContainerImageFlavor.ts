/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Container Image breakdown by supported platform.
 */
export class ContainerImageFlavor {
  /**
   * Time the platform-specific Container Image was built.
   */
  "builtAt"?: string;
  /**
   * Operating System architecture supported by the Container Image.
   */
  "osArchitecture"?: string;
  /**
   * Operating System name supported by the Container Image.
   */
  "osName"?: string;
  /**
   * Operating System version supported by the Container Image.
   */
  "osVersion"?: string;
  /**
   * Size of the platform-specific Container Image.
   */
  "size"?: number;

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
    builtAt: {
      baseName: "built_at",
      type: "string",
    },
    osArchitecture: {
      baseName: "os_architecture",
      type: "string",
    },
    osName: {
      baseName: "os_name",
      type: "string",
    },
    osVersion: {
      baseName: "os_version",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "number",
      format: "int64",
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
    return ContainerImageFlavor.attributeTypeMap;
  }

  public constructor() {}
}
