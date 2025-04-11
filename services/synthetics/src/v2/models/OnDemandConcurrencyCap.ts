import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnDemandConcurrencyCapAttributes } from "./OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapType } from "./OnDemandConcurrencyCapType";

/**
 * On-demand concurrency cap.
 */
export class OnDemandConcurrencyCap {
  /**
   * On-demand concurrency cap attributes.
   */
  "attributes"?: OnDemandConcurrencyCapAttributes;
  /**
   * On-demand concurrency cap type.
   */
  "type"?: OnDemandConcurrencyCapType;
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
      type: "OnDemandConcurrencyCapAttributes",
    },
    type: {
      baseName: "type",
      type: "OnDemandConcurrencyCapType",
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
    return OnDemandConcurrencyCap.attributeTypeMap;
  }

  public constructor() {}
}
