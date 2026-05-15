import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostOrchestratorType } from "./CostOrchestratorType";

/**
 * A container orchestrator detected in Cloud Cost Management data.
 */
export class CostOrchestrator {
  /**
   * The orchestrator name, for example `kubernetes` or `ecs`.
   */
  "id": string;
  /**
   * Type of the Cloud Cost Management orchestrator resource.
   */
  "type": CostOrchestratorType;
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
    type: {
      baseName: "type",
      type: "CostOrchestratorType",
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
    return CostOrchestrator.attributeTypeMap;
  }

  public constructor() {}
}
