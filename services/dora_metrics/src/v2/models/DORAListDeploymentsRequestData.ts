import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAListDeploymentsRequestAttributes } from "./DORAListDeploymentsRequestAttributes";
import { DORAListDeploymentsRequestDataType } from "./DORAListDeploymentsRequestDataType";

/**
 * The JSON:API data.
 */
export class DORAListDeploymentsRequestData {
  /**
   * Attributes to get a list of deployments.
   */
  "attributes": DORAListDeploymentsRequestAttributes;
  /**
   * The definition of `DORAListDeploymentsRequestDataType` object.
   */
  "type"?: DORAListDeploymentsRequestDataType;
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
      type: "DORAListDeploymentsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DORAListDeploymentsRequestDataType",
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
    return DORAListDeploymentsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
