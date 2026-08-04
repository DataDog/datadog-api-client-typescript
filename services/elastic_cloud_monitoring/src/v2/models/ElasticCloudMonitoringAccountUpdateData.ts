import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudMonitoringAccountUpdateAttributes } from "./ElasticCloudMonitoringAccountUpdateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope for updating an Elastic Cloud monitoring account.
 */
export class ElasticCloudMonitoringAccountUpdateData {
  /**
   * Updatable attributes of an Elastic Cloud monitoring account. Every field is optional; only the fields provided are changed.
   */
  "attributes": ElasticCloudMonitoringAccountUpdateAttributes;
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
      type: "ElasticCloudMonitoringAccountUpdateAttributes",
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
    return ElasticCloudMonitoringAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
