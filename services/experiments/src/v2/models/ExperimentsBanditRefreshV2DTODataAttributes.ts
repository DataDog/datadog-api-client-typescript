import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The bandit being refreshed.
 */
export class ExperimentsBanditRefreshV2DTODataAttributes {
  /**
   * The ID of the bandit being refreshed.
   */
  "banditId": string;
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
    banditId: {
      baseName: "bandit_id",
      type: "string",
      required: true,
      format: "uuid",
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
    return ExperimentsBanditRefreshV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
