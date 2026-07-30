import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Elastic Cloud CCM interface settings.
 */
export class ElasticCloudCcmSettings {
  /**
   * Your Elastic Cloud organization ID, found in your organization settings.
   */
  "elasticOrgId": string;
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
    return ElasticCloudCcmSettings.attributeTypeMap;
  }

  public constructor() {}
}
