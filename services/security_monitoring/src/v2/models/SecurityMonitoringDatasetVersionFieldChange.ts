import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single field change between two versions of a dataset.
 */
export class SecurityMonitoringDatasetVersionFieldChange {
  /**
   * The current value of the field, serialized as a JSON value.
   */
  "current": any;
  /**
   * The name of the field that changed.
   */
  "field": string;
  /**
   * The previous value of the field, serialized as a JSON value.
   */
  "previous": any;
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
    current: {
      baseName: "current",
      type: "any",
      required: true,
    },
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
    previous: {
      baseName: "previous",
      type: "any",
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
    return SecurityMonitoringDatasetVersionFieldChange.attributeTypeMap;
  }

  public constructor() {}
}
