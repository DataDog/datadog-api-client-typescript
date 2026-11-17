import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { CoreWeaveCloudIntegrationAccountCreateAttributes } from "./CoreWeaveCloudIntegrationAccountCreateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope for creating a CoreWeave integration account.
 */
export class CoreWeaveCloudIntegrationAccountCreateData {
  /**
   * Writable attributes used to create a CoreWeave integration account.
   */
  "attributes": CoreWeaveCloudIntegrationAccountCreateAttributes;
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
      type: "CoreWeaveCloudIntegrationAccountCreateAttributes",
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
    return CoreWeaveCloudIntegrationAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
