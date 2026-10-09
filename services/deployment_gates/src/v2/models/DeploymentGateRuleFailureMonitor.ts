import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Failed monitor reference.
 */
export class DeploymentGateRuleFailureMonitor {
  /**
   * Monitor ID.
   */
  "id": string;
  /**
   * Monitor state that caused the failure.
   */
  "state": string;
  /**
   * URL for inspecting the monitor during the evaluation window.
   */
  "url": string;
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
      type: "string",
      required: true,
    },
    state: {
      baseName: "state",
      type: "string",
      required: true,
    },
    url: {
      baseName: "url",
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
    return DeploymentGateRuleFailureMonitor.attributeTypeMap;
  }

  public constructor() {}
}
