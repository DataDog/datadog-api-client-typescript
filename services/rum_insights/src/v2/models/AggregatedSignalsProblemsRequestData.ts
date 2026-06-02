import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedSignalsProblemsRequestAttributes } from "./AggregatedSignalsProblemsRequestAttributes";
import { AggregatedSignalsProblemsRequestType } from "./AggregatedSignalsProblemsRequestType";

/**
 * Data envelope for an aggregated signals and problems request.
 */
export class AggregatedSignalsProblemsRequestData {
  /**
   * Attributes for an aggregated signals and problems query.
   */
  "attributes": AggregatedSignalsProblemsRequestAttributes;
  /**
   * The JSON:API type for aggregated signals and problems requests.
   */
  "type": AggregatedSignalsProblemsRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "AggregatedSignalsProblemsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AggregatedSignalsProblemsRequestType",
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
    return AggregatedSignalsProblemsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
