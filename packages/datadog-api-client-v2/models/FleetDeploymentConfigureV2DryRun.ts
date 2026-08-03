/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentConfigureV2DryRunAttributes } from "./FleetDeploymentConfigureV2DryRunAttributes";
import { FleetDeploymentResourceType } from "./FleetDeploymentResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The result of a configuration deployment dry run.
 */
export class FleetDeploymentConfigureV2DryRun {
  /**
   * Attributes of a configuration deployment dry-run response.
   */
  "attributes": FleetDeploymentConfigureV2DryRunAttributes;
  /**
   * Always `"dry-run"` for a dry-run response. Does not identify a real deployment
   * and cannot be used to fetch a deployment by ID.
   */
  "id": string;
  /**
   * The type of deployment resource.
   */
  "type": FleetDeploymentResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "FleetDeploymentConfigureV2DryRunAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetDeploymentResourceType",
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
    return FleetDeploymentConfigureV2DryRun.attributeTypeMap;
  }

  public constructor() {}
}
