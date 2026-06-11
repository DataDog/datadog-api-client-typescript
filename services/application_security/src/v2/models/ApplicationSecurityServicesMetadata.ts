import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata returned alongside the list of services.
 */
export class ApplicationSecurityServicesMetadata {
  /**
   * The number of services with Application Security Management (Threats) enabled.
   */
  "numServicesWithAppsec": number;
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
    numServicesWithAppsec: {
      baseName: "num_services_with_appsec",
      type: "number",
      required: true,
      format: "int64",
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
    return ApplicationSecurityServicesMetadata.attributeTypeMap;
  }

  public constructor() {}
}
