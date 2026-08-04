import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Partial Elastic Cloud CCM interface settings for updates.
 */
export class ElasticCloudCcmSettingsUpdate {
  /**
   * Your Elastic Cloud organization ID, found in your organization settings.
   */
  "elasticOrgId"?: string;
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
    elasticOrgId: {
      baseName: "elastic_org_id",
      type: "string",
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
    return ElasticCloudCcmSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
