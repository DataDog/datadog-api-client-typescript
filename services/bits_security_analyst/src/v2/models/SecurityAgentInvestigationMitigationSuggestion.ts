import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationMitigationAction } from "./SecurityAgentInvestigationMitigationAction";

/**
 * A suggested mitigation.
 */
export class SecurityAgentInvestigationMitigationSuggestion {
  /**
   * Actions that apply the mitigation.
   */
  "actions"?: Array<SecurityAgentInvestigationMitigationAction>;
  /**
   * ID of the mitigation.
   */
  "id": string;
  /**
   * Why the mitigation is suggested.
   */
  "rationale": string;
  /**
   * Whether the mitigation is recommended.
   */
  "recommended": boolean;
  /**
   * What the mitigation applies to.
   */
  "scopeNote"?: string;
  /**
   * Order in which to apply the mitigation, starting at 1.
   */
  "step": number;
  /**
   * Title of the mitigation.
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
    actions: {
      baseName: "actions",
      type: "Array<SecurityAgentInvestigationMitigationAction>",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    rationale: {
      baseName: "rationale",
      type: "string",
      required: true,
    },
    recommended: {
      baseName: "recommended",
      type: "boolean",
      required: true,
    },
    scopeNote: {
      baseName: "scope_note",
      type: "string",
    },
    step: {
      baseName: "step",
      type: "number",
      required: true,
      format: "int64",
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
    return SecurityAgentInvestigationMitigationSuggestion.attributeTypeMap;
  }

  public constructor() {}
}
