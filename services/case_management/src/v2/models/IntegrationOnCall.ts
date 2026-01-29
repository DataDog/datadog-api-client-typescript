import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationOnCallEscalationQueriesItems } from "./IntegrationOnCallEscalationQueriesItems";

/**
 * On-Call integration settings
 */
export class IntegrationOnCall {
  /**
   * Whether to auto-assign on-call
   */
  "autoAssignOnCall"?: boolean;
  /**
   * Whether On-Call integration is enabled
   */
  "enabled"?: boolean;
  "escalationQueries"?: Array<IntegrationOnCallEscalationQueriesItems>;
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
    autoAssignOnCall: {
      baseName: "auto_assign_on_call",
      type: "boolean",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    escalationQueries: {
      baseName: "escalation_queries",
      type: "Array<IntegrationOnCallEscalationQueriesItems>",
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
    return IntegrationOnCall.attributeTypeMap;
  }

  public constructor() {}
}
