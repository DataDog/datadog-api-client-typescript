import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * On-demand concurrency cap attributes.
 */
export class OnDemandConcurrencyCapAttributes {
  /**
   * Value of the on-demand concurrency cap.
   */
  "onDemandConcurrencyCap"?: number;
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
    onDemandConcurrencyCap: {
      baseName: "on_demand_concurrency_cap",
      type: "number",
      format: "double",
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
    return OnDemandConcurrencyCapAttributes.attributeTypeMap;
  }

  public constructor() {}
}
