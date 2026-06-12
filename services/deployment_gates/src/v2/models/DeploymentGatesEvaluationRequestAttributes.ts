import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGatesEvaluationConfiguration } from "./DeploymentGatesEvaluationConfiguration";

/**
 * Attributes for a deployment gate evaluation request.
 * When `configuration` is provided, rules are evaluated inline from that configuration.
 * When omitted, rules are resolved from the preconfigured gate for the given service and environment.
 */
export class DeploymentGatesEvaluationRequestAttributes {
  /**
   * Inline rule definitions for a deployment gate evaluation. When provided, rules are evaluated
   * directly from this configuration instead of using the preconfigured gate rules.
   * At least one rule is required.
   */
  "configuration"?: DeploymentGatesEvaluationConfiguration;
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
    configuration: {
      baseName: "configuration",
      type: "DeploymentGatesEvaluationConfiguration",
    },
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
