/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORADeploymentPatchRemediationType } from "./DORADeploymentPatchRemediationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Remediation details identified by the version of the remediation deployment, matched against the same service and environment as the failed deployment.
 */
export class DORADeploymentPatchByVersionRemediationByVersion {
  /**
   * The type of remediation action taken. Required when the failed deployment must be linked to a remediation deployment.
   */
  "type": DORADeploymentPatchRemediationType;
  /**
   * The version of the remediation deployment.
   */
  "version": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "DORADeploymentPatchRemediationType",
      required: true,
    },
    version: {
      baseName: "version",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORADeploymentPatchByVersionRemediationByVersion.attributeTypeMap;
  }

  public constructor() {}
}
