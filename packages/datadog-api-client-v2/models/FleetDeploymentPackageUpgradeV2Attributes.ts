/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentPackage } from "./FleetDeploymentPackage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a new v2 package upgrade deployment.
 */
export class FleetDeploymentPackageUpgradeV2Attributes {
  /**
   * Query used to filter and select target hosts for the deployment. Uses the Datadog query syntax.
   */
  "filterQuery": string;
  /**
   * List of packages and their target versions to deploy to the selected hosts.
   */
  "targetPackages": Array<FleetDeploymentPackage>;

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
    filterQuery: {
      baseName: "filter_query",
      type: "string",
      required: true,
    },
    targetPackages: {
      baseName: "target_packages",
      type: "Array<FleetDeploymentPackage>",
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
    return FleetDeploymentPackageUpgradeV2Attributes.attributeTypeMap;
  }

  public constructor() {}
}
