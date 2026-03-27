import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { State } from "./State";

/**
 * The JSON:API attributes for an outcome.
 */
export class OutcomesBatchResponseAttributes {
  /**
   * Creation time of the rule outcome.
   */
  "createdAt"?: Date;
  /**
   * Time of last rule outcome modification.
   */
  "modifiedAt"?: Date;
  /**
   * Any remarks regarding the scorecard rule's evaluation, and supports HTML hyperlinks.
   */
  "remarks"?: string;
  /**
   * The unique name for a service in the catalog.
   */
  "serviceName"?: string;
  /**
   * The state of the rule evaluation.
   */
  "state"?: State;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    remarks: {
      baseName: "remarks",
      type: "string",
    },
    serviceName: {
      baseName: "service_name",
      type: "string",
    },
    state: {
      baseName: "state",
      type: "State",
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
    return OutcomesBatchResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
