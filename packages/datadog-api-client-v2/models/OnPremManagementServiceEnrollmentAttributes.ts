/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnPremManagementServiceEnrollmentAttributesRunnerModesItems } from "./OnPremManagementServiceEnrollmentAttributesRunnerModesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an enrollment.
 */
export class OnPremManagementServiceEnrollmentAttributes {
  /**
   * List of allowed actions for the runner.
   */
  "actionsAllowlist": Array<string>;
  /**
   * The hostname for the runner. Required when push mode is enabled.
   */
  "runnerHost"?: string;
  /**
   * The modes the runner should operate in.
   */
  "runnerModes": Array<OnPremManagementServiceEnrollmentAttributesRunnerModesItems>;
  /**
   * The name of the on-prem runner.
   */
  "runnerName": string;

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
    actionsAllowlist: {
      baseName: "actions_allowlist",
      type: "Array<string>",
      required: true,
    },
    runnerHost: {
      baseName: "runner_host",
      type: "string",
    },
    runnerModes: {
      baseName: "runner_modes",
      type: "Array<OnPremManagementServiceEnrollmentAttributesRunnerModesItems>",
      required: true,
    },
    runnerName: {
      baseName: "runner_name",
      type: "string",
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
    return OnPremManagementServiceEnrollmentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
