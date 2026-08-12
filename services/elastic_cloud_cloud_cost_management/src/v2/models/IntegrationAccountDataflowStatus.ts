import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountDataflowHealth } from "./IntegrationAccountDataflowHealth";

/**
 * Read-only, server-computed collection status of a dataflow.
 */
export class IntegrationAccountDataflowStatus {
  /**
   * Collection health of a single dataflow.
   */
  "health"?: IntegrationAccountDataflowHealth;
  /**
   * Human-readable detail, populated when the dataflow is not healthy.
   */
  "message"?: string;
  /**
   * Time the status was last computed.
   */
  "updatedAt"?: Date;
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
    health: {
      baseName: "health",
      type: "IntegrationAccountDataflowHealth",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
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
    return IntegrationAccountDataflowStatus.attributeTypeMap;
  }

  public constructor() {}
}
