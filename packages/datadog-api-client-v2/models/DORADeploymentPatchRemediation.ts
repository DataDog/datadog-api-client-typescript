/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORADeploymentPatchRemediationType } from "./DORADeploymentPatchRemediationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Remediation details for the deployment. Optional, but required to calculate failed deployment recovery time. Specify either `id` or `version` to identify the remediation deployment, but not both.
 */
export class DORADeploymentPatchRemediation {
  /**
   * The ID of the remediation deployment. Use this or `version` to identify the remediation deployment, but not both.
   */
  "id"?: string;
  /**
   * The type of remediation action taken. Required when the failed deployment must be linked to a remediation deployment.
   */
  "type"?: DORADeploymentPatchRemediationType;
  /**
   * The version of the remediation deployment, matched against the same service and environment as the failed deployment. Use this or `id` to identify the remediation deployment, but not both.
   */
  "version"?: string;

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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DORADeploymentPatchRemediationType",
    },
    version: {
      baseName: "version",
      type: "string",
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
    return DORADeploymentPatchRemediation.attributeTypeMap;
  }

  public constructor() {}
}
