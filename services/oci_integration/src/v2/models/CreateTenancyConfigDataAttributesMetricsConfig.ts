import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metrics collection configuration for an OCI tenancy, controlling which compartments and services are included or excluded.
 */
export class CreateTenancyConfigDataAttributesMetricsConfig {
  /**
   * List of compartment tag filters to scope metrics collection to specific compartments.
   */
  "compartmentTagFilters"?: Array<string>;
  /**
   * Whether metrics collection is enabled for the tenancy.
   */
  "enabled"?: boolean;
  /**
   * List of OCI service names to exclude from metrics collection.
   */
  "excludedServices"?: Array<string>;
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
    compartmentTagFilters: {
      baseName: "compartment_tag_filters",
      type: "Array<string>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    excludedServices: {
      baseName: "excluded_services",
      type: "Array<string>",
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
    return CreateTenancyConfigDataAttributesMetricsConfig.attributeTypeMap;
  }

  public constructor() {}
}
