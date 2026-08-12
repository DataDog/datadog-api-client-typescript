import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmAccountUpdateAttributes } from "./ElasticCloudCcmAccountUpdateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope for updating an Elastic Cloud CCM account.
 */
export class ElasticCloudCcmAccountUpdateData {
  /**
   * Updatable attributes of an Elastic Cloud CCM account. Every field is optional; only the fields provided are changed.
   */
  "attributes": ElasticCloudCcmAccountUpdateAttributes;
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
      type: "ElasticCloudCcmAccountUpdateAttributes",
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
    return ElasticCloudCcmAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
