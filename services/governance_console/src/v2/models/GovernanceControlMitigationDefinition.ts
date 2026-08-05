import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlParameterDefinition } from "./GovernanceControlParameterDefinition";

/**
 * The definition of a mitigation available for a control.
 */
export class GovernanceControlMitigationDefinition {
  /**
   * A human-readable description of the mitigation.
   */
  "description": string;
  /**
   * The execution modes the mitigation supports, such as `manual` or `automatic`.
   */
  "executionModes": Array<string>;
  /**
   * The unique identifier of the mitigation.
   */
  "id": string;
  /**
   * The permissions required to apply the mitigation.
   */
  "permissions": Array<string>;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    executionModes: {
      baseName: "execution_modes",
      type: "Array<string>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    permissions: {
      baseName: "permissions",
      type: "Array<string>",
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
