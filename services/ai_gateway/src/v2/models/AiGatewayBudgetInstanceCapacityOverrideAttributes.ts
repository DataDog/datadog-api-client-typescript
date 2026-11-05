import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes used to override one budget instance's active-period capacity.
 */
export class AiGatewayBudgetInstanceCapacityOverrideAttributes {
  /**
   * New capacity for this instance in the active accounting period, in microcents.
   */
  "capacityMicrocents": number;
  /**
   * Counter key of the instance to override, as returned by the list budget instances endpoint.
   */
  "instanceKey": string;
  /**
   * Optional reason recorded with the capacity override.
   */
  "reason"?: string;
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
    capacityMicrocents: {
      baseName: "capacity_microcents",
      type: "number",
      required: true,
      format: "int64",
    },
    instanceKey: {
      baseName: "instance_key",
      type: "string",
      required: true,
    },
    reason: {
      baseName: "reason",
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
    return AiGatewayBudgetInstanceCapacityOverrideAttributes.attributeTypeMap;
  }

  public constructor() {}
}
