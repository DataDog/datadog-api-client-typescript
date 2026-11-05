import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Resolved routing target in a policy response.
 */
export class AiGatewayPolicyTarget {
  /**
   * Saved target row ID. On replacement, retain this ID only within its original route and at most once. A stale or foreign ID is rejected.
   */
  "id": number;
  /**
   * Model name or pattern. Omitted when retaining a saved target by ID or when its provider is hidden.
   */
  "model"?: string;
  /**
   * Routing priority.
   */
  "priority": number;
  /**
   * Provider slug. Omitted for dynamic resolution or when its provider is hidden.
   */
  "provider"?: string;
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
    id: {
      baseName: "id",
      type: "number",
      required: true,
      format: "int64",
    },
    model: {
      baseName: "model",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "number",
      required: true,
      format: "int64",
    },
    provider: {
      baseName: "provider",
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
    return AiGatewayPolicyTarget.attributeTypeMap;
  }

  public constructor() {}
}
