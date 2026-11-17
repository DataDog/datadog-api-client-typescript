import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelZdrCoverage } from "./AiGatewayModelZdrCoverage";

/**
 * The Datadog side of a model's zero data retention eligibility. The customer side is the provider's
 * `zdr_eligible` setting.
 */
export class AiGatewayModelZdr {
  /**
   * Datadog's coverage of the model's operations under zero data retention. A model is eligible when
   * coverage is `full` and its provider's `zdr_eligible` is `true`. `partial` means only the
   * `covered_operations` can be served: requests on other operations are not dispatched to it.
   */
  "coverage": AiGatewayModelZdrCoverage;
  /**
   * Operations covered by zero data retention.
   */
  "coveredOperations"?: Array<string>;
  /**
   * Operations not covered by zero data retention.
   */
  "uncoveredOperations"?: Array<string>;
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
    coverage: {
      baseName: "coverage",
      type: "AiGatewayModelZdrCoverage",
      required: true,
    },
    coveredOperations: {
      baseName: "covered_operations",
      type: "Array<string>",
    },
    uncoveredOperations: {
      baseName: "uncovered_operations",
      type: "Array<string>",
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
    return AiGatewayModelZdr.attributeTypeMap;
  }

  public constructor() {}
}
