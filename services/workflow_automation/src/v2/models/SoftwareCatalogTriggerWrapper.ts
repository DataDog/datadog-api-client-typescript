import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Schema for a Software Catalog-based trigger.
 */
export class SoftwareCatalogTriggerWrapper {
  /**
   * Trigger a workflow from Software Catalog.
   */
  "softwareCatalogTrigger": any;
  /**
   * A list of steps that run first after a trigger fires.
   */
  "startStepNames"?: Array<string>;
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
    softwareCatalogTrigger: {
      baseName: "softwareCatalogTrigger",
      type: "any",
      required: true,
    },
    startStepNames: {
      baseName: "startStepNames",
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
    return SoftwareCatalogTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
