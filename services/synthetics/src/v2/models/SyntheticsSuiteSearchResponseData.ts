import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SuiteSearchResponseType } from "./SuiteSearchResponseType";
import { SyntheticsSuiteSearchResponseDataAttributes } from "./SyntheticsSuiteSearchResponseDataAttributes";

/**
 * Synthetics suite search response data
 */
export class SyntheticsSuiteSearchResponseData {
  /**
   * Synthetics suite search response data attributes
   */
  "attributes"?: SyntheticsSuiteSearchResponseDataAttributes;
  /**
   * The unique identifier of the suite search response data.
   */
  "id"?: string;
  /**
   * Type for the Synthetics suites search response, `suites_search`.
   */
  "type"?: SuiteSearchResponseType;
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
      type: "SyntheticsSuiteSearchResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "SuiteSearchResponseType",
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
    return SyntheticsSuiteSearchResponseData.attributeTypeMap;
  }

  public constructor() {}
}
