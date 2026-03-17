import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationOnCallEscalationQueriesItemsTarget } from "./IntegrationOnCallEscalationQueriesItemsTarget";

/**
 * An On-Call escalation query entry used to route cases to on-call responders
 */
export class IntegrationOnCallEscalationQueriesItems {
  /**
   * Whether this escalation query is enabled
   */
  "enabled"?: boolean;
  /**
   * Unique identifier of the escalation query
   */
  "id"?: string;
  /**
   * The query used to match cases for escalation
   */
  "query"?: string;
  /**
   * The target recipient for an On-Call escalation query
   */
  "target"?: IntegrationOnCallEscalationQueriesItemsTarget;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "IntegrationOnCallEscalationQueriesItemsTarget",
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
    return IntegrationOnCallEscalationQueriesItems.attributeTypeMap;
  }

  public constructor() {}
}
