import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DemRumStep } from "./DemRumStep";
import { DemVariant } from "./DemVariant";

/**
 * The RUM definition for a DEM journey.
 */
export class DemJourneyRum {
  /**
   * An optional RUM query filter applied to the entire journey.
   */
  "filter"?: string;
  /**
   * List of RUM journey steps.
   */
  "rumSteps": Array<DemRumStep>;
  /**
   * List of variants associated with a DEM journey.
   */
  "variants"?: Array<DemVariant>;
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
    rumSteps: {
      baseName: "rum_steps",
      type: "Array<DemRumStep>",
      required: true,
    },
    variants: {
      baseName: "variants",
      type: "Array<DemVariant>",
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
    return DemJourneyRum.attributeTypeMap;
  }

  public constructor() {}
}
