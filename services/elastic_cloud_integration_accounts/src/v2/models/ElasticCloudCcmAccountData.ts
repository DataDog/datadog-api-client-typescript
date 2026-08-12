import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudCcmAccountAttributes } from "./ElasticCloudCcmAccountAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope of an Elastic Cloud CCM account, including server-assigned identity.
 */
export class ElasticCloudCcmAccountData {
  /**
   * Attributes of an Elastic Cloud CCM (Cloud Cost Management) account. The configuration is hoisted directly onto the attributes; there is no interface wrapper because the `elastic-cloud-ccm` interface is fixed by the endpoint path.
   */
  "attributes": ElasticCloudCcmAccountAttributes;
  /**
   * Server-generated unique identifier of the integration account.
   */
  "id": string;
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
      type: "ElasticCloudCcmAccountAttributes",
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
    return ElasticCloudCcmAccountData.attributeTypeMap;
  }

  public constructor() {}
}
