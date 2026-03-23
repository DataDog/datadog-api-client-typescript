/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for a deployment gate evaluation request.
 */
export class DeploymentGatesEvaluationRequestAttributes {
  /**
   * The environment of the deployment.
   */
  "env": string;
  /**
   * The identifier of the deployment gate. Defaults to "default".
   */
  "identifier"?: string;
  /**
   * A primary tag to scope APM Faulty Deployment Detection rules.
   */
  "primaryTag"?: string;
  /**
   * The service being deployed.
   */
  "service": string;
  /**
   * The version of the deployment. Required for APM Faulty Deployment Detection rules.
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
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    identifier: {
      baseName: "identifier",
      type: "string",
    },
    primaryTag: {
      baseName: "primary_tag",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
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
    return DeploymentGatesEvaluationRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
