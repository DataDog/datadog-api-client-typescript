import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountAttributes } from "./ElasticCloudIntegrationAccountAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope for creating an Elastic Cloud integration account.
 */
export class ElasticCloudIntegrationAccountCreateData {
  /**
   * Attributes of an Elastic Cloud integration account.
   */
  "attributes": ElasticCloudIntegrationAccountAttributes;
  /**
   * JSON:API resource type for an integration account. Always `integration-account`.
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
      type: "ElasticCloudIntegrationAccountAttributes",
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
    return ElasticCloudIntegrationAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
