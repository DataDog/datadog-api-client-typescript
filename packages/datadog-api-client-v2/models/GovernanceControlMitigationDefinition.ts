/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceControlParameterDefinition } from "./GovernanceControlParameterDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of a mitigation available for a control.
 */
export class GovernanceControlMitigationDefinition {
  /**
   * The verb describing the mitigation action, such as `revoke` or `delete`.
   */
  "actionVerb": string;
  /**
   * A human-readable description of the mitigation.
   */
  "description": string;
  /**
   * The execution modes the mitigation supports, such as `manual` or `automatic`.
   */
  "executionModes"?: Array<string>;
  /**
   * The feature flags that gate the mitigation.
   */
  "featureFlags": Array<string>;
  /**
   * The unique identifier of the mitigation.
   */
  "id": string;
  /**
   * A warning shown to the user before applying the mitigation manually.
   */
  "manualMitigationWarning": string;
  /**
   * The permissions required to apply the mitigation.
   */
  "permissions": Array<string>;
  /**
   * Whether the mitigation requires AI to be enabled.
   */
  "requiresAi": boolean;
  /**
   * An array of parameter definitions.
   */
  "supportedParameters": Array<GovernanceControlParameterDefinition>;
  /**
   * A short, human-readable name for the mitigation.
   */
  "title": string;

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
    actionVerb: {
      baseName: "action_verb",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    executionModes: {
      baseName: "execution_modes",
      type: "Array<string>",
    },
    featureFlags: {
      baseName: "feature_flags",
      type: "Array<string>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    manualMitigationWarning: {
      baseName: "manual_mitigation_warning",
      type: "string",
      required: true,
    },
    permissions: {
      baseName: "permissions",
      type: "Array<string>",
      required: true,
    },
    requiresAi: {
      baseName: "requires_ai",
      type: "boolean",
      required: true,
    },
    supportedParameters: {
      baseName: "supported_parameters",
      type: "Array<GovernanceControlParameterDefinition>",
      required: true,
    },
    title: {
      baseName: "title",
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
    return GovernanceControlMitigationDefinition.attributeTypeMap;
  }

  public constructor() {}
}
