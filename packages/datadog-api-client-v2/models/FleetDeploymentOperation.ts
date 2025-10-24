/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentFileOp } from "./FleetDeploymentFileOp";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single configuration file operation to perform on the target hosts.
 */
export class FleetDeploymentOperation {
  /**
   * Type of file operation to perform on the target configuration file.
   * - `merge-patch`: Merges the provided patch data with the existing configuration file.
   *   Creates the file if it doesn't exist.
   * - `delete`: Removes the specified configuration file from the target hosts.
   */
  "fileOp": FleetDeploymentFileOp;
  /**
   * Absolute path to the target configuration file on the host.
   */
  "filePath": string;
  /**
   * Patch data in JSON format to apply to the configuration file.
   * When using `merge-patch`, this object is merged with the existing configuration,
   * allowing you to add, update, or override specific fields without replacing the entire file.
   * The structure must match the target configuration file format (for example, YAML structure for Datadog Agent config).
   * Not applicable when using the `delete` operation.
   */
  "patch"?: { [key: string]: any };

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
    fileOp: {
      baseName: "file_op",
      type: "FleetDeploymentFileOp",
      required: true,
    },
    filePath: {
      baseName: "file_path",
      type: "string",
      required: true,
    },
    patch: {
      baseName: "patch",
      type: "{ [key: string]: any; }",
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
    return FleetDeploymentOperation.attributeTypeMap;
  }

  public constructor() {}
}
