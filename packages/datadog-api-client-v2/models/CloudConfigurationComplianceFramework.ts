/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Compliance framework requirement a cloud_configuration rule maps to.
 */
export class CloudConfigurationComplianceFramework {
  /**
   * Control of the compliance framework requirement.
   */
  "control"?: string;
  /**
   * Handle of the compliance framework.
   */
  "framework"?: string;
  /**
   * Whether the mapping comes from the default rule rather than from a custom framework.
   */
  "isDefault"?: boolean;
  /**
   * Message describing how the rule maps to the compliance framework requirement.
   */
  "message"?: string;
  /**
   * Requirement of the compliance framework.
   */
  "requirement"?: string;
  /**
   * Version of the compliance framework.
   */
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
    control: {
      baseName: "control",
      type: "string",
    },
    framework: {
      baseName: "framework",
      type: "string",
    },
    isDefault: {
      baseName: "is_default",
      type: "boolean",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    requirement: {
      baseName: "requirement",
      type: "string",
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
    return CloudConfigurationComplianceFramework.attributeTypeMap;
  }

  public constructor() {}
}
