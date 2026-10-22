import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPoliciesResponseMetaPage } from "./EscalationPoliciesResponseMetaPage";

/**
 * Metadata included in the response when listing escalation policies.
 */
export class EscalationPoliciesResponseMeta {
  /**
   * Pagination metadata included in the response when listing escalation policies.
   */
  "page"?: EscalationPoliciesResponseMetaPage;
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
    page: {
      baseName: "page",
      type: "EscalationPoliciesResponseMetaPage",
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
    return EscalationPoliciesResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
