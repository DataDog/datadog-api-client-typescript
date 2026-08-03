/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentConfigureV2DryRun } from "./FleetDeploymentConfigureV2DryRun";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
