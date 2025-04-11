import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnDemandConcurrencyCap } from "./OnDemandConcurrencyCap";

/**
 * On-demand concurrency cap response.
 */
export class OnDemandConcurrencyCapResponse {
  /**
   * On-demand concurrency cap.
   */
  "data"?: OnDemandConcurrencyCap;
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
      type: "OnDemandConcurrencyCap",
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
    return OnDemandConcurrencyCapResponse.attributeTypeMap;
  }

  public constructor() {}
}
