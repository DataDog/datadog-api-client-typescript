import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountResponseAttributes } from "./ElasticCloudIntegrationAccountResponseAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope of an Elastic Cloud integration account, including server-assigned identity.
 */
export class ElasticCloudIntegrationAccountResponseData {
  /**
   * Attributes of an Elastic Cloud integration account returned in responses.
   */
  "attributes": ElasticCloudIntegrationAccountResponseAttributes;
  /**
   * Server-generated unique identifier of the Elastic Cloud integration account.
   */
  "id": string;
  /**
   * The type of the integration account resource. Always `integration-account`.
   */
  "type": IntegrationAccountType;
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
      type: "ElasticCloudIntegrationAccountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAccountType",
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
    return ElasticCloudIntegrationAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
