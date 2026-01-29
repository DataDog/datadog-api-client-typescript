/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORADeploymentPatchRemediation } from "./DORADeploymentPatchRemediation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for patching a DORA deployment event.
 */
export class DORADeploymentPatchRequestAttributes {
  /**
   * Indicates whether the deployment resulted in a change failure.
   */
  "changeFailure"?: boolean;
  /**
   * Remediation details for the deployment.
   */
  "remediation"?: DORADeploymentPatchRemediation;

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
    changeFailure: {
      baseName: "change_failure",
      type: "boolean",
    },
    remediation: {
      baseName: "remediation",
      type: "DORADeploymentPatchRemediation",
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
    return DORADeploymentPatchRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
