import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Details of the experiment refresh result.
 */
export class ExperimentsRefreshExperimentResultsV2DTODataAttributes {
  /**
   * Whether the refresh request succeeded.
   */
  "success"?: boolean;
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
    success: {
      baseName: "success",
      type: "boolean",
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
    return ExperimentsRefreshExperimentResultsV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
