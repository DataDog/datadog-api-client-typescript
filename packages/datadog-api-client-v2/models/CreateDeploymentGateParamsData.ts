/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateDeploymentGateParamsDataAttributes } from "./CreateDeploymentGateParamsDataAttributes";
import { DeploymentGateDataType } from "./DeploymentGateDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Parameters for creating a deployment gate.
 */
export class CreateDeploymentGateParamsData {
  /**
   * Parameters for creating a deployment gate.
   */
  "attributes": CreateDeploymentGateParamsDataAttributes;
  /**
   * Deployment gate resource type.
   */
  "type": DeploymentGateDataType;

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
      type: "CreateDeploymentGateParamsDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeploymentGateDataType",
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
    return CreateDeploymentGateParamsData.attributeTypeMap;
  }

  public constructor() {}
}
