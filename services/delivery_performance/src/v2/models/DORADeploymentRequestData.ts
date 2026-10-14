import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentRequestAttributes } from "./DORADeploymentRequestAttributes";

/**
 * The JSON:API data.
 */
export class DORADeploymentRequestData {
  /**
   * Attributes to create a DORA deployment event.
   */
  "attributes": DORADeploymentRequestAttributes;
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
      type: "DORADeploymentRequestAttributes",
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
    return DORADeploymentRequestData.attributeTypeMap;
  }

  public constructor() {}
}
