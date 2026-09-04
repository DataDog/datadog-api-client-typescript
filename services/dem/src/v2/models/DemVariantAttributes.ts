import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemRumStep } from "./DemRumStep";

/**
 * Attributes of a DEM journey variant.
 */
export class DemVariantAttributes {
  /**
   * An optional RUM query filter to scope this variant.
   */
  "filter"?: string;
  /**
   * The name of the variant.
   */
  "name": string;
  /**
   * List of RUM journey steps.
   */
  "rumSteps": Array<DemRumStep>;
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
    filter: {
      baseName: "filter",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rumSteps: {
      baseName: "rum_steps",
      type: "Array<DemRumStep>",
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
    return DemVariantAttributes.attributeTypeMap;
  }

  public constructor() {}
}
