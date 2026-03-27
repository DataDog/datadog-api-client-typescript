import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OutcomesResponseDataItem } from "./OutcomesResponseDataItem";
import { OutcomesResponseIncludedItem } from "./OutcomesResponseIncludedItem";
import { OutcomesResponseLinks } from "./OutcomesResponseLinks";

/**
 * Scorecard outcomes - the result of a rule for a service.
 */
export class OutcomesResponse {
  /**
   * List of rule outcomes.
   */
  "data"?: Array<OutcomesResponseDataItem>;
  /**
   * Array of rule details.
   */
  "included"?: Array<OutcomesResponseIncludedItem>;
  /**
   * Links attributes.
   */
  "links"?: OutcomesResponseLinks;
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
    data: {
      baseName: "data",
      type: "Array<OutcomesResponseDataItem>",
    },
    included: {
      baseName: "included",
      type: "Array<OutcomesResponseIncludedItem>",
    },
    links: {
      baseName: "links",
      type: "OutcomesResponseLinks",
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
    return OutcomesResponse.attributeTypeMap;
  }

  public constructor() {}
}
