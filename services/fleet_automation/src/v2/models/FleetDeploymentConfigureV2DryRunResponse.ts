import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentConfigureV2DryRun } from "./FleetDeploymentConfigureV2DryRun";

/**
 * Response containing the result of a configuration deployment dry run.
 */
export class FleetDeploymentConfigureV2DryRunResponse {
  /**
   * The result of a configuration deployment dry run.
   */
  "data": FleetDeploymentConfigureV2DryRun;
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
    data: {
      baseName: "data",
      type: "FleetDeploymentConfigureV2DryRun",
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
    return FleetDeploymentConfigureV2DryRunResponse.attributeTypeMap;
  }

  public constructor() {}
}
