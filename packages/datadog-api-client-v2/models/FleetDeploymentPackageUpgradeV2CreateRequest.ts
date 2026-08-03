/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentPackageUpgradeV2Create } from "./FleetDeploymentPackageUpgradeV2Create";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request payload for creating a new v2 package upgrade deployment.
 */
export class FleetDeploymentPackageUpgradeV2CreateRequest {
  /**
   * Data for creating a new v2 package upgrade deployment.
   */
  "data": FleetDeploymentPackageUpgradeV2Create;

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
      type: "FleetDeploymentPackageUpgradeV2Create",
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
    return FleetDeploymentPackageUpgradeV2CreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
