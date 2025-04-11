import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for a GCP metric namespace.
 */
export class GCPMetricNamespaceConfig {
  /**
   * When disabled, Datadog does not collect metrics that are related to this GCP metric namespace.
   */
  "disabled"?: boolean;
  /**
   * The id of the GCP metric namespace.
   */
  "id"?: string;
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
    disabled: {
      baseName: "disabled",
      type: "boolean",
    },
    id: {
      baseName: "id",
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
    return GCPMetricNamespaceConfig.attributeTypeMap;
  }

  public constructor() {}
}
