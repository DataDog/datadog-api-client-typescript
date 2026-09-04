import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemRumStep } from "./DemRumStep";

/**
 * A variant (sub-funnel) of a DEM journey with its own steps.
 */
export class DemVariant {
  /**
   * An optional RUM query filter to scope this variant.
   */
  "filter"?: string;
  /**
   * The unique identifier of the variant.
   */
  "id"?: string;
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
    id: {
      baseName: "id",
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
    return DemVariant.attributeTypeMap;
  }

  public constructor() {}
}
