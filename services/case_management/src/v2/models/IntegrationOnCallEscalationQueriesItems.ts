import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationOnCallEscalationQueriesItemsTarget } from "./IntegrationOnCallEscalationQueriesItemsTarget";

export class IntegrationOnCallEscalationQueriesItems {
  "enabled"?: boolean;
  "id"?: string;
  "query"?: string;
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
