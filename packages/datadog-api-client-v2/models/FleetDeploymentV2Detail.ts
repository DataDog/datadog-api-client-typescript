/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentResourceType } from "./FleetDeploymentResourceType";
import { FleetDeploymentV2DetailAttributes } from "./FleetDeploymentV2DetailAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Detailed information about a deployment.
 */
export class FleetDeploymentV2Detail {
  /**
   * Attributes of a deployment detail response.
   */
  "attributes": FleetDeploymentV2DetailAttributes;
  /**
   * Unique identifier for the deployment.
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
      type: "FleetDeploymentV2DetailAttributes",
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
    return FleetDeploymentV2Detail.attributeTypeMap;
  }

  public constructor() {}
}
